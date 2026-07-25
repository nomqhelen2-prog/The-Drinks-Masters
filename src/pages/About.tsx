import { blobUrl } from "../lib/blob";
import { useSEO } from "../lib/seo";

const founderImage = blobUrl("Founder.webp");
const teamImage = blobUrl("TDMTeam.webp");

const reasons = [
  "Luxury focused service",
  "Highly trained bartenders, baristas and mixologists",
  "Elegant mobile bar designs",
  "Bespoke cocktail development",
  "Premium equipment and glassware",
  "Professional event management",
  "Nationwide and international capability",
];

export default function About() {
  useSEO({
    title: "About",
    description:
      "Meet The Drinks Masters — Africa's luxury mobile bar company delivering elegant bar designs, bespoke cocktails, and professional event management across South Africa and beyond.",
    path: "/about",
  });

  return (
    <>
      <section className="pt-32 pb-24 md:pb-32 container-x">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 overflow-hidden rounded-2xl">
            <img
              src={founderImage}
              alt="Justice Adams, Founder of The Drinks Masters"
              className="w-full aspect-[3/4] object-cover transition-transform duration-500 hover:scale-110"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              The Drinks Masters is one of Africa's leading luxury mobile bar and beverage
              experience companies, specializing in premium cocktail bars, coffee bars and
              bespoke beverage activations for world-class events.
            </p>
            <p>
              Founded by Justice Adams, our vision is to create unforgettable experiences
              through exceptional service, world-class mixology and elegant event execution 
              from intimate weddings to global brand launches.
            </p>
            <p>
              Our work extends beyond South Africa. From Johannesburg to Tanzania, The Drinks
              Masters has successfully delivered premium beverage experiences internationally,
              demonstrating our ability to execute abroad while maintaining world-class luxury
              standards.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-cream border-y border-border overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative container-x py-20 md:py-28">
            <p className="text-xs uppercase tracking-[0.4em] text-background/60 mb-4">Mission</p>
            <p className="display text-3xl md:text-4xl leading-tight text-background">
              To redefine luxury hospitality by creating beverage experiences that elevate every
              celebration and leave lasting memories.
            </p>
          </div>
          <div className="relative container-x py-20 md:py-28">
            <div className="absolute inset-0 bg-background md:[clip-path:polygon(8%_0,100%_0,100%_100%,0_100%)]" />
            <p className="relative text-xs uppercase tracking-[0.4em] text-cream/60 mb-4">Vision</p>
            <p className="relative display text-3xl md:text-4xl leading-tight text-cream">
              To become Africa's most respected luxury beverage experience company, recognised
              for innovation, excellence and unforgettable service.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 container-x">
        <h2 className="display text-4xl md:text-5xl mb-16">Built for excellence, every time.</h2>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
          {reasons.map((r) => (
            <div key={r}>
              <span className="text-foreground font-semibold text-lg">{r}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="relative aspect-[1280/682] flex items-end overflow-hidden">
        <img
          src={teamImage}
          alt="The Drinks Masters team behind the bar"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-transparent" />
        <div className="container-x relative z-10 pt-16 pb-6 md:pb-8 text-center max-w-3xl mx-auto">
          <p className="display text-3xl md:text-5xl leading-tight text-cream">
            We don't simply serve drinks. We craft experiences.
          </p>
          <p className="mt-8 text-lg text-muted-foreground">
            Every cocktail. Every coffee. Every interaction. Every event. Executed with excellence.
          </p>
        </div>
      </section>
    </>
  );
}
