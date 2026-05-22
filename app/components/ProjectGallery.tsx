import Image from "next/image";
import { ButtonLink } from "@/app/components/ButtonLink";
import { galleryItems } from "@/app/data/site";

export function ProjectGallery() {
  return (
    <section className="bg-[#f8f4ec] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
              Projects
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
              Project photos from landscaping, fencing, stonework and
              renovations.
            </h2>
          </div>
          <ButtonLink href="/videos" variant="text">
            View projects
          </ButtonLink>
        </div>
        <div className="mt-12 grid auto-rows-[220px] gap-5 md:grid-cols-6">
          {galleryItems.map((item, index) => (
            <figure
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl bg-stone-900 ${
                index === 0 || index === 5
                  ? "md:col-span-3 md:row-span-2"
                  : "md:col-span-3"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              <figcaption className="absolute bottom-5 left-5 rounded-md bg-white/95 px-4 py-2 text-sm font-semibold text-stone-950">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
