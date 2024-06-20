import {
  TypeAuthorSkeleton,
  TypeBlogPostSkeleton,
  TypeLandingPageSkeleton,
} from "@/content-types";
import { Entry } from "contentful";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import contentfulClient from "./contentfulClient";
import {
  ContentImage,
  parseContentfulContentImage,
} from "@/content-types/ContentImage";

type BlogPostEntry = Entry<TypeBlogPostSkeleton, undefined, string>;
type AuthorEntry = Entry<TypeAuthorSkeleton, undefined, string>;
type FeaturedPostEntry = Entry<TypeLandingPageSkeleton, undefined, string>;

export interface BlogPost {
  title: string;
  slug: string;
  body: RichTextDocument | null;
  image: ContentImage | null;
  genre: Array<"Country" | "EDM" | "Hip-Hop" | "Local Spotlight" | "Rock">;
  subtitle: string;
  datePublished: string;
}

export interface Author extends AuthorEntry {
  name: string;
  profilePicture: ContentImage | null;
  bio: string;
}

export function parseContentfulBlogPost(
  blogPostEntry?: BlogPostEntry
): BlogPost | null {
  if (!blogPostEntry) {
    return null;
  }
  const genre = Array.isArray(blogPostEntry.fields.genre)
    ? (blogPostEntry.fields.genre as Array<
        "Country" | "EDM" | "Hip-Hop" | "Local Spotlight" | "Rock"
      >)
    : [];

  return {
    title: blogPostEntry.fields.title || "",
    slug: blogPostEntry.fields.slug,
    body: blogPostEntry.fields.content || null,
    image: parseContentfulContentImage(blogPostEntry.fields.featuredImage),
    subtitle: blogPostEntry.fields.subtitle || "",
    genre: genre,
    datePublished: blogPostEntry.fields.publishedDate,
  };
}

interface FetchBlogPostsOptions {
  preview: boolean;
}

export async function fetchBlogPosts({
  preview,
}: FetchBlogPostsOptions): Promise<BlogPost[]> {
  const contentful = contentfulClient({ preview });

  const blogPostsResult = await contentful.getEntries<TypeBlogPostSkeleton>({
    content_type: "blogPost",
    include: 3,
    order: ["fields.publishedDate"],
  });

  return blogPostsResult.items.map(
    (blogPostEntry) => parseContentfulBlogPost(blogPostEntry) as BlogPost
  );
}

interface FetchBlogPostOptions {
  slug: string;
  preview: boolean;
}

export async function fetchBlogPost({
  slug,
  preview,
}: FetchBlogPostOptions): Promise<BlogPost | null> {
  const contentful = contentfulClient({ preview });

  const blogPostResult = await contentful.getEntries<TypeBlogPostSkeleton>({
    content_type: "blogPost",
    "fields.slug": slug,
    include: 2,
  });

  return parseContentfulBlogPost(blogPostResult.items[0]);
}

export async function fetchFeaturedPost({
  preview,
}: {
  preview: boolean;
}): Promise<BlogPost | null> {
  const contentful = contentfulClient({ preview });

  const featuredPostResult =
    await contentful.getEntries<TypeLandingPageSkeleton>({
      content_type: "landingPage",
      include: 2,
      limit: 1,
    });

  if (!featuredPostResult.items.length) {
    return null;
  }
  const featuredPost = featuredPostResult.items[0] as FeaturedPostEntry;
  const featuredPostEntry = featuredPost.fields
    .featuredBlogPost as BlogPostEntry;

  return parseContentfulBlogPost(featuredPostEntry);
}

export async function fetchArticlesByCategory(
  genre: "Country" | "EDM" | "Hip-Hop" | "Local Spotlight" | "Rock",
  limit: number = 3,
  preview: boolean
): Promise<BlogPost[]> {
  const contentful = contentfulClient({ preview });

  const articlesResult = await contentful.getEntries<TypeBlogPostSkeleton>({
    content_type: "blogPost",
    "fields.genre[in]": [genre],
    limit,
  });

  return articlesResult.items.map(
    (item) => parseContentfulBlogPost(item) as BlogPost
  );
}
