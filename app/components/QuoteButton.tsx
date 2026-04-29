"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AtSign, Check, Mail, MessageCircle, X as XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

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
};

export default function QuoteButton({
  className,
  label,
  initialService,
}: QuoteButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<QuoteForm>(initialForm);
  const [selectedServices, setSelectedServices] = useState<string[]>(() =>
    initialService ? [initialService] : [],
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function resetAndClose() {
    setForm(initialForm);
    setSelectedServices(initialService ? [initialService] : []);
    setIsOpen(false);
  }

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

  function handleSubmit(method: ContactMethod) {
    const services = selectedServices.length
      ? selectedServices.join(", ")
      : "a digital project";
    const payload = {
      ...form,
      services: selectedServices,
      preferredContactMethod: method,
    };

    if (method === "whatsapp") {
      const message = `Hi Peter! My name is ${form.name || "[Name]"} from ${
        form.businessName || "[Business Name]"
      }. I'm interested in ${services} with a budget of ${
        form.budget
      }. Can we talk about my ${form.timeline} timeline?`;

      window.location.href = `https://wa.me/2348126575582?text=${encodeURIComponent(
        message,
      )}`;
      return;
    }

    if (method === "email") {
      console.log("Quote request payload:", payload);
      resetAndClose();
      return;
    }

    const summary = `Project inquiry for Peter: ${form.name || "A founder"} from ${
      form.businessName || "a business"
    } needs ${services}. Budget: ${form.budget}. Timeline: ${form.timeline}.`;

    window.location.href = `https://x.com/intent/post?text=${encodeURIComponent(
      `${summary}\n\n@Empire_WebDev`,
    )}`;
  }

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={className}>
        {label}
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-SteelGrey/65 px-4 py-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={resetAndClose}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="quote-modal-title"
              className="relative max-h-[92vh] w-full max-w-[600px] overflow-y-auto rounded-3xl bg-SoftCream p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:p-8"
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
                <p className="text-xs font-black uppercase tracking-[0.18em] text-BrandGold">
                  Free Project Quote
                </p>
                <h2
                  id="quote-modal-title"
                  className="mt-2 text-2xl font-black leading-tight text-SteelGrey sm:text-3xl"
                >
                  Tell us what you want to build
                </h2>
              </div>

              <form className="mt-7 space-y-7">
                <section className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <TextField
                      label="Your Name"
                      value={form.name}
                      onChange={(value) => updateForm("name", value)}
                      autoComplete="name"
                    />
                    <TextField
                      label="Email Address"
                      type="email"
                      value={form.email}
                      onChange={(value) => updateForm("email", value)}
                      autoComplete="email"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <TextField
                      label="Business Name"
                      value={form.businessName}
                      onChange={(value) => updateForm("businessName", value)}
                      autoComplete="organization"
                    />
                    <TextField
                      label="Business Type"
                      value={form.businessType}
                      onChange={(value) => updateForm("businessType", value)}
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
                    <ContactButton
                      label="WhatsApp"
                      icon={<MessageCircle className="size-5" aria-hidden="true" />}
                      onClick={() => handleSubmit("whatsapp")}
                    />
                    <ContactButton
                      label="Email"
                      icon={<Mail className="size-5" aria-hidden="true" />}
                      onClick={() => handleSubmit("email")}
                    />
                    <ContactButton
                      label="X"
                      icon={<AtSign className="size-5" aria-hidden="true" />}
                      onClick={() => handleSubmit("x")}
                    />
                  </div>
                </section>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function TextField({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block text-sm font-bold text-SteelGrey">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
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

function ContactButton({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-SteelGrey/12 bg-white px-4 text-sm font-black text-SteelGrey transition-all hover:border-BrandGold hover:text-BrandGold focus:outline-none focus:ring-4 focus:ring-BrandGold/20"
    >
      {icon}
      {label}
    </button>
  );
}
