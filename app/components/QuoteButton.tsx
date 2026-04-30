"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AtSign, Check, Mail, MessageCircle, X as XIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";

const whatsappNumber = "2348126575582";
const contactEmail = "oluwaseunpeter992@gmail.com";
const xHandle = "Empire_WebDev";

const serviceOptions = [
  "Web Design & Dev",
  "SEO Optimization",
  "Google Business Setup",
  "Social Media Management",
  "Email Marketing",
  "Content Creation",
  "Business Consulting",
  "Other",
] as const;

const budgetOptions = [
  "Under ₦200k",
  "₦200k - ₦500k",
  "₦500k - ₦1M",
  "₦1M+",
] as const;

const timelineOptions = ["Urgent", "2-4 Weeks", "1-2 Months", "Not Sure"] as const;

type ContactMethod = "whatsapp" | "email" | "x";

type QuoteForm = {
  name: string;
  email: string;
  businessName: string;
  businessType: string;
  location: string;
  budget: string;
  timeline: string;
  additionalDetails: string;
};

type QuoteButtonProps = {
  className: string;
  label: string;
  initialService?: string;
};

const initialForm: QuoteForm = {
  name: "",
  email: "",
  businessName: "",
  businessType: "",
  location: "",
  budget: budgetOptions[0],
  timeline: timelineOptions[1],
  additionalDetails: "",
};

const serviceTitleMap: Record<string, (typeof serviceOptions)[number]> = {
  "Web Design Nigeria": "Web Design & Dev",
  "SEO Services Nigeria": "SEO Optimization",
  "Business Setup": "Google Business Setup",
};

function getInitialServices(initialService?: string) {
  if (!initialService) {
    return [];
  }

  return [serviceTitleMap[initialService] ?? initialService];
}

