import Link from "next/link";
import { serviceTileMap } from "@/app/data/site";

const toneClasses: Record<string, string> = {
  "bg-olive": "bg-[#3f5132] text-white",
  "bg-sage": "bg-[#d8e0c6] text-stone-950",
  "bg-stone": "bg-[#d7d1c6] text-stone-950",
  "bg-clay": "bg-[#c86b43] text-white",
  "bg-paper": "bg-[#fffaf0] text-stone-950",
  "bg-limestone": "bg-[#e6d6bd] text-stone-950",
};

export function ServiceTileMap() {
  return (
    <section id="services" className="bg-[#fffaf0] px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#6b6a3f]">
            What we shape
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
            Materials, spaces and work areas.
          </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-stone-600">
            A compact service board for the main Cyprus Joy work: gardens,
            renovation, fencing, grass, stone, tiling and finishing.
          </p>
        </div>

        <div className="mt-8 grid auto-rows-[minmax(118px,auto)] gap-3 md:grid-cols-6">
          {serviceTileMap.map((service, index) => (
            <Link
              key={`${service.title}-${index}`}
              href={`/${service.slug}`}
              className={`group relative overflow-hidden border border-stone-300 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                toneClasses[service.tone]
              } ${
                index === 0
                  ? "md:col-span-3 md:row-span-2 rounded-t-[4rem]"
                  : index === 1
                    ? "md:col-span-2 rounded-[2rem]"
                    : index === 2
                      ? "md:col-span-1 md:row-span-2"
                      : index === 3
                        ? "md:col-span-2"
                        : index === 8
                          ? "md:col-span-2 rounded-br-[4rem]"
                          : "md:col-span-2"
              }`}
            >
              <span className="absolute right-4 top-4 text-xs font-bold opacity-50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="max-w-xs text-xl font-semibold leading-6">
                {service.title}
              </h3>
              <p className="mt-3 max-w-sm text-xs leading-5 opacity-85">
                {service.note}
              </p>
              <span className="mt-4 inline-flex border-b border-current pb-1 text-[11px] font-bold uppercase tracking-[0.14em]">
                Open service
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
