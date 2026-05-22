import Image from "next/image";
import Link from "next/link";
import { currentProjects } from "@/app/data/site";

export function CurrentProjects() {
  return (
    <section className="relative overflow-hidden bg-[#f5eddf] px-5 py-14 sm:px-6 lg:px-8">
      <Image
        src="/images/project-board-garden.jpeg"
        alt=""
        fill
        className="object-cover opacity-10 blur-sm"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#6b6a3f]">
              Current projects & results
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
              A place to keep new work moving through the site.
            </h2>
          </div>
          <Link
            href="/videos"
            className="group inline-flex w-fit border-b-2 border-[#a9542f] pb-1 text-sm font-bold uppercase tracking-[0.12em] text-[#a9542f]"
          >
            View project gallery
            <span className="ml-2 transition group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr_1fr]">
          {currentProjects.map((project, index) => (
            <article
              key={project.title}
              className={`group overflow-hidden border border-stone-300 bg-[#fffaf0] shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                index === 0
                  ? "rounded-t-[5rem]"
                  : index === 2
                    ? "rounded-br-[5rem]"
                    : ""
              }`}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a9542f]">
                  {project.type}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-stone-950">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-700">
                  {project.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
