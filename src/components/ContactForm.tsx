import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

// EmailJS config — replace with real values or set VITE_EMAILJS_* env vars
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";

function Field({
  label, name, type = "text", placeholder, required, maxLength, textarea, rows = 4,
}: {
  label: string; name: string; type?: string; placeholder?: string;
  required?: boolean; maxLength?: number; textarea?: boolean; rows?: number;
}) {
  const cls = "w-full bg-transparent border-b border-border py-3 focus:border-primary focus:outline-none transition placeholder:text-muted-foreground/60";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} required={required} maxLength={maxLength} rows={rows} className={`${cls} resize-none`} />
      ) : (
        <input type={type} name={name} placeholder={placeholder} required={required} maxLength={maxLength} className={cls} />
      )}
    </label>
  );
}

const serviceOptions = [
  "Luxury Mobile Bars",
  "Signature Cocktail Experiences",
  "Premium Coffee Bars",
  "Luxury Brand Activations",
  "Corporate Events",
  "Weddings",
  "Private Celebrations",
  "Product Launches",
  "VIP Hospitality",
  "Beverage Consultation & Menu Development",
];

function SelectField({
  label, name, options, required,
}: { label: string; name: string; options: string[]; required?: boolean }) {
  const cls = "w-full bg-transparent border-b border-border py-3 focus:border-primary focus:outline-none transition text-foreground appearance-none";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <select name={name} required={required} defaultValue="" className={cls}>
        <option value="" disabled className="text-muted-foreground">
          Select a service
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-background text-foreground">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

const CONFIG_ERROR =
  "Our enquiry form is temporarily unavailable. Please reach us directly via WhatsApp or email and we'll respond as soon as possible.";
const SEND_ERROR =
  "We couldn't send your enquiry — please check your connection and try again, or reach us directly via WhatsApp or email.";

export function ContactForm({
  className = "",
  surfaceClassName = "border border-border rounded-2xl bg-secondary/20",
  showHeading = true,
  compact = false,
  onSent,
}: {
  className?: string;
  surfaceClassName?: string;
  showHeading?: boolean;
  compact?: boolean;
  onSent?: () => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS is not configured — missing VITE_EMAILJS_* env vars.");
      setStatus("error");
      setErrorMsg(CONFIG_ERROR);
      return;
    }
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus("sent");
      formRef.current.reset();
      onSent?.();
    } catch (err) {
      console.error("Failed to send enquiry via EmailJS:", err);
      setStatus("error");
      setErrorMsg(SEND_ERROR);
    }
  }

  const gap = compact ? "gap-4" : "gap-6";

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className={`${compact ? "p-6 space-y-4" : "p-8 md:p-10 space-y-8"} ${surfaceClassName} ${className}`}
      noValidate
    >
      {showHeading && (
        <h3 className={compact ? "display text-2xl" : "display text-3xl"}>Connect With Us</h3>
      )}
      <div className={`grid sm:grid-cols-2 ${gap}`}>
        <Field label="Name" name="from_name" placeholder="Enter your name" required maxLength={50} />
        <Field label="Surname" name="from_surname" placeholder="Enter your surname" required maxLength={50} />
      </div>
      <div className={`grid sm:grid-cols-2 ${gap}`}>
        <Field label="Mobile Number" name="phone" type="tel" placeholder="Enter your mobile number" required maxLength={30} />
        <Field
          label="Email Address"
          name="reply_to"
          type="email"
          placeholder="Enter your email address"
          required
          maxLength={150}
        />
      </div>
      <SelectField label="Service" name="service" options={serviceOptions} required />
      <Field
        label="Messages"
        name="message"
        placeholder="Enter your message"
        textarea
        required
        maxLength={2000}
        rows={compact ? 3 : 8}
      />
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <button
        type="submit"
        disabled={status === "sending"}
        className={`w-full bg-primary text-primary-foreground rounded-full uppercase tracking-widest text-sm font-semibold hover:opacity-90 hover:scale-105 active:scale-95 disabled:hover:scale-100 transition disabled:opacity-50 ${compact ? "py-3" : "py-4"}`}
      >
        {status === "sending" ? "Sending…" : "Submit Enquiry"}
      </button>
      {status === "sent" && (
        <p className="text-sm text-cream text-center">
          Thank you for reaching out — a member of our team will be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-destructive text-center">{errorMsg}</p>
      )}
    </form>
  );
}
