"use client";

import React, { useEffect, useState } from "react";
import { fetchArticlesByCategory } from "@/utils/blogPosts";
import Image from "next/image";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { ContentImage } from "@/content-types/ContentImage";
import { twMerge } from "tailwind-merge";
import { TypeBlogPostFields } from "@/content-types"; // Ensure this is the correct path to your BlogPost type

interface ArticleSectionProps {
  category: "Country" | "EDM" | "Hip-Hop" | "Local Spotlight" | "Rock";
  title: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  body: RichTextDocument | null;
  image: ContentImage | null;
  genre: Array<"Country" | "EDM" | "Hip-Hop" | "Local Spotlight" | "Rock">;
  subtitle: string;
  datePublished: string;
}

const ArticleSection: React.FC<ArticleSectionProps> = ({ category, title }) => {
  const [articles, setArticles] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await fetchArticlesByCategory(category, 3, false);
      setArticles(fetchedArticles);
    };

    fetchArticles();
  }, [category]);

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
          >
            {article.image && (
              <Image
                src={article.image.url}
                alt={article.image.alt}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <time dateTime={article.datePublished} className="mr-8">
                {new Date(article.datePublished).toLocaleDateString()}
              </time>
              <div className="-ml-4 flex items-center gap-x-4">
                <svg
                  viewBox="0 0 2 2"
                  className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="flex gap-x-2.5">
                  <img
                    src={article?.image?.url}
                    alt={article.title}
                    className="h-6 w-6 flex-none rounded-full bg-white/10"
                  />
                  {article.genre}
                </div>
              </div>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
              <a href={article.slug}>
                <span className="absolute inset-0" />
                {article.title}
              </a>
            </h3>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ArticleSection;
