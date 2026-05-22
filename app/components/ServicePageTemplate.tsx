import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/app/components/ButtonLink";
import { PhotoCTA } from "@/app/components/PhotoCTA";
import { ProjectGallery } from "@/app/components/ProjectGallery";
import { allServices, type Service } from "@/app/data/site";

type ServicePageTemplateProps = {
  service: Service;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const related = allServices
    .filter((item) => item.slug !== service.slug)
    .slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden bg-stone-900 px-5 py-24 text-white sm:px-6 lg:px-8">
        <Image
          src={service.image}
          alt={`${service.title} project work by Cyprus Joy`}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,25,23,.88),rgba(47,64,37,.74),rgba(28,25,23,.22))]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e8d8bd]">
              Cyprus Joy service
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100">
              {service.intro}
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact">Request a Free Quotation</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f4ec] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
              Typical work includes
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950">
              Clear, practical work for the property.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.included.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-stone-200 bg-white p-5 text-sm font-medium leading-6 text-stone-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
                Related services
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950">
                Work often connects across the property.
              </h2>
            </div>
            <ButtonLink href="/services" variant="text">
              View all services
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className="group overflow-hidden rounded-2xl border border-stone-200 bg-[#f8f4ec] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-stone-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    {item.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProjectGallery />
      <PhotoCTA />
    </>
  );
}
