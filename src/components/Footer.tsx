import { Link } from "react-router-dom";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";

import { blobUrl } from "../lib/blob";

const logo = blobUrl("logo-removebg-preview (1).webp");

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/brands", label: "Brands" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-x py-16 grid gap-12 md:grid-cols-3">
        <div>
          <Link to="/" className="inline-flex items-center mb-4">
            <img
              src={logo}
              alt="The Drinks Masters"
              className="h-24 w-auto brightness-0 invert drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
            />
          </Link>
          <p className="text-muted-foreground max-w-xs leading-relaxed">
            Luxury mobile bar and beverage experiences, turning every celebration into a moment
            worth remembering, across Johannesburg, Cape Town, Durban and beyond.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-cream mb-6">Navigate</h4>
          <nav className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-muted-foreground hover:text-cream transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-cream mb-6">Contact</h4>
          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/27601064358"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-cream transition-colors"
            >
              <FaWhatsapp className="w-5 h-5 text-cream shrink-0" />
              +27 60 106 4358
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@thedrinksmasters.co.za&su=Enquiry%20—%20The%20Drinks%20Masters"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-cream transition-colors"
            >
              <FaEnvelope className="w-5 h-5 text-cream shrink-0" />
              info@thedrinksmasters.co.za
            </a>
            <a
              href="https://instagram.com/thedrinksmasters"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-cream transition-colors"
            >
              <FaInstagram className="w-5 h-5 text-cream shrink-0" />
              @thedrinksmasters
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <p className="container-x text-center text-xs uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} The Drinks Masters — JHB{" "}
          <span className="text-cream">|</span> CPT <span className="text-cream">|</span> DBN{" "}
          <span className="text-cream">|</span> SWZ
        </p>
      </div>
    </footer>
  );
}
