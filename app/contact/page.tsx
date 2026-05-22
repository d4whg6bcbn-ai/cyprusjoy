import { CTASection } from "@/app/components/CTASection";
import { company, services } from "@/app/data/site";

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f5eddf] px-5 py-14 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(90deg,rgba(67,83,52,.14)_1px,transparent_1px),linear-gradient(rgba(67,83,52,.1)_1px,transparent_1px)] [background-size:46px_46px]" />
        <div className="relative mx-auto max-w-4xl">
          <p className="inline-flex rotate-[-2deg] bg-[#c86b43] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
            Contact Us
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-none text-stone-950 sm:text-6xl">
            Contact Cyprus Joy for a free quotation.
          </h1>
          <p className="mt-5 text-lg leading-8 text-stone-700">
            For a free no obligation quote, call Douglas or email Cyprus Joy
            with details of the work required.
          </p>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-t-[5rem] border border-stone-300 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-950">
              Contact details
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-stone-700">
              <p>
                <strong className="text-stone-950">Douglas:</strong>{" "}
                <a href={company.phoneHref} className="text-green-800">
                  {company.phoneDisplay}
                </a>
              </p>
              <p>
                <strong className="text-stone-950">Email:</strong>{" "}
                <a
                  href={`mailto:${company.emailSecondary}`}
                  className="text-green-800"
                >
                  {company.emailSecondary}
                </a>{" "}
                /{" "}
                <a
                  href={`mailto:${company.emailPrimary}`}
                  className="text-green-800"
                >
                  {company.emailPrimary}
                </a>
              </p>
              <p>
                <strong className="text-stone-950">Based in:</strong>{" "}
                {company.location}
              </p>
              <p>
                <strong className="text-stone-950">Facebook:</strong>{" "}
                {company.facebook}
              </p>
            </div>
          </div>

          <div className="rounded-br-[5rem] border border-stone-300 bg-[#e7dcc8] p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-950">
              What do you need help with?
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.slug}
                  className="bg-[#fffaf0] px-4 py-3 text-sm font-medium text-stone-800"
                >
                  {service.title}
                </div>
              ))}
              <div className="bg-[#fffaf0] px-4 py-3 text-sm font-medium text-stone-800">
                Glass Screens
              </div>
              <div className="bg-[#fffaf0] px-4 py-3 text-sm font-medium text-stone-800">
                Tiling and Natural Stone
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-stone-600">
              This rebuild uses direct phone and email contact for now. A form
              can be added later if required.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
