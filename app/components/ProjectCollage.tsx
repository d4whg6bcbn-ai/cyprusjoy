import Image from "next/image";
import { galleryItems } from "@/app/data/site";

export function ProjectCollage() {
  return (
    <section className="bg-[#fffaf0] px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#6b6a3f]">
              Project moments
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
              Real work, collected like photos on a site board.
            </h2>
          </div>
          <a
            href="/videos"
            className="group inline-flex w-fit border-b-2 border-[#a9542f] pb-1 text-sm font-bold uppercase tracking-[0.12em] text-[#a9542f]"
          >
            View videos / projects
            <span className="ml-2 transition group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="mt-8 grid auto-rows-[160px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12">
          {galleryItems.map((item, index) => (
            <figure
              key={item.title}
              className={`group relative overflow-hidden bg-stone-200 shadow-sm ${
                item.span
              } ${
                index === 0
                  ? "rounded-t-[6rem]"
                  : index === 2
                    ? "rounded-br-[5rem]"
                    : index === 4
                      ? "rounded-[2rem]"
                      : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw"
              />
              <figcaption className="absolute bottom-3 left-3 bg-[#fffaf0] px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-stone-800 shadow-sm">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
