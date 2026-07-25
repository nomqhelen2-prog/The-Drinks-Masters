import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { blobUrl } from "../lib/blob";

const ladiesImage = blobUrl("image ladies.webp");
const mixingImage = blobUrl("mixing.webp");

const STORY_IMAGE =
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&q=80";

const stats = [
  {
    n: "128+",
    label: "Events Crafted",
    desc: "From intimate weddings to global brand activations, every event is executed with precision and care.",
  },
  {
    n: "12",
    label: "Luxury Brands",
    desc: "Trusted by the world's most refined names to deliver beverage experiences that match their standards.",
  },
  {
    n: "5",
    label: "Regions Served",
    desc: "Delivering premium mobile bar experiences across Johannesburg, Cape Town, Durban, Eswatini and beyond.",
  },
  {
    n: "4.6k",
    label: "Community",
    desc: "A growing community of clients and guests who keep coming back for the experience.",
  },
];

export default function Home() {
  useEffect(() => {
    document.title = "The Drinks Masters — Luxury Mobile Bar Experiences";
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* Full-width cover — fills the whole banner edge to edge. Since the
            source clip is a vertical (9:16) recording, this crops in on the
            top/bottom of the frame to fill the width; on very wide monitors
            the video is upscaled slightly beyond its native resolution. */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={STORY_IMAGE}
        >
          <source src="/videos/hero-tshepo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-background" />
      </section>

<section className="pt-24 pb-16 md:pt-32 md:pb-20 container-x flex flex-col items-center text-center">
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-cream mb-6">
          Luxury Mobile Bar Experiences
        </p>
        <h2 className="display text-5xl md:text-6xl lg:text-7xl leading-[0.95] max-w-4xl">
          Every pour, <br />
          <span className="text-cream">a moment</span> <br />
          worth remembering.
        </h2>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          Africa's leading luxury mobile bar company. Signature cocktails, premium coffee bars,
          and bespoke beverage activations executed with excellence.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm uppercase tracking-widest font-semibold hover:opacity-90 transition"
          >
            Book an Experience
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full text-sm uppercase tracking-widest text-foreground hover:border-primary hover:text-cream transition"
          >
            Explore Services
          </Link>
        </div>
      </section>

<section className="relative pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden">
        <img
          src={ladiesImage}
          alt="Guests enjoying a Drinks Masters activation"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
          loading="lazy"
        />
        <div className="container-x relative z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-cream mb-4">Our Impact</p>
          <h2 className="display text-4xl md:text-6xl max-w-2xl mb-16">
            Numbers that reflect our craft.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-56 md:mt-72">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-8 border border-cream/20 rounded-2xl bg-background/50 backdrop-blur-sm"
              >
                <div className="display text-5xl text-cream mb-6">{s.n}</div>
                <div className="text-lg font-semibold mb-2">{s.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 mt-12 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm uppercase tracking-widest font-semibold hover:opacity-90 transition"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

<section className="relative overflow-hidden border-t border-border">
        <div className="grid md:grid-cols-2">
          <div className="container-x py-20 md:py-28 flex flex-col justify-center">
            <p className="italic text-cream mb-4">Timeless. Thoughtful. True.</p>
            <h2 className="display text-4xl md:text-5xl mb-6 max-w-md">
              Need assistance? Let's get in touch!
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed">
              Whether you're planning an intimate celebration or a large-scale brand activation,
              our dedicated team is here to help with menus, pricing, or anything in between.
              Reach out today and we'll make sure you get the guidance you need, promptly.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 self-start rounded-full border border-cream/40 px-6 py-3 text-sm uppercase tracking-widest text-cream hover:bg-cream hover:text-background transition"
            >
              Contact Us
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </Link>
          </div>
          <div className="relative min-h-[320px] md:min-h-0">
            <img
              src={mixingImage}
              alt="A Drinks Masters bartender mixing a cocktail"
              className="absolute inset-0 w-full h-full object-cover md:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
