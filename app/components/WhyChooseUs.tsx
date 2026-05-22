import Image from "next/image";
import { whyChoose } from "@/app/data/site";

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-stone-900 px-5 py-28 text-white sm:px-6 lg:px-8">
      <Image
        src="/images/project-board-garden.jpeg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,25,23,.9),rgba(42,57,33,.78),rgba(42,57,33,.36))]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e8d8bd]">
            Why choose Cyprus Joy
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Local knowledge, practical advice and long-lasting work.
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone-100">
            Cyprus Joy keeps the work clear: understand the property, recommend
            the right materials, and build a finish that suits the space and the
            budget.
          </p>
        </div>
        <div className="grid gap-3 rounded-2xl border border-white/15 bg-stone-950/22 p-5 backdrop-blur sm:grid-cols-2">
          {whyChoose.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/15 bg-white/10 p-5 text-sm font-semibold leading-6 text-stone-50"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
