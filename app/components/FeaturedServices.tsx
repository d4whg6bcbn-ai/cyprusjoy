import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/app/components/ButtonLink";
import { featuredServices, serviceNavItems } from "@/app/data/site";

export function FeaturedServices() {
  const remainingServices = serviceNavItems.filter(
    (item) =>
      !["/garden-landscaping", "/artificial-grass", "/aluminium-fencing"].includes(
        item.href,
      ),
  );

  return (
    <section id="services" className="bg-[#f3eadb] px-5 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
              Services
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
              Landscaping, fencing and renovation work for Paphos properties.
            </h2>
          </div>
          <ButtonLink href="/services" variant="secondary" className="text-stone-900">
            View all services
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:auto-rows-[280px]">
          {featuredServices.map((service, index) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className={`group relative overflow-hidden rounded-2xl bg-stone-900 shadow-xl shadow-stone-900/10 ${
                index === 0
                  ? "min-h-[540px] lg:col-span-6 lg:row-span-2"
                  : "min-h-[360px] lg:col-span-3 lg:row-span-2"
              }`}
            >
              <Image
                src={service.image}
                alt={`${service.title} by Cyprus Joy`}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#e8d8bd]">
                  Featured service
                </p>
                <h3 className="text-3xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-stone-100">
                  {service.summary}
                </p>
                <span className="mt-6 inline-flex border-b border-white pb-1 text-sm font-semibold">
                  View service
                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-3 border-b border-stone-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
                Also available
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-stone-950">
                Renovation, finishing and exterior improvement services.
              </h3>
            </div>
          </div>
          <div className="mt-6 grid gap-x-10 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
            {remainingServices.map((item) => (
              <Link
                key={`${item.title}-${item.href}`}
                href={item.href}
                className="group flex items-center justify-between gap-5 border-b border-stone-100 py-3 text-stone-800 last:border-0 lg:[&:nth-last-child(-n+3)]:border-0"
              >
                <span className="text-base font-semibold group-hover:text-[#496236]">
                  {item.title}
                </span>
                <span className="text-xl text-[#a9542f] transition group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
