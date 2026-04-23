import Link from "next/link";

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M4.98 3.5A2.48 2.48 0 1 0 4.98 8a2.48 2.48 0 0 0 0-4.5ZM3 9h3.96v12H3V9Zm7.5 0h3.8v1.64h.05c.53-1 1.84-2.05 3.78-2.05C22.19 8.59 21 11.2 21 14.45V21h-3.96v-5.66c0-1.35-.02-3.1-1.89-3.1-1.9 0-2.19 1.48-2.19 3v5.76H9.5V9Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.68c-2.78.6-3.37-1.15-3.37-1.15-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.34 1.09 2.9.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.41.2 2.45.1 2.71.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.68.91.68 1.84v2.73c0 .26.18.59.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function BehindThisSection() {
  return (
    <section className="section-surface-soft border-t border-white/5 py-14 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="grid gap-6 rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(10,15,24,0.82))] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.22)] lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
          <div className="flex flex-col justify-between gap-5">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-100/80">
                Who&apos;s Behind This?
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl lg:text-[2.8rem]">
                Hi, I&apos;m Henry a developer who builds fast websites for home service businesses.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/72 sm:text-lg">
                I know what it&apos;s like to run a business and not have a website
                you can rely on. A slow, unclear, or outdated site doesn&apos;t just
                look bad, it costs you customers. I focus on speed, clarity, and
                designs that turn visitors into calls, because that&apos;s what your
                business actually needs.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold tracking-[0.2em] text-amber-100/80 uppercase">
                From S&atilde;o Paulo, working globally
              </span>
            </div>
          </div>

          <div className="grid content-start gap-4 rounded-[1.8rem] border border-white/10 bg-slate-950/45 p-5 sm:p-6">
            <div className="flex items-center gap-3 border-b border-white/8 pb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-sm font-semibold text-white">
                H
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/48">
                  Connect
                </p>
                <p className="text-sm text-white/72">
                  Find me on the platforms below.
                </p>
              </div>
            </div>

            <div className="grid gap-3">
              <Link
                href="https://www.linkedin.com/in/henry-idesis-140356302/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]"
              >
                <span className="inline-flex items-center gap-2">
                  <LinkedinIcon />
                  LinkedIn
                </span>
                <span className="text-white/40">↗</span>
              </Link>
              <Link
                href="https://github.com/HenryIdesis"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]"
              >
                <span className="inline-flex items-center gap-2">
                  <GithubIcon />
                  GitHub
                </span>
                <span className="text-white/40">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
