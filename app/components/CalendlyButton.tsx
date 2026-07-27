"use client";

import CtaArrow from "./CtaArrow";

const calendlyUrl = "https://calendly.com/petay081/30min";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function CalendlyButton({
  className = "",
  label = "Book a Call",
}: {
  className?: string;
  label?: string;
}) {
  function openCalendly() {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
      return;
    }

    window.open(calendlyUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <button
      type="button"
      className={`btn btn-accent calendly-button ${className}`.trim()}
      onClick={openCalendly}
      aria-label={`${label} — schedule a 30-minute call with Empire`}
    >
      {label}
      <CtaArrow />
    </button>
  );
}
