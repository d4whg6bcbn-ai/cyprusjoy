import Link from "next/link";
import { services } from "@/app/data/site";

export function ServiceAccordion() {
  return (
    <section className="bg-[#f5eddf] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#6b6a3f]">
            Services in detail
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
            Open the work you need.
          </h2>
        </div>
        <div className="space-y-3">
          {services.map((service, index) => (
            <details
              key={service.slug}
              className="group border border-stone-300 bg-[#fffaf0] p-5 open:bg-white"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-xl font-semibold text-stone-950">
                  {service.title}
                </span>
                <span className="grid size-8 place-items-center bg-[#3f5132] text-white transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-700">
                {service.summary}
              </p>
              <Link
                href={`/${service.slug}`}
                className="mt-5 inline-flex rounded-full bg-[#e6d6bd] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-stone-950 transition hover:bg-[#d7c3a5]"
              >
                Read more
              </Link>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
