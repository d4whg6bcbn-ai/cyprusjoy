import { CTASection } from "@/app/components/CTASection";
import { ProjectCollage } from "@/app/components/ProjectCollage";
import { videos } from "@/app/data/site";

export default function VideosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f5eddf] px-5 py-14 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(90deg,rgba(67,83,52,.14)_1px,transparent_1px),linear-gradient(rgba(67,83,52,.1)_1px,transparent_1px)] [background-size:46px_46px]" />
        <div className="relative mx-auto max-w-4xl">
          <p className="inline-flex rotate-[-2deg] bg-[#c86b43] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
            Videos / Projects Gallery
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-none text-stone-950 sm:text-6xl">
            Cyprus Joy project videos and photos
          </h1>
          <p className="mt-5 text-lg leading-8 text-stone-700">
            A place for project videos, before and after images, landscaping
            work, aluminium fencing, artificial grass and renovation examples.
          </p>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-12">
            {videos.map((video, index) => (
              <article
                key={video.embed}
                className={`overflow-hidden border border-stone-300 bg-white shadow-sm ${
                  index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5"
                } ${index === 0 ? "rounded-t-[5rem]" : ""} ${
                  index === 3 ? "rounded-br-[5rem]" : ""
                }`}
              >
                <div className="aspect-video">
                  <iframe
                    src={video.embed}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-base font-semibold text-stone-950">
                    {video.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProjectCollage />
      <CTASection />
    </>
  );
}
