import Image from "next/image";
import Link from "next/link";
import { company, serviceNavItems } from "@/app/data/site";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/videos" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#fbfaf7] shadow-sm shadow-stone-900/5">
      <div className="bg-[#2f4025] px-5 py-2 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white sm:text-[13px]">
        Serving Paphos since 2003 · Free quotations ·{" "}
        <a href={company.phoneHref} className="underline-offset-4 hover:underline">
          {company.phoneDisplay}
        </a>
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 bg-[#fbfaf7] px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-4">
          <Image
            src="/images/cyprus-joy-logo.jpg"
            alt="Cyprus Joy logo"
            width={116}
            height={56}
            priority
            className="h-14 w-auto object-contain mix-blend-multiply"
          />
          <span className="hidden min-w-0 sm:block">
            <span className="block text-lg font-semibold leading-5 text-stone-950">
              {company.name}
            </span>
            <span className="block truncate text-xs font-medium text-stone-600">
              Building and Landscaping
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) =>
            item.label === "Services" ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-stone-700 hover:text-[#496236]"
                >
                  Services
                </Link>
                <div className="invisible absolute left-1/2 top-full w-[760px] -translate-x-1/2 pt-5 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="grid grid-cols-[0.78fr_1.22fr] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl shadow-stone-900/15">
                    <div className="relative min-h-[330px] bg-stone-900 p-7 text-white">
                      <Image
                        src="/images/garden-landscaping.jpg"
                        alt=""
                        fill
                        className="object-cover opacity-42"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                      <div className="relative">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e8d8bd]">
                          Cyprus Joy services
                        </p>
                        <p className="mt-4 text-2xl font-semibold leading-8">
                          Landscaping, renovation and outdoor improvement work.
                        </p>
                        <Link
                          href="/services"
                          className="mt-6 inline-flex border-b border-white pb-1 text-sm font-semibold"
                        >
                          Open services →
                        </Link>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
                        Browse services
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-1">
                        {serviceNavItems.map((service) => (
                          <Link
                            key={`${service.title}-${service.href}`}
                            href={service.href}
                            className="rounded-lg px-3 py-2.5 text-sm font-semibold text-stone-700 hover:bg-[#f8f4ec] hover:text-[#496236]"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-stone-700 hover:text-[#496236]"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        <Link
          href="/contact"
          className="hidden rounded-md bg-[#496236] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3b502b] sm:inline-flex"
        >
          Free Quotation
        </Link>

        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-900">
            Menu
          </summary>
          <div className="absolute right-0 top-full mt-3 max-h-[75vh] w-80 overflow-y-auto rounded-2xl border border-stone-200 bg-white p-4 shadow-2xl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-3 text-sm font-semibold text-stone-800 hover:bg-[#f8f4ec]"
              >
                {item.label}
              </Link>
            ))}
            <details className="mt-2 rounded-xl bg-[#f8f4ec] p-2" open>
              <summary className="cursor-pointer list-none px-3 py-2 text-sm font-semibold text-stone-900">
                Services
              </summary>
              <div className="mt-1 grid gap-1">
                {serviceNavItems.map((service) => (
                  <Link
                    key={`${service.title}-${service.href}`}
                    href={service.href}
                    className="block rounded-lg px-3 py-2 text-sm text-stone-700 hover:bg-white"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </details>
      </nav>
    </header>
  );
}
