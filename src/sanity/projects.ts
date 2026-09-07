import type { ArbitraryTypedObject, PortableTextBlock } from '@portabletext/types';
import { defineQuery } from 'groq';

import { sanityClient } from './client';

export interface ProjectResource {
  _key: string;
  title: string;
  url?: string;
  description?: string;
}

export interface ProjectImageBlock extends ArbitraryTypedObject {
  _key: string;
  _type: 'image';
  alt?: string;
  caption?: string;
  url?: string;
}

export interface SanityProject {
  _id: string;
  title: string;
  slug?: string;
  description?: string;
  content?: Array<PortableTextBlock | ProjectImageBlock>;
  githubUrl?: string;
  cardImageUrl?: string;
  publishedAt: string;
  resources?: ProjectResource[];
}

const projectSummaryFields = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  description,
  "githubUrl": coalesce(githubUrl, github, githubLink),
  "cardImageUrl": cardImage.asset->url,
  publishedAt
`;

const projectDetailFields = /* groq */ `
  ${projectSummaryFields},
  content[] {
    ...,
    _type == "image" => {
      "url": asset->url
    }
  },
  "resources": coalesce(footerLinks, resources, furtherReading)[] {
    _key,
    title,
    url,
    description
  }
`;

const projectsQuery = defineQuery(/* groq */ `
  *[_type == "project"] | order(_createdAt desc) {
    ${projectSummaryFields}
  }
`);

const projectBySlugQuery = defineQuery(/* groq */ `
  *[_type == "project" && slug.current == $slug][0] {
    ${projectDetailFields}
  }
`);

const projectDetailsQuery = defineQuery(/* groq */ `
  *[_type == "project"] {
    ${projectDetailFields}
  }
`);

export function getProjects() {
  return sanityClient.fetch<SanityProject[]>(projectsQuery);
}

export function getProjectSlug(project: Pick<SanityProject, 'slug' | 'title'>) {
  return (
    project.slug ??
    project.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  );
}

export async function getProjectBySlug(slug: string) {
  const project = await sanityClient.fetch<SanityProject | null>(
    projectBySlugQuery,
    { slug }
  );

  if (project) {
    return project;
  }

  const projects = await sanityClient.fetch<SanityProject[]>(
    projectDetailsQuery
  );
  return projects.find((item) => getProjectSlug(item) === slug) ?? null;
}
