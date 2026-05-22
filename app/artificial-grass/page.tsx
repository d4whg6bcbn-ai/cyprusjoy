import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/app/components/ServicePageTemplate";
import { getService } from "@/app/data/site";

export default function ArtificialGrassPage() {
  const service = getService("artificial-grass");

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
