import HeroSection from "@/components/hero-section";
import Features from "@/components/features-1";
import FooterSection from "@/components/footer";
import ProjectsShowcase from "@/components/projects-showcase";
import StatsSection from "@/components/stats-section";
import ImageGallery from "@/components/image-gallery";
import ContactSection from "@/components/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <ProjectsShowcase />
      <StatsSection />
      <ImageGallery />
      <ContactSection />
      <FooterSection />
    </>
  );
}
