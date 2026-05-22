import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/app/components/ButtonLink";
import { featuredServices, serviceNavItems } from "@/app/data/site";

export function FeaturedServices() {
  return (
    <section id="services" className="bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
              Services
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
              Landscaping, fencing and renovation work for Paphos properties.
            </h2>
          </div>
          <ButtonLink href="/services" variant="secondary" className="text-stone-900">
            View all services
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group relative min-h-[430px] overflow-hidden rounded-2xl bg-stone-900 shadow-xl shadow-stone-900/10"
            >
              <Image
                src={service.image}
                alt={`${service.title} by Cyprus Joy`}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent" />
              <div className="absolute bottom-0 p-7 text-white">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-100">
                  {service.summary}
                </p>
                <span className="mt-5 inline-flex border-b border-white pb-1 text-sm font-semibold">
                  View service
                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-x-10 gap-y-3 border-y border-stone-200 py-8 md:grid-cols-2">
          {serviceNavItems.map((item) => (
            <Link
              key={`${item.title}-${item.href}`}
              href={item.href}
              className="group flex items-center justify-between gap-5 py-3 text-stone-800"
            >
              <span>
                <span className="block text-lg font-semibold group-hover:text-[#496236]">
                  {item.title}
                </span>
                <span className="mt-1 block text-sm leading-6 text-stone-500">
                  {item.summary}
                </span>
              </span>
              <span className="text-xl text-[#a9542f] transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
