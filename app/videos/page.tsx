import Image from "next/image";
import { ButtonLink } from "@/app/components/ButtonLink";
import { PhotoCTA } from "@/app/components/PhotoCTA";
import { ProjectGallery } from "@/app/components/ProjectGallery";
import { currentProjects, videos } from "@/app/data/site";

export default function VideosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-stone-900 px-5 py-24 text-white sm:px-6 lg:px-8">
        <Image
          src="/images/project-board-garden.jpeg"
          alt="Cyprus Joy garden landscaping project"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,25,23,.9),rgba(47,64,37,.76),rgba(28,25,23,.25))]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e8d8bd]">
              Videos / Projects
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
              Project videos, current work and finished results.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100">
              A focused place to add Cyprus Joy project updates, before and
              after images, landscaping work, aluminium fencing, artificial
              grass and renovation examples.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f4ec] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
                Video gallery
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
                Work examples from landscaping, fencing and outdoor
                improvements.
              </h2>
            </div>
            <ButtonLink href="/contact" variant="secondary" className="text-stone-900">
              Ask for a Quote
            </ButtonLink>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            {videos.map((video, index) => (
              <article
                key={video.embed}
                className={`overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm ${
                  index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5"
                }`}
              >
                <div className="aspect-video bg-stone-900">
                  <iframe
                    src={video.embed}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-stone-950">
                    {video.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
              Current projects
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
              A simple project journal for new work and results.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {currentProjects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-stone-200 bg-[#f8f4ec] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
                    {project.type}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-stone-950">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-stone-700">
                    {project.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProjectGallery />
      <PhotoCTA />
    </>
  );
}
