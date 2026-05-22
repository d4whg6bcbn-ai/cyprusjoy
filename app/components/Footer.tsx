import Link from "next/link";
import { allServices, company } from "@/app/data/site";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#1c2118] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.05fr_1.2fr_0.95fr] lg:px-8">
        <div className="max-w-md">
          <p className="text-xl font-semibold">{company.fullName}</p>
          <p className="mt-3 text-sm leading-7 text-stone-300">
            {company.location}. Serving the Paphos region since{" "}
            {company.established} with landscaping, renovations, artificial
            grass, fencing and building services.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-100"
          >
            Request a Free Quotation
          </Link>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-400">
            Services
          </p>
          <div className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {allServices.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="text-sm text-stone-300 hover:text-white"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-400">
            Contact
          </p>
          <div className="mt-4 space-y-2 text-sm text-stone-300">
            <p>{company.location}</p>
            <a href={company.phoneHref} className="block hover:text-white">
              Douglas: {company.phoneDisplay}
            </a>
            <a
              href={`mailto:${company.emailPrimary}`}
              className="block hover:text-white"
            >
              {company.emailPrimary}
            </a>
            <a
              href={`mailto:${company.emailSecondary}`}
              className="block hover:text-white"
            >
              {company.emailSecondary}
            </a>
            <p>Facebook: {company.facebook}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-stone-500">
        © 2003 - 2026 {company.fullName}. All rights reserved.
      </div>
    </footer>
  );
}
