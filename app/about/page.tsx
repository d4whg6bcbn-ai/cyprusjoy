import Image from "next/image";
import { CTASection } from "@/app/components/CTASection";
import { SectionHeader } from "@/app/components/SectionHeader";
import { company, reasons } from "@/app/data/site";

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f5eddf] px-5 py-14 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(90deg,rgba(67,83,52,.14)_1px,transparent_1px),linear-gradient(rgba(67,83,52,.1)_1px,transparent_1px)] [background-size:46px_46px]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="inline-flex rotate-[-2deg] bg-[#c86b43] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
              About Cyprus Joy
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-none text-stone-950 sm:text-6xl">
              Building and landscaping in Paphos since 2003.
            </h1>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              Cyprus Joy has been providing high-class service in the Paphos
              region of Cyprus since 2003, with a wide array of landscaping,
              renovation and building services at competitive prices.
            </p>
          </div>
          <div className="overflow-hidden rounded-t-[8rem] border-[10px] border-white bg-white shadow-xl shadow-stone-900/10">
            <Image
              src="/images/hero-landscaping-renovation.jpeg"
              alt="Cyprus Joy project work in Paphos"
              width={1140}
              height={700}
              priority
              className="h-full min-h-72 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-6 text-base leading-8 text-stone-700">
          <p>
            The company works with homeowners, villa owners, property managers,
            landlords and local businesses who need reliable outdoor
            improvements, renovation work, fencing, artificial grass, tiling,
            painting, natural stone and general building services.
          </p>
          <p>
            Cyprus Joy takes a good look at each customer’s requirements, plans
            the most suitable solution, and carries out cost-effective,
            long-lasting work to fit the customer’s budget.
          </p>
          <p>
            Contact Douglas for a free no obligation quote on{" "}
            <a
              href={company.phoneHref}
              className="font-semibold text-green-800 hover:underline"
            >
              {company.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="bg-[#e7dcc8] px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What matters"
            title="Practical advice and long-lasting work"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="border border-stone-300 bg-[#fffaf0] p-5 text-sm font-medium leading-6 text-stone-800 odd:rounded-t-[3rem] even:rounded-br-[3rem]"
              >
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
