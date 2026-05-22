import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/app/components/CTASection";
import { ProjectCollage } from "@/app/components/ProjectCollage";
import { services, type Service } from "@/app/data/site";

type ServicePageTemplateProps = {
  service: Service;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const related = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden bg-[#f5eddf] px-5 py-14 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(90deg,rgba(67,83,52,.14)_1px,transparent_1px),linear-gradient(rgba(67,83,52,.1)_1px,transparent_1px)] [background-size:46px_46px]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="inline-flex rotate-[-2deg] bg-[#c86b43] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
              Cyprus Joy service
            </p>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-none text-stone-950 sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
              {service.intro}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex bg-[#3f5132] px-6 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-[7px_7px_0_#d7c3a5] transition hover:-translate-y-0.5"
            >
              Request a Free Quotation
            </Link>
          </div>
          <div className="relative min-h-[420px]">
            <div className="absolute right-0 top-0 h-72 w-[70%] rotate-[3deg] overflow-hidden rounded-t-[7rem] border-[10px] border-white bg-white shadow-2xl shadow-stone-900/20 sm:h-96">
              <Image
                src={service.image}
                alt={`${service.title} project work by Cyprus Joy`}
                width={1170}
                height={866}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 max-w-sm border border-stone-300 bg-[#fffaf0] p-6 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#6b6a3f]">
                Practical note
              </p>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Cyprus Joy looks at the space, requirements and budget before
                suggesting the most suitable long-lasting approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#6b6a3f]">
              Typical work includes
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-stone-950">
              The common parts of this service.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {service.included.map((item, index) => (
              <div
                key={item}
                className={`border border-stone-300 p-5 text-sm font-medium leading-6 text-stone-800 ${
                  index % 3 === 0
                    ? "rounded-t-[3rem] bg-[#e6d6bd]"
                    : index % 3 === 1
                      ? "bg-white"
                      : "rounded-br-[3rem] bg-[#d8e0c6]"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e7dcc8] px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#6b6a3f]">
                Related services
              </p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-stone-950">
                Work often connects across the property.
              </h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item, index) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className={`border border-stone-300 bg-[#fffaf0] p-5 text-stone-950 transition hover:-translate-y-1 hover:shadow-lg ${
                  index === 0 ? "rounded-t-[3rem]" : ""
                } ${index === 3 ? "rounded-br-[3rem]" : ""}`}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  {item.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProjectCollage />
      <CTASection
        title={`Request a free quotation for ${service.title.toLowerCase()}.`}
        text="Send a few details about the property, the work required and where you are in the Paphos region."
      />
    </>
  );
}
