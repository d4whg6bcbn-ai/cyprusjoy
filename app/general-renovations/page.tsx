import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/app/components/ServicePageTemplate";
import { getService } from "@/app/data/site";

export default function GeneralRenovationsPage() {
  const service = getService("general-renovations");

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
