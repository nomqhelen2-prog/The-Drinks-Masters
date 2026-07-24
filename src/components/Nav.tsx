import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { blobUrl } from "../lib/blob";

const logo = blobUrl("logo-removebg-preview (1).webp");

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/brands", label: "Brands" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/40">
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

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center justify-center bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold hover:opacity-90 transition"
        >
          Connect With Us
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile menu overlay */}
        {open && (
          <div className="md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8">
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
          </div>
        )}
      </div>
    </header>
  );
}
