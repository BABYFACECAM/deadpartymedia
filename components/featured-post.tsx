import { fetchFeaturedPost } from "@/utils/blogPosts";
import { draftMode } from "next/headers";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default async function FeaturedPost() {
  const featuredPost = await fetchFeaturedPost({
    preview: draftMode().isEnabled,
  });

  if (!featuredPost) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={twMerge(
        `flex flex-col overflow-hidden rounded-2xl border border-red-600 shadow-lg`,
        "lg:flex-row"
      )}
    >
      <div className="flex-1 basis-1/2">
        {featuredPost.image && (
          <Image
            src={featuredPost.image.url}
            width={featuredPost.image.width}
            height={featuredPost.image.height}
            alt={featuredPost.title}
            className="w-full max-w-sm rounded-lg shadow-2xl"
          />
        )}
      </div>

      <div className="relative flex flex-1 basis-1/2 flex-col justify-center py-6 px-4 lg:px-16 lg:py-12 xl:px-24">
        <div className="mb-2 flex flex-wrap items-center">
          <div
            className={twMerge(
              "ml-auto pl-2 lg:absolute lg:top-8 xl:top-12 text-xs text-gray-600",
              "lg:block"
            )}
          >
            {featuredPost.genre}
          </div>
        </div>
        <h1 className="text-4xl font-bold">{featuredPost.title}</h1>
        {featuredPost.subtitle && (
          <p className="mt-2 text-lg">{featuredPost.subtitle}</p>
        )}
      </div>
    </div>
  );
}
