import Image from "next/image";
import { ButtonLink } from "@/app/components/ButtonLink";
import { PhotoCTA } from "@/app/components/PhotoCTA";
import { allServices, serviceNavItems } from "@/app/data/site";

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-stone-900 px-5 py-24 text-white sm:px-6 lg:px-8">
        <Image
          src="/images/project-board-terrace.jpeg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,25,23,.9),rgba(47,64,37,.75),rgba(28,25,23,.25))]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e8d8bd]">
              Services
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
              Landscaping, renovation and exterior improvement services.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100">
              A wide range of practical services for homes, gardens, villas,
              rental properties and businesses in the Paphos region.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f4ec] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[320px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-36 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
                Service menu
              </p>
              <div className="mt-4 grid gap-1">
                {serviceNavItems.map((item) => (
                  <a
                    key={`${item.title}-${item.href}`}
                    href={item.href}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-[#f8f4ec] hover:text-[#496236]"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-5 lg:hidden">
            <details className="rounded-2xl border border-stone-200 bg-white p-4" open>
              <summary className="cursor-pointer list-none text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
                Open service menu
              </summary>
              <div className="mt-4 grid gap-2">
                {serviceNavItems.map((item) => (
                  <a
                    key={`${item.title}-${item.href}`}
                    href={item.href}
                    className="rounded-lg bg-[#f8f4ec] px-3 py-3 text-sm font-medium text-stone-700"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </details>
          </div>

          <div className="grid gap-6">
            {allServices.map((service) => (
              <article
                key={service.slug}
                id={service.slug}
                className="grid overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm md:grid-cols-[0.78fr_1.22fr]"
              >
                <div className="relative min-h-72">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 32vw, 100vw"
                  />
                </div>
                <div className="p-7">
                  <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-stone-700">
                    {service.intro}
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <ButtonLink href={`/${service.slug}`} variant="primary">
                      View service
                    </ButtonLink>
                    <ButtonLink href="/contact" variant="secondary" className="text-stone-900">
                      Free quotation
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PhotoCTA />
    </>
  );
}
