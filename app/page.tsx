import Image from "next/image";
import Link from "next/link";
import { CreativeHero } from "@/app/components/CreativeHero";
import { CTASection } from "@/app/components/CTASection";
import { CurrentProjects } from "@/app/components/CurrentProjects";
import { ProcessBoard } from "@/app/components/ProcessBoard";
import { ServiceTileMap } from "@/app/components/ServiceTileMap";
import { company } from "@/app/data/site";

export default function Home() {
  return (
    <>
      <CreativeHero />
      <ServiceTileMap />

      <section className="relative overflow-hidden bg-[#3f5132] px-5 py-14 text-white sm:px-6 lg:px-8">
        <Image
          src="/images/project-board-terrace.jpeg"
          alt=""
          fill
          className="object-cover opacity-15 blur-sm"
        />
        <div className="absolute inset-0 bg-[#3f5132]/90" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="relative min-h-[340px]">
            <div className="absolute left-0 top-0 w-[66%] overflow-hidden rounded-t-[6rem] border-[8px] border-[#fffaf0] bg-white shadow-2xl">
              <Image
                src="/images/general-renovations.jpg"
                alt="Cyprus Joy renovation project"
                width={1100}
                height={300}
                className="h-60 w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[58%] rotate-[2deg] border-[8px] border-[#e7dcc8] bg-white shadow-xl">
              <Image
                src="/images/stonework.jpg"
                alt="Cyprus Joy natural stone project"
                width={305}
                height={190}
                className="h-52 w-full object-cover"
              />
            </div>
            <div className="absolute left-8 top-56 bg-[#c86b43] px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] shadow-xl">
              Cost-effective · long-lasting
            </div>
          </div>

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#e7dcc8]">
              Built around your property
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              The work starts with the actual space, not a fixed package.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-green-50">
              <p>
                Cyprus Joy takes a good look at the customer’s requirements,
                the property, the budget and the materials that will suit the
                job before recommending a practical solution.
              </p>
              <p>
                The aim is straightforward: competitive prices, sensible advice
                and work that looks good for years to come.
              </p>
            </div>
            <Link
              href="/about"
              className="group mt-8 inline-flex border-b-2 border-white pb-1 text-sm font-bold uppercase tracking-[0.12em] text-white"
            >
              More about Cyprus Joy
              <span className="ml-2 transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ProcessBoard />
      <CurrentProjects />
      <CTASection
        title="Tell us what you need and we’ll provide a free quotation."
        text={`Call Douglas on ${company.phoneDisplay} or email ${company.emailPrimary}.`}
      />
    </>
  );
}
