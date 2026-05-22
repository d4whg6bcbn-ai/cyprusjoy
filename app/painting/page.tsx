import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/app/components/ServicePageTemplate";
import { getService } from "@/app/data/site";

export default function PaintingPage() {
  const service = getService("painting");

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
