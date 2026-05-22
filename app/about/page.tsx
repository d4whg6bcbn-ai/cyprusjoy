import Image from "next/image";
import { ButtonLink } from "@/app/components/ButtonLink";
import { PhotoCTA } from "@/app/components/PhotoCTA";
import { ProjectGallery } from "@/app/components/ProjectGallery";
import { company, reasons } from "@/app/data/site";

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-stone-900 px-5 py-24 text-white sm:px-6 lg:px-8">
        <Image
          src="/images/hero-landscaping-renovation.jpeg"
          alt="Cyprus Joy landscaping and renovation work in Paphos"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,25,23,.9),rgba(47,64,37,.74),rgba(28,25,23,.24))]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e8d8bd]">
              About Cyprus Joy
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
              Building and landscaping in Paphos since 2003.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100">
              Cyprus Joy has been providing high-class service in the Paphos
              region of Cyprus since 2003, with practical landscaping,
              renovation and building work at competitive prices.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f4ec] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
              Local and practical
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
              Work planned around the property, the budget and the finish that
              needs to last.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-stone-700">
              <p>
                The company works with homeowners, villa owners, property
                managers, landlords and local businesses who need reliable
                outdoor improvements, renovation work, fencing, artificial
                grass, tiling, painting, natural stone and general building
                services.
              </p>
              <p>
                Cyprus Joy takes a good look at each customer’s requirements,
                recommends the most suitable solution, and carries out
                cost-effective, long-lasting work to fit the customer’s budget.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Request a Free Quotation</ButtonLink>
              <ButtonLink href="/services" variant="secondary" className="text-stone-900">
                View Services
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-2xl bg-[#c86b43]/12" />
            <div className="relative overflow-hidden rounded-2xl border border-white bg-white shadow-xl shadow-stone-900/10">
              <Image
                src="/images/project-board-terrace.jpeg"
                alt="Finished outdoor terrace work by Cyprus Joy"
                width={1100}
                height={760}
                className="h-full min-h-[420px] w-full object-cover"
              />
              <div className="absolute bottom-5 left-5 rounded-md bg-white/95 px-4 py-3 text-sm font-semibold text-stone-950 shadow-sm">
                Serving {company.region} since {company.established}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
              What matters
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
              Practical advice and long-lasting workmanship.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="rounded-2xl border border-stone-200 bg-[#f8f4ec] p-5 text-sm font-semibold leading-6 text-stone-800 shadow-sm"
              >
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectGallery />
      <PhotoCTA />
    </>
  );
}
