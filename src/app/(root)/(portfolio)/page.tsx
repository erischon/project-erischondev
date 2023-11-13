import AboutSection from "@/components/portfolio/sections/About.section";
import ContactSection from "@/components/portfolio/sections/Contact.section";
import HeroSection from "@/components/portfolio/sections/Hero.section";
import ProjectsSection from "@/components/portfolio/sections/Projects.section";
import ProcessSection from "@/components/portfolio/sections/Process.section";
import ServicesSection from "@/components/portfolio/sections/Services.section";
import TestimonialsSection from "@/components/portfolio/sections/Testimonials.section";

export default function PortfolioPage(): JSX.Element {
  return (
    <>
      <main className="pt-[85px] max-w-screen-lg mx-auto ">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </>
  );
}
