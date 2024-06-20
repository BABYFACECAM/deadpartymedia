import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAuthorSkeleton } from "./TypeAuthor";
import type { TypeSeoModelSkeleton } from "./TypeSeoModel";

export interface TypeBlogPostFields {
    internalName?: EntryFieldTypes.Symbol;
    seoFields?: EntryFieldTypes.EntryLink<TypeSeoModelSkeleton>;
    slug: EntryFieldTypes.Symbol;
    author?: EntryFieldTypes.EntryLink<TypeAuthorSkeleton>;
    publishedDate: EntryFieldTypes.Date;
    title: EntryFieldTypes.Symbol;
    subtitle?: EntryFieldTypes.Text;
    featuredImage: EntryFieldTypes.AssetLink;
    genre: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"Country" | "EDM" | "Hip-Hop" | "Local Spotlight" | "Rock">>;
    content: EntryFieldTypes.RichText;
    relatedBlogPosts?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBlogPostSkeleton>>;
}

export type TypeBlogPostSkeleton = EntrySkeletonType<TypeBlogPostFields, "blogPost">;
export type TypeBlogPost<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;
