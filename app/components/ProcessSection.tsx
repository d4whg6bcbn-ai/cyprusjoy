const steps = [
  "Visit & understand the property",
  "Recommend practical options",
  "Build with suitable materials",
  "Finish cleanly and professionally",
];

export function ProcessSection() {
  return (
    <section className="bg-[#efe4d2] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7d4e]">
            Process
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            From first visit to finished space.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step}
              className="rounded-2xl border border-stone-300 bg-[#fbf8f1] p-6"
            >
              <span className="text-sm font-semibold text-[#a9542f]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 text-xl font-semibold leading-7 text-stone-950">
                {step}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
