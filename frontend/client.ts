import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: "9v2nhemc",
    dataset: "production",
    useCdn: true
})