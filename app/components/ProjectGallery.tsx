import Image from "next/image";
import { ButtonLink } from "@/app/components/ButtonLink";
import { galleryItems } from "@/app/data/site";

export function ProjectGallery() {
  const spans = [
    "md:col-span-7 md:row-span-2",
    "md:col-span-5",
    "md:col-span-5 md:row-span-2",
    "md:col-span-4",
    "md:col-span-3",
    "md:col-span-7",
  ];

  return (
    <section className="bg-[#2f4025] px-5 py-28 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e8d8bd]">
              Projects
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              A portfolio view of gardens, surfaces, fencing and renovation
              work.
            </h2>
          </div>
          <ButtonLink href="/videos" variant="secondary">
            View projects
          </ButtonLink>
        </div>
        <div className="mt-14 grid auto-rows-[230px] gap-5 md:grid-cols-12">
          {galleryItems.map((item, index) => (
            <figure
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl bg-stone-900 shadow-2xl shadow-stone-950/20 ${
                spans[index] ?? "md:col-span-4"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/78 via-stone-950/10 to-transparent" />
              <figcaption className="absolute bottom-5 left-5 rounded-md bg-white/95 px-4 py-2 text-sm font-semibold text-stone-950 shadow-sm">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
