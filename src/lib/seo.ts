import { useEffect } from "react";

import { blobUrl } from "./blob";

// TODO: confirm this matches the exact domain connected in your Vercel project
// settings (Settings → Domains). Update this one constant if it's different —
// everything below (sitemap, robots.txt, canonical/OG tags) reads from it.
export const SITE_URL = "https://thedrinksmasters.vercel.app";

export const SITE_NAME = "The Drinks Masters";

export const DEFAULT_OG_IMAGE = blobUrl("drinks 6.webp");

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Sets the document title, meta description, canonical URL, and Open
 * Graph / Twitter tags for the current page. Vite is a client-rendered SPA
 * (no server-side rendering), so this runs after mount — good enough for
 * crawlers that execute JS (Google, Bing) but won't help crawlers that only
 * read the initial HTML. For that, static prerendering would be a separate
 * project.
 */
export function useSEO({
  title,
  description,
  path,
  image,
  isHome = false,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  isHome?: boolean;
  noindex?: boolean;
}) {
  useEffect(() => {
    const fullTitle = isHome ? `${SITE_NAME} — ${title}` : `${title} — ${SITE_NAME}`;
    const url = `${SITE_URL}${path}`;
    const ogImage = image ?? DEFAULT_OG_IMAGE;

    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setCanonical(url);

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:site_name", SITE_NAME);

    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);
  }, [title, description, path, image, isHome, noindex]);
}
