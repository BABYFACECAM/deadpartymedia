import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeRichImageComponentFields {
    internalName?: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
    caption?: EntryFieldTypes.Text;
    fullWidth?: EntryFieldTypes.Boolean;
}

export type TypeRichImageComponentSkeleton = EntrySkeletonType<TypeRichImageComponentFields, "richImageComponent">;
export type TypeRichImageComponent<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRichImageComponentSkeleton, Modifiers, Locales>;
