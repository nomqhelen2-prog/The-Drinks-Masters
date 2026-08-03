const BLOB_BASE_URL = "https://bcjxc5oyogillygw.public.blob.vercel-storage.com";

/**
 * Builds a URL to an image hosted on Vercel Blob storage.
 * Pass the base filename including the .webp extension, e.g. "Founder.webp".
 *
 * Pass `version` when a file was re-uploaded under the same filename — it
 * appends a cache-busting query param so Vercel's CDN (and browsers) fetch
 * the new bytes instead of serving a stale cached copy at that same URL.
 */
export function blobUrl(filename: string, version?: string | number): string {
  const base = `${BLOB_BASE_URL}/${encodeURIComponent(filename)}`;
  return version ? `${base}?v=${encodeURIComponent(version)}` : base;
}
