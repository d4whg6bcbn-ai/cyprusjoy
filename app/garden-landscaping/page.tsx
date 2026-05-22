import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/app/components/ServicePageTemplate";
import { getService } from "@/app/data/site";

export default function GardenLandscapingPage() {
  const service = getService("garden-landscaping");

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
