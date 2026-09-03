import { defineQuery } from 'groq';

import { sanityClient } from './client';

export interface SanityProject {
  _id: string;
  title: string;
  slug?: string;
  description?: string;
  content?: string;
  githubUrl?: string;
  cardImageUrl?: string;
}

const projectFields = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  description,
  "content": pt::text(content),
  "githubUrl": coalesce(githubUrl, github, githubLink),
  "cardImageUrl": cardImage.asset->url
`;

const projectsQuery = defineQuery(/* groq */ `
  *[_type == "project"] | order(_createdAt desc) {
    ${projectFields}
  }
`);

const projectBySlugQuery = defineQuery(/* groq */ `
  *[_type == "project" && slug.current == $slug][0] {
    ${projectFields}
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

  const projects = await getProjects();
  return projects.find((item) => getProjectSlug(item) === slug) ?? null;
}
