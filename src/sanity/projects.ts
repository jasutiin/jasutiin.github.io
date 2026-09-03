import { defineQuery } from 'groq';

import { sanityClient } from './client';

export interface SanityProject {
  _id: string;
  title: string;
  description?: string;
  cardImageUrl?: string;
}

const projectsQuery = defineQuery(/* groq */ `
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    description,
    "cardImageUrl": cardImage.asset->url
  }
`);

export function getProjects() {
  return sanityClient.fetch<SanityProject[]>(projectsQuery);
}
