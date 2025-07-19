import HeroSection from "@/components/hero-section";
import Features from "@/components/features-1";
import ContentSection from "@/components/content-1";
import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";
import ContactSection from "@/components/Contact";
import ProjectsShowcase from "@/components/projects-showcase";
import StatsSection from "@/components/stats-section";
import ImageGallery from "@/components/image-gallery";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <ProjectsShowcase />
      <StatsSection />
      <ImageGallery />
      <FooterSection />
    </>
  );
}
