import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/app/components/ServicePageTemplate";
import { getService } from "@/app/data/site";

export default function AluminiumFencingPage() {
  const service = getService("aluminium-fencing");

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
