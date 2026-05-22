import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/app/components/ServicePageTemplate";
import { getService } from "@/app/data/site";

export default function ExteriorRenovationsPage() {
  const service = getService("exterior-renovations");

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
