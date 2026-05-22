import Image from "next/image";
import { ButtonLink } from "@/app/components/ButtonLink";
import { trustItems } from "@/app/data/site";

export function HeroPhotoSection() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-stone-950 px-5 py-24 text-white sm:px-6 lg:min-h-[780px] lg:px-8">
      <Image
        src="/images/hero-landscaping-renovation.jpeg"
        alt="Cyprus Joy landscaping and renovation project"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,25,18,.92),rgba(47,64,37,.76)_48%,rgba(28,25,23,.22))]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-stone-950/70 to-transparent" />
      <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-end lg:min-h-[620px]">
        <div className="max-w-4xl pb-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e8d8bd]">
            Cyprus Joy Building and Landscaping
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Garden Landscaping & Renovations in Paphos
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-100 sm:text-xl sm:leading-9">
            Cyprus Joy has been providing landscaping, renovation, artificial
            grass, fencing and building services across the Paphos region since
            2003.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Request a Free Quotation</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Explore Services
            </ButtonLink>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            {trustItems.slice(0, 3).map((item) => (
              <div
                key={item}
                className="rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-stone-100 backdrop-blur"
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