export default function QuoteButton({
  className,
  label,
  initialService,
}: QuoteButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<QuoteForm>(initialForm);
  const [selectedServices, setSelectedServices] = useState<string[]>(() =>
    getInitialServices(initialService),
  );
  const [preferredContactMethod, setPreferredContactMethod] =
    useState<ContactMethod>("email");
  const modalRef = useRef<HTMLDivElement>(null);
  const canUseDocument = typeof document !== "undefined";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.scrollTo({ top: 0 });
    }
  }, [isOpen]);

  const resetAndClose = useCallback(() => {
    setForm(initialForm);
    setSelectedServices(getInitialServices(initialService));
    setPreferredContactMethod("email");
    setIsOpen(false);
  }, [initialService]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        resetAndClose();
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, resetAndClose]);

  function updateForm(field: keyof QuoteForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function toggleService(service: string) {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  }

  function handleSubmit() {
    const services = selectedServices.length
      ? selectedServices.join(", ")
      : "a digital project";
    const additionalDetails = form.additionalDetails.trim();
    const detailMessage = additionalDetails
      ? `\n\nAdditional details: ${additionalDetails}`
      : "";
    const payload = {
      ...form,
      services: selectedServices,
      preferredContactMethod,
      contactEmail,
    };

    if (preferredContactMethod === "whatsapp") {
      const message = `Hi Peter! My name is ${form.name || "[Name]"} from ${
        form.businessName || "[Business Name]"
      }. I'm interested in ${services} with a budget of ${
        form.budget
      }. Can we talk about my ${form.timeline} timeline?${detailMessage}`;

      window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message,
      )}`;
      return;
    }

    if (preferredContactMethod === "email") {
      console.log("Quote request payload:", payload);
      resetAndClose();
      return;
    }

    const summary = `Hi Peter! Project inquiry from ${form.name || "a founder"} at ${
      form.businessName || "a business"
    }. Services: ${services}. Budget: ${form.budget}. Timeline: ${
      form.timeline
    }.${detailMessage}`;

    window.location.href = `https://x.com/intent/post?text=${encodeURIComponent(
      `${summary}\n\n@${xHandle}`,
    )}`;
  }

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={className}>
        {label}
      </button>

      {canUseDocument
        ? createPortal(
            <AnimatePresence>
              {isOpen ? (
                <motion.div
                  className="fixed inset-0 z-[999] grid place-items-center overflow-y-auto bg-SteelGrey/70 px-4 py-6 backdrop-blur-sm sm:py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onMouseDown={resetAndClose}
                >
                  <motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="quote-modal-title"
                    ref={modalRef}
                    className="relative my-auto max-h-[calc(100dvh-3rem)] w-full max-w-[600px] overflow-y-auto rounded-3xl bg-SoftCream p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:max-h-[calc(100dvh-4rem)] sm:p-8"
                    initial={{ opacity: 0, scale: 0.94, y: 18 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: 12 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    onMouseDown={(event) => event.stopPropagation()}
                  >
              <button
                type="button"
                onClick={resetAndClose}
                aria-label="Close quote form"
                className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full border border-SteelGrey/15 bg-white text-SteelGrey transition-colors hover:border-BrandGold hover:text-BrandGold focus:outline-none focus:ring-4 focus:ring-BrandGold/20"
              >
                <XIcon className="size-5" aria-hidden="true" />
              </button>

              <div className="pr-12">
                <h2
                  id="quote-modal-title"
                  className="text-3xl font-black leading-tight text-SteelGrey sm:text-4xl"
                >
                  Get Your Free Quote
                </h2>
                <p className="mt-2 text-base font-medium text-SteelGrey/75">
                  Tell us about your business needs
                </p>
              </div>

              <form
                className="mt-7 space-y-7 border-t border-SteelGrey/10 pt-7"
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit();
                }}
              >
                <section className="space-y-4">
                  <h3 className="text-xl font-bold text-SteelGrey">
                    Business Information
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <TextField
                      label="Your Name *"
                      value={form.name}
                      onChange={(value) => updateForm("name", value)}
                      autoComplete="name"
                      placeholder="John Doe"
                    />
                    <TextField
                      label="Email Address *"
                      type="email"
                      value={form.email}
                      onChange={(value) => updateForm("email", value)}
                      autoComplete="email"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <TextField
                      label="Business Name"
                      value={form.businessName}
                      onChange={(value) => updateForm("businessName", value)}
                      autoComplete="organization"
                      placeholder="Your Business Name"
                    />
                    <TextField
                      label="Business Type"
                      value={form.businessType}
                      onChange={(value) => updateForm("businessType", value)}
                      placeholder="e.g., Restaurant, Retail, Service"
                    />
                  </div>
                </section>

                <section>
                  <h3 className="font-bold text-SteelGrey">Services Needed</h3>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {serviceOptions.map((service) => {
                      const isSelected = selectedServices.includes(service);

                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-bold transition-colors focus:outline-none focus:ring-4 focus:ring-BrandGold/20 ${
                            isSelected
                              ? "border-BrandGold bg-white text-SteelGrey"
                              : "border-SteelGrey/12 bg-white text-SteelGrey/72 hover:border-BrandGold/55"
                          }`}
                        >
                          {isSelected ? (
                            <Check className="size-3.5 text-BrandGold" aria-hidden="true" />
                          ) : null}
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </section>

                <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <TextField
                    label="Location"
                    value={form.location}
                    onChange={(value) => updateForm("location", value)}
                    autoComplete="address-level2"
                    placeholder="City, Country"
                  />
                  <SelectField
                    label="Budget Range"
                    value={form.budget}
                    options={budgetOptions}
                    onChange={(value) => updateForm("budget", value)}
                  />
                  <SelectField
                    label="Timeline"
                    value={form.timeline}
                    options={timelineOptions}
                    onChange={(value) => updateForm("timeline", value)}
                  />
                </section>

                <section>
                  <p className="font-bold text-SteelGrey">Preferred Contact Method</p>
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <ContactMethodCard
                      label="Email"
                      icon={<Mail className="size-6" aria-hidden="true" />}
                      isSelected={preferredContactMethod === "email"}
                      onClick={() => setPreferredContactMethod("email")}
                    />
                    <ContactMethodCard
                      label="WhatsApp"
                      icon={<MessageCircle className="size-6" aria-hidden="true" />}
                      isSelected={preferredContactMethod === "whatsapp"}
                      onClick={() => setPreferredContactMethod("whatsapp")}
                    />
                    <ContactMethodCard
                      label="X/Twitter"
                      icon={<AtSign className="size-6" aria-hidden="true" />}
                      isSelected={preferredContactMethod === "x"}
                      onClick={() => setPreferredContactMethod("x")}
                    />
                  </div>
                </section>

                <section>
                  <TextAreaField
                    label="Additional Details or Questions"
                    value={form.additionalDetails}
                    onChange={(value) => updateForm("additionalDetails", value)}
                    placeholder="Tell us more about your business needs..."
                  />
                </section>

                <section className="space-y-5">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      className="inline-flex min-h-13 flex-1 items-center justify-center rounded-full bg-BrandGold px-6 text-sm font-black text-white transition-colors hover:bg-BrandGold/90 focus:outline-none focus:ring-4 focus:ring-BrandGold/25"
                    >
                      Send Quote Request
                    </button>
                    <button
                      type="button"
                      onClick={resetAndClose}
                      className="inline-flex min-h-13 items-center justify-center rounded-full border border-SteelGrey/25 bg-transparent px-6 text-sm font-black text-SteelGrey transition-colors hover:border-SteelGrey/45 hover:bg-white/45 focus:outline-none focus:ring-4 focus:ring-SteelGrey/10 sm:w-36"
                    >
                      Maybe Later
                    </button>
                  </div>

                  <div className="rounded-xl bg-SteelGrey/5 px-5 py-4 text-center text-xs leading-5 text-SteelGrey/60">
                    How this works: We&apos;ll automatically send your quote request
                    to our team. Just click &apos;Send Quote Request&apos; and
                    we&apos;ll get back to you with a custom proposal within 24
                    hours. Your information is secure.
                  </div>
                </section>
              </form>
            </motion.div>
          </motion.div>
          ) : null}
        </AnimatePresence>,
            document.body,
          )
        : null}
    </>
  );
}

