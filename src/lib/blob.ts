const BLOB_BASE_URL = "https://bcjxc5oyogillygw.public.blob.vercel-storage.com";

/**
 * Builds a URL to an image hosted on Vercel Blob storage.
 * Pass the base filename including the .webp extension, e.g. "Founder.webp".
 */
export function blobUrl(filename: string): string {
  return `${BLOB_BASE_URL}/${encodeURIComponent(filename)}`;
}
