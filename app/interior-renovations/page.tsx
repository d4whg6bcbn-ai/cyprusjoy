import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/app/components/ServicePageTemplate";
import { getService } from "@/app/data/site";

export default function InteriorRenovationsPage() {
  const service = getService("interior-renovations");

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
