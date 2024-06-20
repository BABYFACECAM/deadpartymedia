import path from "path";

import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import { TypeSeoModelFields } from "@/content-types";
import { TypeSeoModel } from "@/content-types";
import { Metadata } from "next";

const generateUrl = (locale: string, slug: string) =>
  new URL(
    path.join(locale, slug),
    process.env.NEXT_PUBLIC_BASE_URL!
  ).toString();

export const SeoFields = ({
  pageTitle,
  pageDescription,
  noIndex,
  nofollow,
  canonicalUrl,
  shareImages,
}: TypeSeoModelFields) => {
  const { locale, locales, asPath } = useRouter();

  const url = generateUrl(locale || "", asPath);

  const languageAlternates =
    locales?.map((locale) => ({
      hrefLang: locale,
      href: generateUrl(locale, asPath),
    })) || [];
};
