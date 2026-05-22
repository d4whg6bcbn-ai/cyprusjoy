import Image from "next/image";
import { ButtonLink } from "@/app/components/ButtonLink";
import { trustItems } from "@/app/data/site";

export function HeroPhotoSection() {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-stone-900 px-5 py-24 text-white sm:px-6 lg:px-8">
      <Image
        src="/images/hero-landscaping-renovation.jpeg"
        alt="Cyprus Joy landscaping and renovation project"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,25,23,.88),rgba(42,57,33,.72),rgba(28,25,23,.24))]" />
      <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-end">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#e8d8bd]">
            Cyprus Joy Building and Landscaping
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Garden Landscaping & Renovations in Paphos
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100">
            Cyprus Joy has been providing landscaping, renovation, artificial
            grass, fencing and building services across the Paphos region since
            2003.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Request a Free Quotation</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Explore Our Services
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item}
                className="border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium text-stone-100 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
