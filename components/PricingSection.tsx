import React from "react";
import type { Dictionary, Locale } from "../lib/dictionaries";

function CheckIcon() {
  return (
    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white text-[#0d554e]" aria-hidden="true">
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
        <path d="m3 8 3.1 3.1L13 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/** Three pricing options shown in the supplied design. */
export default function PricingSection({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const copy = dictionary.pricing;
  return (
    <section
      aria-labelledby="pricing-title"
      className="relative isolate overflow-hidden bg-transparent px-5 py-12 text-white sm:px-8 sm:py-[68px]"
    >
      <div className="relative mx-auto max-w-[1154px]">
        <span className="inline-flex rounded-full border border-white/20 bg-white/[0.025] px-3 py-[6px] text-[14px] font-medium leading-5">
          {copy.badge}
        </span>
        <h2 id="pricing-title" className="mt-6 text-[clamp(2.25rem,3.55vw,3.25rem)] font-bold leading-[1.14] tracking-[-0.035em]">
          {copy.title} <span className="bg-gradient-to-r from-[#ffe22c] via-[#ff882e] to-[#ff2937] bg-clip-text text-transparent">{copy.highlight}</span>
        </h2>
        <p className="mt-5 text-[15px] leading-6 text-white/95 sm:text-[16px]">{copy.description}</p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {copy.plans.map((plan, planIndex) => (
            <article
              key={plan.name}
              className={`flex min-h-[550px] flex-col rounded-[16px] border border-white/[0.12] p-5 sm:min-h-[558px] ${planIndex === 1 ? "bg-[#181818]" : "bg-[#111111]"}`}
            >
              <h3 className="text-[18px] font-semibold leading-6">{plan.name}</h3>
              <div className="mt-5 flex items-baseline gap-2">
                <bdi dir="ltr" className="text-[42px] font-light leading-none tracking-[-0.035em]">{plan.price}</bdi>
                {plan.cadence && <span dir="auto" className="text-[14px] text-white/45">{plan.cadence}</span>}
              </div>
              <p className="mt-2 text-[15px] leading-6 text-white/70">{plan.billing}</p>
              <div className="mt-4 h-px bg-white/[0.12]" />
              <p className="mt-4 text-[15px] leading-6">{copy.included}</p>
              <ul className="mt-4 flex flex-col gap-[17px]">
                {copy.features.map((feature, index) => {
                  const unavailable = (plan.unavailable as readonly number[]).includes(index);
                  return (
                    <li key={feature} className="flex items-center gap-3 text-[15px] leading-5">
                      <CheckIcon />
                      <span className={unavailable ? "line-through decoration-white/80" : ""}>{feature}</span>
                    </li>
                  );
                })}
              </ul>
              <a href={`/${locale}/pricing/${["starter", "enterprise", "project-based"][planIndex]}`} className="mt-auto mb-3 text-center text-[14px] font-semibold text-white/75 underline decoration-white/30 underline-offset-4 transition hover:text-white">{copy.details}</a>
              <a href="#demo" className="theme-component pricing-cta mt-auto mb-3 block rounded-[8px] px-4 py-[13px] text-center text-[15px] font-medium leading-5">
                {copy.demo}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
