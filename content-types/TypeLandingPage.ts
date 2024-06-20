import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBlogPostSkeleton } from "./TypeBlogPost";
import type { TypeSeoModelSkeleton } from "./TypeSeoModel";

export interface TypeLandingPageFields {
    internalName: EntryFieldTypes.Symbol;
    seoFields?: EntryFieldTypes.EntryLink<TypeSeoModelSkeleton>;
    featuredBlogPost?: EntryFieldTypes.EntryLink<TypeBlogPostSkeleton>;
}

export type TypeLandingPageSkeleton = EntrySkeletonType<TypeLandingPageFields, "landingPage">;
export type TypeLandingPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLandingPageSkeleton, Modifiers, Locales>;
