import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/app/components/ServicePageTemplate";
import { getService } from "@/app/data/site";

export default function OtherServicesPage() {
  const service = getService("other-services");

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
