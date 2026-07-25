import { blobUrl } from "../lib/blob";
import { ContactForm } from "../components/ContactForm";
import { useSEO } from "../lib/seo";

const contactImage = blobUrl("contact us.webp");

export default function Contact() {
  useSEO({
    title: "Contact",
    description:
      "Get in touch with The Drinks Masters for luxury mobile bar experiences, signature cocktails, and bespoke beverage activations across South Africa.",
    path: "/contact",
  });

  return (
    <section className="pt-32 pb-24 md:pb-32 container-x">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="display text-5xl md:text-6xl mb-4">Let's craft something remarkable.</h2>
          <p className="text-muted-foreground mb-10">
            Corporate Events • Weddings • Luxury Activations • Coffee Experiences • Private Celebrations
          </p>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={contactImage}
              alt="A Drinks Masters bartender ready to serve"
              className="w-full aspect-[4/5] object-cover transition-transform duration-500 hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
