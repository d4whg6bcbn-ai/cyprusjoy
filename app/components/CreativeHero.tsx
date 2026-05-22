import Image from "next/image";
import Link from "next/link";
import { company, materialBadges } from "@/app/data/site";

export function CreativeHero() {
  return (
    <section className="relative overflow-hidden bg-[#f5eddf] px-5 py-10 sm:px-6 lg:px-8">
      <Image
        src="/images/project-board-terrace.jpeg"
        alt=""
        fill
        priority
        className="object-cover opacity-15 blur-sm"
      />
      <div className="absolute inset-0 bg-[#f5eddf]/85" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(90deg,rgba(67,83,52,.14)_1px,transparent_1px),linear-gradient(rgba(67,83,52,.1)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-5 flex flex-wrap gap-2">
            {materialBadges.map((badge, index) => (
              <span
                key={badge}
                className={`border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${
                  index === 0
                    ? "rotate-[-2deg] border-[#a9542f] bg-[#c86b43] text-white"
                    : "border-stone-300 bg-[#fffaf0] text-stone-700"
                }`}
              >
                {badge}
              </span>
            ))}
          </div>
          <p className="font-serif text-lg italic text-[#6b6a3f]">
            {company.fullName}
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-[0.98] tracking-tight text-stone-950 sm:text-6xl">
            Paphos gardens, outdoor spaces & renovations built to last
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            Cyprus Joy has been providing high-class landscaping, renovation,
            fencing, artificial grass and building services in the Paphos region
            since 2003.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center bg-[#a9542f] px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[8px_8px_0_#d7c3a5] transition hover:-translate-y-0.5 hover:shadow-[10px_10px_0_#d7c3a5]"
            >
              Request a Free Quotation
            </Link>
            <Link
              href="#services"
              className="group inline-flex items-center justify-center border-b-2 border-stone-950 px-1 py-3 text-sm font-bold uppercase tracking-[0.08em] text-stone-950"
            >
              Explore Services
              <span className="ml-2 transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="relative min-h-[430px] lg:min-h-[520px]">
          <div className="absolute left-0 top-8 w-[64%] rotate-[-2deg] rounded-t-[8rem] border-[8px] border-[#fffaf0] bg-white shadow-2xl shadow-stone-900/20">
            <Image
              src="/images/project-board-garden.jpeg"
              alt="Cyprus Joy garden landscaping project"
              width={1170}
              height={866}
              priority
              className="h-72 rounded-t-[7rem] object-cover sm:h-96"
            />
          </div>
          <div className="absolute right-0 top-0 w-[50%] rotate-[2deg] border-[8px] border-white bg-white shadow-xl shadow-stone-900/20">
            <Image
              src="/images/aluminium-fencing.jpg"
              alt="Cyprus Joy aluminium fencing project"
              width={1140}
              height={286}
              className="h-44 object-cover sm:h-56"
            />
            <p className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-stone-700">
              Material sample · fencing
            </p>
          </div>
          <div className="absolute bottom-8 left-[18%] w-[56%] rotate-[1deg] overflow-hidden rounded-[1.5rem] border-[8px] border-[#fffaf0] bg-white shadow-2xl shadow-stone-900/20">
            <Image
              src="/images/artificial-grass.jpg"
              alt="Cyprus Joy artificial grass installation"
              width={1170}
              height={863}
              className="h-56 object-cover sm:h-64"
            />
          </div>
          <div className="absolute bottom-0 right-6 max-w-48 rotate-[-3deg] bg-[#3f5132] p-5 text-white shadow-xl">
            <p className="font-serif text-4xl leading-none">2003</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em]">
              Working across Paphos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
