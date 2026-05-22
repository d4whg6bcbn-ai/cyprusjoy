import Image from "next/image";
import { whyChoose } from "@/app/data/site";

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-stone-900 px-5 py-24 text-white sm:px-6 lg:px-8">
      <Image
        src="/images/project-board-garden.jpeg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(42,57,33,.92),rgba(42,57,33,.76),rgba(42,57,33,.42))]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e8d8bd]">
            Why choose Cyprus Joy
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Local knowledge, practical advice and long-lasting work.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {whyChoose.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/20 bg-white/10 p-5 text-sm font-medium leading-6 text-stone-50 backdrop-blur"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
