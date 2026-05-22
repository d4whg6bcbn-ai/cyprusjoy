type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export function SectionHeader({ eyebrow, title, text }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-green-800">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-8 text-stone-600 sm:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}
