import Image from "next/image";
import { ButtonLink } from "@/app/components/ButtonLink";

export function PhotoCTA() {
  return (
    <section className="relative overflow-hidden bg-stone-900 px-5 py-24 text-white sm:px-6 lg:px-8">
      <Image
        src="/images/aluminium-fencing.jpg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,25,23,.88),rgba(73,98,54,.72),rgba(28,25,23,.26))]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Planning a garden, renovation or outdoor upgrade?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-100">
            Tell us what you need and Cyprus Joy will provide a practical
            recommendation and free quotation.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact">Contact Cyprus Joy</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