function TextField({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm font-bold text-SteelGrey">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-xl border border-SteelGrey/20 bg-SoftCream px-4 text-sm font-semibold text-SteelGrey outline-none transition-shadow placeholder:text-SteelGrey/35 focus:ring-4 focus:ring-BrandGold/25"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block text-sm font-bold text-SteelGrey">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-12 w-full rounded-xl border border-SteelGrey/20 bg-SoftCream px-4 text-sm font-semibold text-SteelGrey outline-none transition-shadow focus:ring-4 focus:ring-BrandGold/25"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm font-bold text-SteelGrey">
      {label}
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={5}
        className="mt-2 w-full resize-y rounded-xl border border-SteelGrey/20 bg-SoftCream px-4 py-4 text-sm font-semibold leading-6 text-SteelGrey outline-none transition-shadow placeholder:text-SteelGrey/35 focus:ring-4 focus:ring-BrandGold/25"
      />
    </label>
  );
}

function ContactMethodCard({
  label,
  icon,
  isSelected,
  onClick,
}: {
  label: string;
  icon: ReactNode;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isSelected}
      className={`inline-flex min-h-24 flex-col items-center justify-center gap-2 rounded-full border bg-white px-4 text-sm font-black text-SteelGrey transition-all focus:outline-none focus:ring-4 focus:ring-BrandGold/20 ${
        isSelected
          ? "border-BrandGold bg-BrandGold/10 text-SteelGrey shadow-[0_12px_28px_rgba(212,175,55,0.13)]"
          : "border-SteelGrey/12 hover:border-BrandGold/70 hover:text-BrandGold"
      }`}
    >
      <span className={isSelected ? "text-BrandGold" : "text-SteelGrey/70"}>
        {icon}
      </span>
      {label}
    </button>
  );
}
