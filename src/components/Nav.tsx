import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";

import { blobUrl } from "../lib/blob";
import { useContactModal } from "../context/ContactModalContext";

const logo = blobUrl("logo-removebg-preview (1).webp");

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/brands", label: "Brands" },
  { to: "/contact", label: "Contact" },
];

const REVEAL_ZONE_PX = 60; // how close the cursor must get to the top edge to peek the nav
const HIDE_AFTER_PX = 96; // don't start hiding until scrolled past the header's own height

export function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { openContactModal } = useContactModal();
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function onScroll() {
      const y = window.scrollY;
      const goingDown = y > lastScrollY.current;
      lastScrollY.current = y;

      if (y < HIDE_AFTER_PX) {
        setHidden(false);
        return;
      }
      setHidden(goingDown);
    }

    function onMouseMove(e: MouseEvent) {
      if (e.clientY <= REVEAL_ZONE_PX) setHidden(false);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // Never hide while the mobile menu is open, or the hamburger would vanish mid-interaction.
  const translateHidden = hidden && !open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/40 transition-transform duration-300 ${
        translateHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container-x flex items-center justify-between h-24">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="The Drinks Masters"
            className="h-20 w-auto brightness-0 invert drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
          />
        </Link>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-muted-foreground items-center">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `hover:text-cream transition-colors ${isActive ? "text-cream" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={openContactModal}
          className="hidden md:inline-flex items-center justify-center bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold hover:opacity-90 hover:scale-105 active:scale-95 transition"
        >
          Connect With Us
        </button>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile menu overlay — portaled to <body> so it isn't trapped inside
            the header's backdrop-blur containing block (fixed positioning
            inside a backdrop-filter ancestor is scoped to that ancestor,
            not the viewport). */}
        {open &&
          createPortal(
            <div className="md:hidden fixed inset-0 z-[60] bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-2xl uppercase tracking-widest text-foreground hover:text-cream transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openContactModal();
                }}
                className="mt-4 inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm uppercase tracking-widest font-bold hover:opacity-90 hover:scale-105 active:scale-95 transition"
              >
                Connect With Us
              </button>
            </div>,
            document.body,
          )}
      </div>
    </header>
  );
}
