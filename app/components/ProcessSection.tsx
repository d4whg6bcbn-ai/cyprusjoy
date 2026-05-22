import { processSteps } from "@/app/data/site";

export function ProcessSection() {
  return (
    <section className="bg-[#fbfaf7] px-5 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
            Process
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            From first visit to finished space.
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.label}
              className="relative border-t border-stone-300 pt-7"
            >
              {index < processSteps.length - 1 ? (
                <span className="absolute left-12 top-0 hidden h-px w-[calc(100%+2rem)] bg-stone-300 md:block" />
              ) : null}
              <span className="text-6xl font-semibold leading-none tracking-tight text-[#c86b43]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
                {step.label}
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-7 text-stone-950">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
