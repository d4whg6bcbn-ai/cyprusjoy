import Image from "next/image";
import { ButtonLink } from "@/app/components/ButtonLink";
import { company, serviceNavItems } from "@/app/data/site";

const requestDetails = [
  "The property location in the Paphos region",
  "The service you need, such as landscaping, fencing, grass, renovation or tiling",
  "Any photos, measurements or notes about access",
  "Whether you need advice, a repair, a full installation or a finished project quote",
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-stone-900 px-5 py-24 text-white sm:px-6 lg:px-8">
        <Image
          src="/images/aluminium-fencing.jpg"
          alt="Cyprus Joy aluminium fencing and garden work"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,25,23,.9),rgba(47,64,37,.76),rgba(28,25,23,.28))]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e8d8bd]">
              Contact Cyprus Joy
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
              Tell us what you need and ask for a free quotation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100">
              For a free no obligation quote, call Douglas or email Cyprus Joy
              with details of the landscaping, renovation, fencing or building
              work required.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f4ec] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
              Direct contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950">
              Contact details
            </h2>
            <div className="mt-7 space-y-5 text-base leading-7 text-stone-700">
              <p>
                <strong className="block text-sm uppercase tracking-[0.12em] text-stone-500">
                  Douglas
                </strong>
                <a
                  href={company.phoneHref}
                  className="text-xl font-semibold text-[#496236] hover:underline"
                >
                  {company.phoneDisplay}
                </a>
              </p>
              <p>
                <strong className="block text-sm uppercase tracking-[0.12em] text-stone-500">
                  Email
                </strong>
                <a
                  href={`mailto:${company.emailPrimary}`}
                  className="font-semibold text-[#496236] hover:underline"
                >
                  {company.emailPrimary}
                </a>
                <br />
                <a
                  href={`mailto:${company.emailSecondary}`}
                  className="font-semibold text-[#496236] hover:underline"
                >
                  {company.emailSecondary}
                </a>
              </p>
              <p>
                <strong className="block text-sm uppercase tracking-[0.12em] text-stone-500">
                  Based in
                </strong>
                {company.location}
              </p>
              <p>
                <strong className="block text-sm uppercase tracking-[0.12em] text-stone-500">
                  Facebook
                </strong>
                {company.facebook}
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href={company.phoneHref}>Call Douglas</ButtonLink>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
              Free quotation
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950">
              Helpful details to send
            </h2>
            <div className="mt-7 grid gap-3">
              {requestDetails.map((item, index) => (
                <div
                  key={item}
                  className="grid grid-cols-[44px_1fr] items-start gap-4 rounded-xl bg-[#f8f4ec] p-4"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#496236] text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium leading-6 text-stone-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-stone-200 pt-7">
              <h3 className="text-lg font-semibold text-stone-950">
                Services covered
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {serviceNavItems.map((service) => (
                  <a
                    key={service.href}
                    href={service.href}
                    className="rounded-md bg-[#efe4d2] px-3 py-2 text-xs font-semibold text-stone-700 transition hover:bg-[#d9c7a8]"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
