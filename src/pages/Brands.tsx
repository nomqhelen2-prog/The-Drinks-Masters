import { Globe2 } from "lucide-react";

import { blobUrl } from "../lib/blob";
import { useSEO } from "../lib/seo";

const logo = blobUrl("logo-removebg-preview (1).webp");
const rolexLogo = blobUrl("images-removebg-preview.webp");
const patekLogo = blobUrl("patek_phillioe-removebg-preview.webp");
const audiLogo = blobUrl("audi-removebg-preview.webp");
const amiriLogo = blobUrl("amiri-removebg-preview.webp");
const diorLogo = blobUrl("dior-removebg-preview.webp");
const radoLogo = blobUrl("rado-removebg-preview.webp");
const martellLogo = blobUrl("martell-removebg-preview.webp");
const belairLogo = blobUrl("belair-removebg-preview.webp");
const narsLogo = blobUrl("nars-removebg-preview.webp");
const nyxLogo = blobUrl("nyx-removebg-preview.webp");
const theOrdinaryLogo = blobUrl("the_ordinary-removebg-preview.webp");
const luxxVenueLogo = blobUrl("luxx_venue-removebg-preview.webp");
const superSportLogo = blobUrl("supersport-removebg-preview.webp");
const woolworthsLogo = blobUrl("woolworths-removebg-preview.webp");
const skinsLogo = blobUrl("skins-removebg-preview.webp");
const kylieLogo = blobUrl("kylie-removebg-preview.webp");
const lileLogo = blobUrl("lile-removebg-preview.webp");
const casablancaLogo = blobUrl("casablanca-removebg-preview.webp");
const bathuLogo = blobUrl("bathu-removebg-preview.webp");
const bigBrotherLogo = blobUrl("big_brother-removebg-preview.webp");
const axeLogo = blobUrl("axe-removebg-preview.webp");
const eggLogo = blobUrl("egg-removebg-preview.webp");
const glamourLogo = blobUrl("glamour-removebg-preview.webp");
const netflixLogo = blobUrl("netflix-removebg-preview.webp");

type Brand = { name: string; logo: string; dark?: boolean; website?: string };

const brands: Brand[] = [
  { name: "Rolex", logo: rolexLogo, website: "https://www.rolex.com" },
  { name: "Patek Philippe", logo: patekLogo, website: "https://www.patek.com" },
  { name: "Audi", logo: audiLogo, website: "https://www.audi.com" },
  { name: "Amiri", logo: amiriLogo, website: "https://amiri.com" },
  { name: "Dior", logo: diorLogo, website: "https://www.dior.com" },
  { name: "Rado", logo: radoLogo, website: "https://www.rado.com" },
  { name: "Martell", logo: martellLogo, website: "https://www.martell.com" },
  { name: "Belair", logo: belairLogo, website: "https://belair.co.za" },
  { name: "NARS", logo: narsLogo, website: "https://www.narscosmetics.com" },
  { name: "NYX", logo: nyxLogo, website: "https://www.nyxcosmetics.com" },
  { name: "The Ordinary", logo: theOrdinaryLogo, website: "https://theordinary.com" },
  { name: "Luxx Venue", logo: luxxVenueLogo, website: "https://www.luxxvenue.co.za" },
  { name: "SuperSport", logo: superSportLogo, website: "https://www.supersport.com" },
  { name: "Woolworths", logo: woolworthsLogo, website: "https://www.woolworths.co.za" },
  { name: "Skins", logo: skinsLogo, website: "https://skins.co.za/" },
  { name: "Kylie Cosmetics", logo: kylieLogo, website: "https://kyliecosmetics.com" },
  { name: "Lile", logo: lileLogo, website: "https://www.lilesandton.com" },
  { name: "Casablanca", logo: casablancaLogo, website: "https://casablancaparis.com" },
  { name: "Bathu", logo: bathuLogo, website: "https://bathu.co.za" },
  { name: "Big Brother Mzansi", logo: bigBrotherLogo, website: "https://bigbrothermzansi.co.za" },
  { name: "Axe", logo: axeLogo, website: "https://www.axe.com" },
  { name: "Egg", logo: eggLogo, dark: true },
  { name: "Glamour", logo: glamourLogo, website: "https://www.glamour.com" },
  { name: "Netflix", logo: netflixLogo, website: "https://www.netflix.com" },
];

export default function Brands() {
  useSEO({
    title: "Brands",
    description:
      "Trusted by Rolex, Patek Philippe, Audi, Amiri, Dior, Woolworths, Netflix, SuperSport, Kylie Cosmetics and more — The Drinks Masters delivers luxury beverage experiences for the world's most refined brands.",
    path: "/brands",
  });

  return (
    <>
      <section className="pt-32 pb-24 md:pb-32 container-x">
        <h2 className="display text-4xl md:text-5xl text-center mb-6 max-w-3xl mx-auto">
          The world's most refined brands.
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          We've proudly delivered exceptional experiences for brands including Rolex, Patek
          Philippe, Audi, Amiri, Dior, Rado, Martell, Belair, NARS, NYX Professional Makeup,
          The Ordinary, Luxx Venue, SuperSport, Woolworths, Skins, Kylie Cosmetics, Lile,
          Casablanca, Bathu, Big Brother Mzansi, Axe, Egg, Glamour and Netflix.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((b) => {
            const logoEl = b.dark ? (
              <div className="bg-neutral-900 rounded-md px-4 py-3 flex items-center justify-center max-w-full max-h-full">
                <img
                  src={b.logo}
                  alt={`${b.name} logo`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ) : (
              <img
                src={b.logo}
                alt={`${b.name} logo`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            );

            return (
              <div
                key={b.name}
                className="group relative aspect-[3/2] rounded-xl bg-white overflow-hidden hover:scale-[1.03] transition-transform"
              >
                {b.website ? (
                  <a
                    href={b.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${b.name}'s website`}
                    className="absolute inset-0 flex items-center justify-center p-2.5"
                  >
                    {logoEl}
                  </a>
                ) : (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center p-2.5">{logoEl}</div>
                    <div className="absolute inset-0 flex items-center justify-center px-3 text-center bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-xs uppercase tracking-wide leading-relaxed">
                        {b.name} doesn't have a website
                      </p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/30 border-t border-border">
        <div className="container-x max-w-3xl mx-auto text-center">
          <div className="flex items-end justify-center gap-3 mb-6">
            <img
              src={logo}
              alt="The Drinks Masters"
              className="h-28 w-auto brightness-0 invert"
              loading="lazy"
            />
            <Globe2 className="w-6 h-6 text-cream mb-1" strokeWidth={1.5} />
          </div>
          <p className="display text-3xl md:text-4xl leading-tight mb-6">
            Our work extends beyond South Africa.
          </p>
          <p className="text-lg text-muted-foreground">
            The Drinks Masters has successfully delivered premium beverage experiences in
            Tanzania, demonstrating our ability to execute international events while
            maintaining world-class luxury standards.
          </p>
        </div>
      </section>
    </>
  );
}
