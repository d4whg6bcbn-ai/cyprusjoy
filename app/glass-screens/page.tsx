import { ServicePageTemplate } from "@/app/components/ServicePageTemplate";
import { getService } from "@/app/data/site";

export default function GlassScreensPage() {
  const service = getService("glass-screens");

  if (!service) return null;

  return <ServicePageTemplate service={service} />;
}
