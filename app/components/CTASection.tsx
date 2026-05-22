import Link from "next/link";
import { company } from "@/app/data/site";

type CTASectionProps = {
  title?: string;
  text?: string;
};

export function CTASection({
  title = "Tell us what you need and we’ll provide a free quotation.",
  text = "Call Douglas or send an email with a few details about the work required, location and preferred timescale.",
}: CTASectionProps) {
  return (
    <section className="bg-[#c86b43] px-5 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="w-fit rotate-[-2deg] bg-[#fffaf0] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#a9542f]">
            Free quotation
          </p>
          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-orange-50">
            {text}
          </p>
        </div>
        <div className="border-2 border-white/50 bg-[#fffaf0] p-6 text-stone-950 shadow-[12px_12px_0_rgba(63,81,50,.45)]">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#6b6a3f]">
            Contact Douglas
          </p>
          <a
            href={company.phoneHref}
            className="mt-4 block font-serif text-3xl text-stone-950 hover:text-[#a9542f]"
          >
            {company.phoneDisplay}
          </a>
          <a
            href={`mailto:${company.emailPrimary}`}
            className="mt-3 block text-sm font-semibold text-[#3f5132] hover:underline"
          >
            {company.emailPrimary}
          </a>
          <Link
            href="/contact"
            className="mt-6 inline-flex w-full justify-center bg-[#3f5132] px-5 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Open contact details
          </Link>
        </div>
      </div>
    </section>
  );
}
