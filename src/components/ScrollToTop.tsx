import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll position to the top whenever the route changes.
 * React Router doesn't do this automatically for client-side navigation —
 * without it, clicking a nav link keeps whatever scroll position you were
 * at on the previous page.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
