import Image from "next/image";
import { ButtonLink } from "@/app/components/ButtonLink";

export function IntroSplit() {
  return (
    <section className="bg-[#fbfaf7] px-5 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
            Practical local workmanship
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-stone-950 sm:text-5xl">
            Work planned around the property, the budget and how the space will
            be used.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-stone-900/10">
            <Image
              src="/images/project-board-terrace.jpeg"
              alt="Cyprus Joy exterior improvement project"
              width={1140}
              height={700}
              className="h-[440px] w-full object-cover"
            />
            <div className="absolute bottom-5 left-5 rounded-md bg-white/95 px-4 py-3 text-sm font-semibold text-stone-950 shadow-sm">
              Paphos region since 2003
            </div>
          </div>
          <div className="space-y-5 text-base leading-8 text-stone-700 md:pl-2">
            <p>
              Cyprus Joy takes a good look at each customer’s requirements,
              then recommends a practical, cost-effective solution using
              suitable materials and long-lasting workmanship.
            </p>
            <p>
              The company works across landscaping, renovation, artificial
              grass, fencing, tiling, painting, natural stone and exterior
              improvements in the Paphos region.
            </p>
            <ButtonLink href="/about" variant="text">
              Read more about Cyprus Joy
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
