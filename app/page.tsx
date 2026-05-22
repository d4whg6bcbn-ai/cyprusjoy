import { FeaturedServices } from "@/app/components/FeaturedServices";
import { HeroPhotoSection } from "@/app/components/HeroPhotoSection";
import { IntroSplit } from "@/app/components/IntroSplit";
import { PhotoCTA } from "@/app/components/PhotoCTA";
import { ProcessSection } from "@/app/components/ProcessSection";
import { ProjectGallery } from "@/app/components/ProjectGallery";
import { WhyChooseUs } from "@/app/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroPhotoSection />
      <IntroSplit />
      <FeaturedServices />
      <ProcessSection />
      <ProjectGallery />
      <WhyChooseUs />
      <PhotoCTA />
    </>
  );
}
