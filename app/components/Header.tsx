import Link from "next/link";
import Image from "next/image";
import { company, services } from "@/app/data/site";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Videos / Projects", href: "/videos" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="bg-[#3f5132] px-5 py-2 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white sm:px-6">
        Serving Paphos since 2003 · Free quotations ·{" "}
        <a href={company.phoneHref} className="underline-offset-4 hover:underline">
          Call {company.phoneDisplay}
        </a>
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-4">
          <Image
            src="/images/cyprus-joy-logo.jpg"
            alt="Cyprus Joy logo"
            width={116}
            height={56}
            priority
            className="h-14 w-auto object-contain"
          />
          <span className="min-w-0">
            <span className="block text-lg font-semibold leading-5 text-stone-950">
              {company.name}
            </span>
            <span className="block truncate text-xs font-medium text-stone-600">
              Building and Landscaping
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <Link
            href="/"
            className="text-sm font-medium text-stone-700 hover:text-green-900"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-stone-700 hover:text-green-900"
          >
            About
          </Link>
          <Link
            href="/garden-landscaping"
            className="text-sm font-medium text-stone-700 hover:text-green-900"
          >
            Services
          </Link>
          <Link
            href="/videos"
            className="text-sm font-medium text-stone-700 hover:text-green-900"
          >
            Videos / Projects
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-stone-700 hover:text-green-900"
          >
            Contact
          </Link>
        </div>

        <Link
          href="/contact"
          className="hidden bg-[#a9542f] px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[5px_5px_0_#d7c3a5] transition hover:-translate-y-0.5 sm:inline-flex"
        >
          Free Quotation
        </Link>

        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-900">
            Menu
          </summary>
          <div className="absolute right-0 top-full mt-3 w-72 rounded-lg border border-stone-200 bg-white p-3 shadow-xl">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 border-t border-stone-200" />
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="block rounded-md px-3 py-2 text-sm text-stone-700 hover:bg-stone-50"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </details>
      </nav>
      <div className="hidden border-t border-stone-200 bg-[#f7f1e7] px-5 py-2 lg:block">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="shrink-0 border border-stone-300 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-stone-700 transition hover:border-[#a9542f] hover:text-[#a9542f]"
            >
              {service.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
