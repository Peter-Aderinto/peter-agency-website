"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, BarChart3, ShieldCheck } from "lucide-react";

type AuditFormState = {
  name: string;
  email: string;
  websiteUrl: string;
  industry: string;
  competitors: string;
  goals: string;
  context: string;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

type FormField = {
  id: keyof Pick<AuditFormState, "name" | "email" | "websiteUrl" | "industry">;
  label: string;
  type: string;
  autoComplete?: string;
  placeholder?: string;
};

const initialForm: AuditFormState = {
  name: "",
  email: "",
  websiteUrl: "",
  industry: "",
  competitors: "",
  goals: "",
  context: "",
};

const formSections: Array<{
  number: string;
  title: string;
  fields: FormField[];
}> = [
  {
    number: "1",
    title: "Your Information",
    fields: [
      { id: "name", label: "Name", type: "text", autoComplete: "name" },
      { id: "email", label: "Email", type: "email", autoComplete: "email" },
    ],
  },
  {
    number: "2",
    title: "Digital Assets",
    fields: [
      {
        id: "websiteUrl",
        label: "Website URL",
        type: "url",
        autoComplete: "url",
        placeholder: "https://yourwebsite.com",
      },
      { id: "industry", label: "Target Industry", type: "text" },
    ],
  },
];

const inputClassName =
  "mt-2 h-13 min-h-13 w-full rounded-md border border-SteelGrey/20 bg-white px-4 text-base font-semibold text-SteelGrey outline-none transition-colors placeholder:text-SteelGrey/38 focus:border-BrandGold focus:ring-4 focus:ring-BrandGold/18";

const textareaClassName =
  "mt-2 min-h-32 w-full resize-y rounded-md border border-SteelGrey/20 bg-white px-4 py-4 text-base font-semibold text-SteelGrey outline-none transition-colors placeholder:text-SteelGrey/38 focus:border-BrandGold focus:ring-4 focus:ring-BrandGold/18";

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-black uppercase tracking-[0.12em] text-SteelGrey/72"
    >
      {children}
    </label>
  );
}

function isValidHttpsUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && Boolean(url.hostname);
  } catch {
    return false;
  }
}

export default function AuditForm() {
  const [form, setForm] = useState<AuditFormState>(initialForm);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isSending = status === "sending";
  const isSuccess = status === "success";

  function updateField(field: keyof AuditFormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));

    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  async function handleAuditSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValidHttpsUrl(form.websiteUrl)) {
      setStatus("error");
      setErrorMessage("Please enter a valid secure website URL beginning with https://.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit your audit request.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your audit request right now.",
      );
    }
  }

  return (
    <div className="mx-auto max-w-4xl rounded-xl border border-SteelGrey/12 bg-white p-6 shadow-[0_26px_80px_rgba(74,74,74,0.16)] sm:p-8 lg:p-10">
      <div className="border-b border-SteelGrey/10 pb-7">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-BrandGold">
          Audit Request Form
        </p>
        <h2 className="mt-3 text-3xl font-black leading-tight text-SteelGrey sm:text-4xl">
          Give us the right context to diagnose what matters.
        </h2>
      </div>

      {isSuccess ? (
        <div
          role="status"
          className="mt-8 rounded-lg border border-BrandGold/30 bg-BrandGold/10 p-5 text-base font-bold leading-8 text-SteelGrey"
        >
          Your Empire Audit is in the queue! Check your inbox—our technical lead
          will deliver your 5-step roadmap within 24 hours.
        </div>
      ) : null}

      <form className="mt-8 space-y-8" onSubmit={handleAuditSubmit}>
        {formSections.map((section, index) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.55, delay: index * 0.05, ease: "easeOut" }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-BrandGold text-sm font-black text-white">
                {section.number}
              </span>
              <h3 className="text-xl font-black text-SteelGrey">
                {section.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {section.fields.map((field) => (
                <div key={field.id}>
                  <FieldLabel htmlFor={field.id}>{field.label}</FieldLabel>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    placeholder={field.placeholder}
                    pattern={field.id === "websiteUrl" ? "https://.*" : undefined}
                    value={form[field.id]}
                    onChange={(event) => updateField(field.id, event.target.value)}
                    required
                    disabled={isSending}
                    className={inputClassName}
                  />
                </div>
              ))}
            </div>
          </motion.section>
        ))}

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-BrandGold text-sm font-black text-white">
              3
            </span>
            <h3 className="text-xl font-black text-SteelGrey">Market Focus</h3>
          </div>
          <div>
            <FieldLabel htmlFor="competitors">Top 3 Competitors</FieldLabel>
            <input
              id="competitors"
              name="competitors"
              type="text"
              placeholder="Competitor websites or brand names"
              value={form.competitors}
              onChange={(event) => updateField("competitors", event.target.value)}
              disabled={isSending}
              className={inputClassName}
            />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-BrandGold text-sm font-black text-white">
              4
            </span>
            <h3 className="text-xl font-black text-SteelGrey">Growth Goals</h3>
          </div>
          <div>
            <FieldLabel htmlFor="growth-goals">Primary Goal</FieldLabel>
            <textarea
              id="growth-goals"
              name="growth-goals"
              required
              placeholder="Identify your main revenue goals"
              value={form.goals}
              onChange={(event) => updateField("goals", event.target.value)}
              disabled={isSending}
              className={textareaClassName}
            />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.55, delay: 0.14, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-BrandGold text-sm font-black text-white">
              5
            </span>
            <h3 className="text-xl font-black text-SteelGrey">
              Additional Context
            </h3>
          </div>
          <div>
            <FieldLabel htmlFor="context">Optional Notes</FieldLabel>
            <textarea
              id="context"
              name="context"
              placeholder="Share launches, constraints, tracking issues, or anything we should know."
              value={form.context}
              onChange={(event) => updateField("context", event.target.value)}
              disabled={isSending}
              className={textareaClassName}
            />
          </div>
        </motion.section>

        {status === "error" ? (
          <p role="alert" className="text-sm font-bold text-red-700">
            {errorMessage}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSending}
          className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-BrandGold px-7 text-base font-black text-white transition-all hover:bg-BrandGold/90 hover:shadow-[0_0_34px_rgba(212,175,55,0.28)] focus:outline-none focus:ring-4 focus:ring-BrandGold/25 disabled:cursor-not-allowed disabled:opacity-70 sm:text-lg"
        >
          {isSending
            ? "Sending..."
            : isSuccess
              ? "Success"
              : "Request My Free Audit →"}
        </button>
      </form>

      <div className="mt-8 grid grid-cols-1 gap-4 border-t border-SteelGrey/10 pt-7 text-sm leading-7 text-SteelGrey/72 sm:grid-cols-3">
        <p className="flex gap-3">
          <BadgeCheck
            className="mt-1 size-5 shrink-0 text-BrandGold"
            aria-hidden="true"
          />
          We review your website, search visibility, and market position.
        </p>
        <p className="flex gap-3">
          <BarChart3
            className="mt-1 size-5 shrink-0 text-BrandGold"
            aria-hidden="true"
          />
          You receive a prioritized performance architecture summary.
        </p>
        <p className="flex gap-3">
          <ShieldCheck
            className="mt-1 size-5 shrink-0 text-BrandGold"
            aria-hidden="true"
          />
          Delivery is within 24 hours, with confidential strategy notes.
        </p>
      </div>
    </div>
  );
}
