import Image from "next/image";
import { ButtonLink } from "@/app/components/ButtonLink";

export function IntroSplit() {
  return (
    <section className="bg-[#f8f4ec] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
            Practical local workmanship
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-stone-950 sm:text-5xl">
            Work planned around the property, the budget and how the space will
            be used.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="overflow-hidden rounded-2xl shadow-xl shadow-stone-900/10">
            <Image
              src="/images/project-board-terrace.jpeg"
              alt="Cyprus Joy exterior improvement project"
              width={1140}
              height={700}
              className="h-80 w-full object-cover"
            />
          </div>
          <div className="space-y-5 text-base leading-8 text-stone-700">
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
