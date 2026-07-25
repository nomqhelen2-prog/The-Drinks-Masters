import { useEffect } from "react";
import { Globe2 } from "lucide-react";

import { blobUrl } from "../lib/blob";

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

const brands = [
  { name: "Rolex", logo: rolexLogo },
  { name: "Patek Philippe", logo: patekLogo },
  { name: "Audi", logo: audiLogo },
  { name: "Amiri", logo: amiriLogo },
  { name: "Dior", logo: diorLogo },
  { name: "Rado", logo: radoLogo },
  { name: "Martell", logo: martellLogo },
  { name: "Belair", logo: belairLogo },
  { name: "NARS", logo: narsLogo },
  { name: "NYX", logo: nyxLogo },
  { name: "The Ordinary", logo: theOrdinaryLogo },
  { name: "Luxx Venue", logo: luxxVenueLogo },
];

export default function Brands() {
  useEffect(() => {
    document.title = "Brands — The Drinks Masters";
  }, []);

  return (
    <>
      <section className="pt-32 pb-24 md:pb-32 container-x">
        <h2 className="display text-4xl md:text-5xl text-center mb-6 max-w-3xl mx-auto">
          The world's most refined brands.
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          We've proudly delivered exceptional experiences for brands including Rolex, Patek
          Philippe, Audi, Amiri, Dior, Rado, Martell, Belair, NARS, NYX Professional Makeup,
          The Ordinary and Luxx Venue.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((b) => (
            <div
              key={b.name}
              className="bg-white aspect-[3/2] rounded-xl flex items-center justify-center p-6 hover:scale-[1.03] transition-transform"
            >
              <img
                src={b.logo}
                alt={`${b.name} logo`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
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
