import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "text";
  className?: string;
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const styles = {
    primary:
      "inline-flex items-center justify-center rounded-md bg-[#496236] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(47,64,37,0.18)] transition hover:-translate-y-0.5 hover:bg-[#3b502b] hover:shadow-[0_18px_36px_rgba(47,64,37,0.24)]",
    secondary:
      "group inline-flex items-center justify-center rounded-md border border-current px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/10",
    text:
      "group inline-flex items-center border-b border-current pb-1 text-sm font-semibold transition hover:text-[#a9542f]",
  };

  return (
    <Link href={href} className={`${styles[variant]} ${className}`}>
      {children}
      {variant !== "primary" ? (
        <span className="ml-2 transition group-hover:translate-x-1">→</span>
      ) : null}
    </Link>
  );
}
