import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: '6bzu4fb5',
  dataset: 'production',
  apiVersion: '2026-09-03',
  useCdn: true,
  perspective: 'published',
});
