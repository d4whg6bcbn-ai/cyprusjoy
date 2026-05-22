import { processSteps } from "@/app/data/site";

export function ProcessBoard() {
  return (
    <section className="relative overflow-hidden bg-[#e7dcc8] px-5 py-14 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-8 bg-[#fffaf0] [clip-path:polygon(0_0,100%_0,100%_35%,0_100%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#6b6a3f]">
              From garden to finished space
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
              A practical process, drawn from the property itself.
            </h2>
          </div>
          <div className="relative grid gap-5 sm:grid-cols-2">
            <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-[#a9542f]/40 sm:block" />
            {processSteps.map((step, index) => (
              <article
                key={step.label}
                className={`relative border border-stone-300 bg-[#fffaf0] p-5 shadow-sm ${
                  index % 2 === 0 ? "sm:translate-y-8" : ""
                }`}
              >
                <span className="inline-flex bg-[#a9542f] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
                  {step.label}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-stone-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-700">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
