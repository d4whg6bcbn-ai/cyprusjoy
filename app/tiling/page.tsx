import { ServicePageTemplate } from "@/app/components/ServicePageTemplate";
import { getService } from "@/app/data/site";

export default function TilingPage() {
  const service = getService("tiling");

  if (!service) return null;

  return <ServicePageTemplate service={service} />;
}
