import { blobUrl } from "../lib/blob";
import { useSEO } from "../lib/seo";
import { ActivationSlideshow } from "../components/ActivationSlideshow";

const mobileBarImage = blobUrl("mobile bar1.webp");
const cocktailImage = blobUrl("signature cocktails.webp");
const coffeeImage = blobUrl("coffee bars.webp");
const brandActivationImage = blobUrl("luxury brand activations.webp");

const bar1 = blobUrl("mobile bar1.webp");
const bar2 = blobUrl("mobile bar2.webp");
const bar4 = blobUrl("mobile bar 4.webp");
const bar5 = blobUrl("mobile bar 5.webp");
const bar6 = blobUrl("mobile bar 6.webp");
const bar7 = blobUrl("mobile bar 7.webp");

const corporateImage = blobUrl("EOSR9899.jpg");
const weddingImage = blobUrl("weddings.webp");
const celebrationImage = blobUrl("image celebration.webp");
const launchImage = blobUrl("EOSR0341.webp");
const vipImage = blobUrl("groups.webp");
const consultationImage = blobUrl("_MG_5385.webp");

const services = [
  {
    image: mobileBarImage,
    title: "Luxury Mobile Bars",
    desc: "Elegant bar builds and premium glassware, installed anywhere.",
  },
  {
    image: cocktailImage,
    title: "Signature Cocktail Experiences",
    desc: "Bespoke menus developed for your brand or celebration.",
  },
  {
    image: coffeeImage,
    title: "Premium Coffee Bars",
    desc: "Specialty baristas serving craft coffee at your event.",
  },
  {
    image: brandActivationImage,
    title: "Luxury Brand Activations",
    desc: "VIP hospitality and beverage experiences for launches.",
    objectPosition: "object-bottom",
  },
];

const gallery = [
  {
    src: bar1,
    alt: "The Drinks Masters mobile bar at the Amiri activation",
    title: "Luxury Brand Activations",
    desc: "From Amiri to the world's most exclusive names, we bring elevated bar experiences to brand launches.",
    objectPosition: "object-[center_65%]",
  },
  {
    src: bar2,
    alt: "The Drinks Masters bar setup at a JMC vehicle showroom event",
    title: "Corporate Launches",
    desc: "Signature service for product reveals and corporate milestones.",
    objectPosition: "object-[center_55%]",
  },
  {
    src: bar4,
    alt: "A Drinks Masters mixologist crafting a cocktail behind the bar",
    title: "Signature Mixology",
    desc: "Every pour crafted with precision, care and a flair for the theatrical.",
  },
  {
    src: bar5,
    alt: "The Drinks Masters bar activation in a mall atrium",
    title: "Retail & Mall Activations",
    desc: "Eye-catching installations that stop foot traffic and start conversations.",
  },
  {
    src: bar6,
    alt: "The Drinks Masters mobile coffee cart activation for Standard Bank",
    title: "Coffee Cart Activations",
    desc: "Custom coffee cart builds bringing specialty coffee service to any corporate event.",
    objectPosition: "object-bottom",
  },
  {
    src: bar7,
    alt: "The Drinks Masters wooden bar build serving guests at an activation",
    title: "Elevated Bar Builds",
    desc: "Custom-designed bar counters crafted to match the tone of every activation.",
  },
];


const eventTypes = [
  {
    image: corporateImage,
    title: "Corporate",
    desc: "Polished bar service and premium hospitality for conferences, product reveals and corporate milestones.",
    objectPosition: "object-[center_50%]",
  },
  {
    image: weddingImage,
    title: "Weddings",
    desc: "Elegant bar experiences tailored to your big day from welcome cocktails to the last toast.",
  },
  {
    image: celebrationImage,
    title: "Private Celebrations",
    desc: "Bespoke drinks and effortless service for birthdays, anniversaries and intimate gatherings.",
  },
  {
    image: launchImage,
    title: "Product Launches",
    desc: "High-impact beverage activations designed to elevate brand launches and press events.",
  },
  {
    image: vipImage,
    title: "VIP Hospitality",
    desc: "Discreet, elevated service for exclusive guests and high-profile occasions.",
  },
  {
    image: consultationImage,
    title: "Beverage Consultation & Menu Development",
    desc: "Custom cocktail and beverage menus crafted around your brand, guests and occasion.",
  },
];

export default function Services() {
  useSEO({
    title: "Services",
    description:
      "Luxury mobile bars, signature cocktail experiences, premium coffee bars, and brand activations — bespoke beverage services for weddings, corporate events, and product launches.",
    path: "/services",
  });

  return (
    <>
      <section className="pt-32 pb-24 md:pb-32 bg-secondary/30 border-b border-border">
        <div className="container-x">
          <div className="mb-16">
            <h2 className="display text-5xl md:text-6xl max-w-2xl">Services crafted for luxury</h2>
            <p className="mt-6 text-muted-foreground max-w-sm">
              Every element, the bar, the glass, the pour is engineered to feel effortless.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {services.map((s) => (
              <article key={s.title} className="group">
                <div className="overflow-hidden rounded-xl mb-6">
                  <img
                    src={s.image}
                    alt={s.title}
                    className={`w-full ${s.aspect ?? "aspect-[4/3]"} object-cover ${s.objectPosition ?? ""} group-hover:scale-105 transition-transform duration-500`}
                    loading="lazy"
                  />
                </div>
                <h3 className="display text-2xl mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-8 border-t border-border" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 container-x">
        <div className="mb-16 max-w-2xl">
          <h2 className="display text-4xl md:text-5xl">Events we cater for</h2>
          <p className="mt-4 text-muted-foreground">
            From boardrooms to ballrooms, we tailor every activation to the occasion.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {eventTypes.map((e) => (
            <article key={e.title} className="group">
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src={e.image}
                  alt={e.title}
                  className={`w-full aspect-[4/3] object-cover ${e.objectPosition ?? ""} group-hover:scale-105 transition-transform duration-500`}
                  loading="lazy"
                />
              </div>
              <h3 className="display text-2xl mb-3">{e.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              <div className="mt-8 border-t border-border" />
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-border container-x">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-cream mb-4">In Action</p>
          <h2 className="display text-4xl md:text-5xl">Behind every activation.</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <ActivationSlideshow items={gallery} />
        </div>
      </section>
    </>
  );
}
