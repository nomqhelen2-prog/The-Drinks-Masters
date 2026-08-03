import { useEffect } from "react";
import { X } from "lucide-react";

import { useContactModal } from "../context/ContactModalContext";
import { ContactForm } from "./ContactForm";

export function ContactModal() {
  const { isOpen, closeContactModal } = useContactModal();

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeContactModal();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeContactModal]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-md p-4"
      onClick={closeContactModal}
      role="dialog"
      aria-modal="true"
      aria-label="Connect with us"
    >
      <div
        className="relative w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={closeContactModal}
          aria-label="Close"
          className="absolute -top-4 -right-4 z-10 inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90 hover:scale-110 active:scale-95 transition"
        >
          <X className="w-4 h-4" />
        </button>
        <ContactForm
          compact
          surfaceClassName="border border-border rounded-2xl bg-background shadow-2xl max-h-[85vh] overflow-y-auto"
        />
      </div>
    </div>
  );
}
