import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeSeoModelFields {
  internalName: EntryFieldTypes.Symbol;
  pageTitle: EntryFieldTypes.Symbol;
  pageDescription?: EntryFieldTypes.Text;
  canonicalUrl?: EntryFieldTypes.Symbol;
  nofollow: EntryFieldTypes.Boolean;
  noIndex: EntryFieldTypes.Boolean;
  shareImages?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeSeoModelSkeleton = EntrySkeletonType<
  TypeSeoModelFields,
  "seoModel"
>;
export type TypeSeoModel<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeSeoModelSkeleton, Modifiers, Locales>;
