import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type ContactModalContextValue = {
  isOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen,
      openContactModal: () => setIsOpen(true),
      closeContactModal: () => setIsOpen(false),
    }),
    [isOpen],
  );

  return <ContactModalContext.Provider value={value}>{children}</ContactModalContext.Provider>;
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }
  return ctx;
}
