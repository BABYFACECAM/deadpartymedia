// utils/contentfulClient.ts
import { createClient } from "contentful";

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_PREVIEW_ACCESS_TOKEN,
} = process.env;

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
  throw new Error("Contentful space ID or access token is missing.");
}

console.log("CONTENTFUL_SPACE_ID:", CONTENTFUL_SPACE_ID);
console.log("CONTENTFUL_ACCESS_TOKEN:", CONTENTFUL_ACCESS_TOKEN);

const client = createClient({
  space: CONTENTFUL_SPACE_ID!,
  accessToken: CONTENTFUL_ACCESS_TOKEN!,
});

const previewClient = createClient({
  space: CONTENTFUL_SPACE_ID!,
  accessToken: CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
  host: "preview.contentful.com",
});

export default function contentfulClient({ preview = false }) {
  if (preview) {
    return previewClient;
  }
  return client;
}
