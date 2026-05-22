import { ServicePageTemplate } from "@/app/components/ServicePageTemplate";
import { getService } from "@/app/data/site";

export default function NaturalStonePage() {
  const service = getService("natural-stone");

  if (!service) return null;

  return <ServicePageTemplate service={service} />;
}
