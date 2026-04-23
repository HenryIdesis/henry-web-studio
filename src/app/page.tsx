import Link from "next/link";
import {
  caseStudy,
  contactEmail,
  monthlyOffer,
  problems,
  processSteps,
  siteName,
  solutions,
  trustSignals,
} from "@/data/site";
import { FAQAccordion } from "@/components/faq-accordion";
import { LeadForm } from "@/components/lead-form";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200/80">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function Label({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium tracking-[0.18em] text-white/72 uppercase backdrop-blur">
      {children}
    </span>
  );
}

function SectionShell({
  children,
  tone = "dark",
  className = "",
  id,
}: Readonly<{
  children: React.ReactNode;
  tone?: "dark" | "soft" | "warm";
  className?: string;
  id?: string;
}>) {
  const toneClass =
    tone === "soft"
      ? "section-surface-soft"
      : tone === "warm"
        ? "section-surface-warm"
        : "section-surface";

  return (
    <section id={id} className={`${toneClass} border-t border-white/5 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">{children}</div>
    </section>
  );
}

export default function Home({
  searchParams,
}: {
  searchParams?: { lead?: string };
}) {
  const leadStatus =
    searchParams?.lead === "success"
      ? "success"
      : searchParams?.lead === "error"
        ? "error"
        : "idle";

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#07111f]/65 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 sm:px-8">
          <Link href="#top" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 group-hover:bg-white/[0.09]">
              H
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-[0.18em] uppercase text-white/90">
                {siteName}
              </span>
              <span className="block text-xs text-white/55">
                Website as a service for local businesses
              </span>
            </span>
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <nav className="flex items-center gap-6 text-sm text-white/70">
              <Link href="#offer" className="transition hover:text-white">
                Offer
              </Link>
              <Link href="#work" className="transition hover:text-white">
                Work
              </Link>
              <Link href="#faq" className="transition hover:text-white">
                FAQ
              </Link>
            </nav>
            <Link
              href="#contact"
              className="inline-flex items-center rounded-full bg-amber-200 px-4 py-2 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-amber-100 hover:shadow-[0_12px_30px_rgba(214,180,106,0.24)]"
            >
              Get my free preview
            </Link>
          </div>
        </div>
      </header>

      <section
        id="top"
        className="relative isolate overflow-hidden section-surface border-t border-white/5"
      >
        <div className="absolute inset-0">
          <div className="absolute -left-16 top-8 h-72 w-72 rounded-full bg-amber-300/14 blur-3xl animate-glow" />
          <div className="absolute right-[-6rem] top-10 h-80 w-80 rounded-full bg-sky-400/12 blur-3xl animate-float" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="mx-auto relative grid min-h-[calc(100svh-4.5rem)] max-w-[1200px] items-center gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12 lg:py-20">
          <div className="max-w-[600px]">
            <Label>Website as a service for plumbers, electricians, and HVAC</Label>
            <h1 className="mt-6 max-w-[600px] text-[2.25rem] font-semibold leading-[1.04] tracking-tight text-balance text-white sm:text-[3.25rem] lg:text-[4rem]">
              We build and manage websites for plumbers and electricians that
              make it easier to get calls.
            </h1>
            <p className="mt-6 max-w-[600px] text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
              Most local customers choose the first business they trust. We help
              you look like that business.
            </p>
            <p className="mt-4 text-sm font-medium tracking-[0.16em] text-amber-100/85 uppercase">
              Free preview in 24 hours. Live in 48.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-amber-200 px-6 py-4 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-amber-100 hover:shadow-[0_18px_40px_rgba(214,180,106,0.26)]"
              >
                Get my free preview
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Free preview in 24 hours", "Live in 48 hours", "No setup fee"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4 text-sm font-medium leading-6 text-white/78 backdrop-blur-sm transition duration-300 hover:bg-white/[0.07]"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="relative lg:justify-self-end">
            <div className="absolute left-6 top-6 h-52 w-52 rounded-full bg-amber-200/14 blur-3xl" />
            <div className="absolute right-6 top-24 h-40 w-40 rounded-full bg-white/8 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(10,15,24,0.72))] p-4 shadow-[0_32px_120px_rgba(0,0,0,0.36)]">
              <div className="flex items-center justify-between border-b border-white/8 px-4 pb-3 text-xs text-white/52">
                <span>Preview snapshot</span>
                <span>Mobile-first flow</span>
              </div>

              <div className="grid gap-4 p-4 lg:grid-cols-[1.12fr_0.88fr]">
                <div className="surface-card min-w-0 rounded-[1.8rem] p-5">
                  <div className="flex min-w-0 items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/80">
                        Fast preview
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">
                        Clear next step
                      </h3>
                    </div>
                    <div className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white/70 uppercase">
                      24h / 48h
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                      <div className="h-2 w-24 rounded-full bg-amber-200/75" />
                      <div className="mt-3 h-9 w-[78%] rounded-2xl bg-white/[0.07]" />
                    </div>
                    <div className="grid gap-3">
                      <div className="min-w-0 rounded-[1.35rem] border border-white/10 bg-slate-950/55 px-4 py-4">
                        <div className="flex items-center justify-between gap-4">
                          <p className="text-xs text-white/45">Call path</p>
                          <span className="h-2 w-2 rounded-full bg-amber-200/70" />
                        </div>
                        <p className="mt-2 text-base font-semibold leading-6 text-white sm:text-lg">
                          Easy to contact
                        </p>
                      </div>
                      <div className="min-w-0 rounded-[1.35rem] border border-white/10 bg-slate-950/55 px-4 py-4">
                        <div className="flex items-center justify-between gap-4">
                          <p className="text-xs text-white/45">Trust</p>
                          <span className="h-2 w-2 rounded-full bg-white/70" />
                        </div>
                        <p className="mt-2 text-base font-semibold leading-6 text-white sm:text-lg">
                          Looks established
                        </p>
                      </div>
                    </div>
                    <div className="rounded-[1.4rem] border border-amber-200/20 bg-amber-200/8 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/75">
                        Conversion note
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/80">
                        The layout keeps attention on the call, not the design.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid min-w-0 gap-4">
                  <div className="surface-card min-w-0 rounded-[1.8rem] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/48">
                      Lead quality
                    </p>
                    <div className="mt-5 flex items-end gap-2">
                      <div className="h-24 w-4 rounded-full bg-white/10" />
                      <div className="h-32 w-4 rounded-full bg-amber-200/70" />
                      <div className="h-20 w-4 rounded-full bg-white/14" />
                      <div className="h-40 w-4 rounded-full bg-amber-100/90" />
                    </div>
                    <p className="mt-4 text-sm leading-6 text-white/72">
                      Clear structure helps homeowners move from first glance to
                      contact without friction.
                    </p>
                  </div>
                  <div className="surface-card min-w-0 rounded-[1.8rem] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/75">
                      Built for
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-white/78">
                      <li>Emergency service calls</li>
                      <li>Local intent searches</li>
                      <li>Mobile visitors ready to contact</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell tone="soft" className="py-14 lg:py-20">
        <div className="surface-card rounded-[2rem] p-4 sm:p-5">
          <div className="grid gap-3 md:grid-cols-5 md:items-center">
            {trustSignals.map((item, index) => (
              <div
                key={item}
                className={[
                  "rounded-2xl px-4 py-4 text-center text-sm font-medium transition duration-300",
                  index === 1 || index === 3
                    ? "bg-white/[0.08] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                    : "bg-white/[0.04] text-white/82",
                ].join(" ")}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="warm" className="py-14 lg:py-20">
        <SectionHeading
          eyebrow="Problems"
          title="A weak site makes local buyers hesitate before they call."
          description="If the page feels slow, unclear, or outdated, it creates friction instead of trust."
        />
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
          Most local service websites don&apos;t lose leads because of traffic.
          They lose them because visitors don&apos;t trust them fast enough.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((item, index) => (
            <article
              key={item.title}
              className={[
                "rounded-[1.7rem] p-6 transition duration-300 hover:-translate-y-0.5",
                index === 1
                  ? "surface-card border-amber-200/18"
                  : "surface-card",
              ].join(" ")}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/72">
                  {index + 1}
                </p>
                <span className="h-2 w-2 rounded-full bg-amber-200/70" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{item.text}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="dark" className="py-14 lg:py-20">
        <SectionHeading
          eyebrow="Solution"
          title="Designed to improve trust, clarity, and lead conversion."
          description="The site is built to help local customers contact you faster, while keeping the experience simple and professional."
        />
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
          This is not about making your site prettier. It&apos;s about making
          it easier for someone to call you.
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {solutions.map((item, index) => (
            <div
              key={item.title}
              className={[
                "rounded-[1.7rem] p-6 transition duration-300 hover:-translate-y-0.5",
                index === 0
                  ? "surface-card border-amber-200/20"
                  : index === 1
                    ? "surface-card"
                    : "surface-card bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))]",
              ].join(" ")}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/72">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="offer" tone="soft" className="py-14 lg:py-20">
        <SectionHeading
          eyebrow="Offer"
          title="One simple monthly plan with the right things included."
          description="Built for local service businesses that want a better website with monthly support instead of a one-time project."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="editorial-ring rounded-[2.15rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.06))] p-7 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/80">
              First month free
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-white sm:text-[2.5rem]">
              Then $99/month
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/76">
              This is a simple way to upgrade your online presence without a
              big upfront cost.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {monthlyOffer.map((item, index) => (
                <li
                  key={item}
                  className={[
                    "rounded-[1.2rem] border px-4 py-4 text-sm transition duration-300 hover:-translate-y-0.5",
                    index === 0
                      ? "border-amber-200/25 bg-amber-200/10"
                      : "border-white/10 bg-white/[0.06]",
                  ].join(" ")}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-white/70">
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1">
                No contracts
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1">
                Cancel anytime
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1">
                Ongoing updates included
              </span>
            </div>
          </article>
          <aside className="surface-card rounded-[2.15rem] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/80">
              Built for
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-white/78">
              <li>Plumbers, electricians, and HVAC businesses</li>
              <li>Owners who want a simple, low-risk monthly service</li>
              <li>Teams that want ongoing website management</li>
            </ul>
            <div className="mt-7 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 text-sm leading-7 text-white/74">
              Designed to improve trust, clarity, and lead conversion without
              overpromising results.
            </div>
            <Link
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-amber-200 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-amber-100"
            >
              Get my free preview
            </Link>
          </aside>
        </div>
      </SectionShell>

      <SectionShell tone="dark" className="py-14 lg:py-20">
        <div className="surface-card rounded-[2rem] p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/80">
            Speed
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Fast to preview. Fast to launch.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Preview in 24h",
                text: "I show you the direction quickly so you can say yes or no fast.",
              },
              {
                title: "Live in 48h",
                text: "The site can go live fast once the basics are confirmed.",
              },
              {
                title: "No long process",
                text: "Simple steps, fast decisions, and no drag.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={[
                  "rounded-[1.5rem] p-5 transition duration-300 hover:-translate-y-0.5",
                  index === 1
                    ? "surface-card border-amber-200/18"
                    : "surface-card",
                ].join(" ")}
              >
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="work" tone="warm" className="py-14 lg:py-20">
        <SectionHeading
          eyebrow="Featured work"
          title="A published project that shows the work is real."
          description="simuladormei.com.br is a live example of a functional build with clear hierarchy and mobile-first layout."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(12,19,31,0.82))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.18)] sm:p-7">
            <div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-amber-200/12 blur-2xl" />
            <div className="relative grid gap-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/80">
                    Published site
                  </p>
                  <a
                    href="https://simuladormei.com.br"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex text-2xl font-semibold text-white sm:text-[2rem] transition hover:text-amber-100"
                  >
                    {caseStudy.name}
                  </a>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-white/72">
                  Real proof
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="surface-card rounded-[1.65rem] p-4 sm:p-5">
                  <div className="rounded-[1.3rem] border border-white/10 bg-slate-950/55 p-4">
                    <div className="flex items-center justify-between border-b border-white/8 pb-3 text-xs text-white/50">
                      <span>simuladormei.com.br</span>
                      <span>Preview frame</span>
                    </div>
                    <div className="mt-4 grid gap-3">
                      <div className="h-24 rounded-[1.2rem] bg-[linear-gradient(135deg,rgba(214,180,106,0.18),rgba(255,255,255,0.04))]" />
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-[1.1rem] border border-white/10 bg-white/[0.04] p-4">
                          <p className="text-xs text-white/45">Layout</p>
                          <p className="mt-2 text-sm font-semibold text-white">
                            Clean and focused
                          </p>
                        </div>
                        <div className="rounded-[1.1rem] border border-white/10 bg-white/[0.04] p-4">
                          <p className="text-xs text-white/45">Flow</p>
                          <p className="mt-2 text-sm font-semibold text-white">
                            Real user path
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid content-start gap-4">
                  <div className="surface-card rounded-[1.45rem] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/48">
                      What this shows
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-white/76">
                      <li>Clean structure</li>
                      <li>Fast loading</li>
                      <li>Mobile-first layout</li>
                      <li>Real user flow</li>
                    </ul>
                  </div>
                  <div className="surface-card rounded-[1.45rem] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/80">
                      Good fit for
                    </p>
                    <p className="mt-4 text-sm leading-7 text-white/76">
                      Plumbers, electricians, HVAC companies, and any local
                      service business that wants to look established before
                      the first call.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <aside className="grid gap-5">
            <div className="surface-card rounded-[1.8rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/48">
                Proof notes
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Functional build",
                  "Published site",
                  "Mobile-first",
                  "Clear hierarchy",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/78"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="surface-card rounded-[1.8rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/48">
                Why it matters
              </p>
              <p className="mt-4 text-sm leading-7 text-white/74">
                Real proof should feel calm and specific. This case gives the
                visitor evidence that the work can ship, hold up on mobile, and
                stay clear in real use.
              </p>
            </div>
          </aside>
        </div>
      </SectionShell>

      <SectionShell tone="soft" className="py-14 lg:py-20">
        <SectionHeading
          eyebrow="Why choose us"
          title="Direct, simple, and built for real customers."
          description="Less handoff. Less waiting. More clarity."
        />
        <div className="mt-10 grid gap-3">
          {[
            "You work directly with the builder",
            "Fast decisions, no delays",
            "Built for real customers, not design awards",
          ].map((item, index) => (
            <div
              key={item}
              className={[
                "rounded-[1.4rem] px-5 py-4 text-sm font-medium transition duration-300 hover:-translate-y-0.5",
                index === 0
                  ? "surface-card border-amber-200/18"
                  : "surface-card",
              ].join(" ")}
            >
              {item}
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="dark" className="py-14 lg:py-20">
        <SectionHeading
          eyebrow="Process"
          title="A short process that keeps the monthly service moving."
          description="No agency handoff. Each step is built to keep the work clear, fast, and easy to maintain."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {processSteps.map((item, index) => (
            <div
              key={item.step}
              className={[
                "rounded-[1.6rem] p-6 transition duration-300 hover:-translate-y-0.5",
                index === 2 ? "surface-card border-amber-200/18" : "surface-card",
              ].join(" ")}
            >
              <p className="text-xs font-semibold tracking-[0.24em] text-amber-100/80">
                {item.step}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="faq" tone="warm" className="py-14 lg:py-20">
        <SectionHeading
          eyebrow="FAQ"
          title="Short answers to the questions buyers actually ask."
          description="The goal here is to remove hesitation and make the monthly service feel simple."
        />
        <FAQAccordion />
      </SectionShell>

      <SectionShell id="contact" tone="dark" className="py-14 lg:py-20 pb-28">
        <div className="grid gap-8 rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(10,15,24,0.84))] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.34)] md:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:p-10">
          <div className="relative">
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-amber-200/12 blur-3xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/80">
              Final CTA
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">
              Let me show you what your site could look like.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/72">
              Free preview first. Then decide if the monthly service makes
              sense. If you prefer, email me directly at{" "}
              <Link
                href={`mailto:${contactEmail}`}
                className="text-amber-100 underline decoration-amber-100/40 underline-offset-4"
              >
                {contactEmail}
              </Link>
              .
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Free preview", "No pressure", "Clear next step"].map((item) => (
                <div
                  key={item}
                  className="surface-card rounded-[1.25rem] px-4 py-4 text-sm font-medium text-white/82"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <LeadForm initialStatus={leadStatus} />
        </div>
      </SectionShell>

      <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
        <div className="flex gap-3 rounded-full border border-white/10 bg-[#07111f]/88 p-2 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
          <Link
            href="#contact"
            className="flex-1 rounded-full bg-amber-200 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition duration-300 hover:bg-amber-100"
          >
            Get my free preview
          </Link>
          <Link
            href={`mailto:${contactEmail}`}
            className="flex-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:bg-white/[0.08]"
          >
            Email
          </Link>
        </div>
      </div>
    </main>
  );
}
