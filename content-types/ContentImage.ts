import { Asset, AssetLink } from "contentful";

export interface ContentImage {
  url: string;
  alt: string;
  width: number;
  height: number;
  title: string;
}

export function parseContentfulContentImage(
  asset?: Asset<undefined, string> | { sys: AssetLink }
): ContentImage | null {
  if (!asset) {
    return null;
  }

  if (!("fields" in asset)) {
    return null;
  }

  const { file, title } = asset.fields;
  const url = file?.url
    ? file.url.startsWith("//")
      ? `https:${file.url}`
      : file.url
    : "";
  const width = file?.details?.image?.width || 0;
  const height = file?.details?.image?.height || 0;

  return {
    url,
    alt: title || "",
    width,
    height,
    title: title || "",
  };
}
