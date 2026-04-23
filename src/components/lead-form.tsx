"use client";

import { useState, type FormEvent } from "react";
import { contactEmail } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

export function LeadForm({
  initialStatus = "idle",
}: {
  initialStatus?: Status;
}) {
  const [status, setStatus] = useState<Status>(initialStatus);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      business: String(formData.get("business") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(),
      message: String(formData.get("details") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error ?? "Something went wrong.");
      }

      form.reset();
      window.history.replaceState({}, "", "/?lead=success#contact");
      setStatus("success");
    } catch (submissionError) {
      setStatus("error");
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Something went wrong."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="/api/lead"
      method="post"
      className="surface-card rounded-[2rem] p-5 sm:p-6 lg:p-7"
      aria-busy={status === "submitting"}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-white/78">
          Name
          <input
            name="name"
            required
            className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none ring-0 transition placeholder:text-white/32 focus:border-amber-200/40 focus:bg-white/[0.07]"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/78">
          Business
          <input
            name="business"
            className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none ring-0 transition placeholder:text-white/32 focus:border-amber-200/40 focus:bg-white/[0.07]"
            placeholder="Company name"
          />
        </label>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-white/78">
          Email
          <input
            type="email"
            name="email"
            required
            className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none ring-0 transition placeholder:text-white/32 focus:border-amber-200/40 focus:bg-white/[0.07]"
            placeholder="you@company.com"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/78">
          Website
          <input
            name="website"
            className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none ring-0 transition placeholder:text-white/32 focus:border-amber-200/40 focus:bg-white/[0.07]"
            placeholder="Current site or social page"
          />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm text-white/78">
        What do you need?
        <textarea
          name="details"
          required
          rows={5}
          className="rounded-[1.4rem] border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none ring-0 transition placeholder:text-white/32 focus:border-amber-200/40 focus:bg-white/[0.07]"
          placeholder="Tell me about your service area, the current site, and what you want to improve."
        />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-amber-200 px-6 py-4 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-amber-100 hover:shadow-[0_18px_40px_rgba(214,180,106,0.26)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting"
          ? "Sending..."
          : "Get my free preview"}
      </button>
      <p className="mt-4 text-xs leading-6 text-white/48">
        Expected response by email. If you need a faster path, write to{" "}
        <a
          href={`mailto:${contactEmail}`}
          className="text-white/72 underline decoration-white/25 underline-offset-4"
        >
          {contactEmail}
        </a>
        .
      </p>
      {status === "success" ? (
        <p
          className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-50"
          role="status"
          aria-live="polite"
        >
          Thanks. I&apos;ll reply by email with next steps.
        </p>
      ) : null}
      {status === "error" ? (
        <p
          className="mt-4 rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-50"
          role="alert"
        >
          {error ?? "Something went wrong."}
        </p>
      ) : null}
    </form>
  );
}
