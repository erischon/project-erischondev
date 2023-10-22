import AboutSection from "@/components/sections/About.section";
import ContactSection from "@/components/sections/Contact.section";
import HeroSection from "@/components/sections/Hero.section";
import ProjectsSection from "@/components/sections/Projects.section";
import ProcessSection from "@/components/sections/Process.section";
import ServicesSection from "@/components/sections/Services.section";
import TestimonialsSection from "@/components/sections/Testimonials.section";

export default function PortfolioPage(): JSX.Element {
  return (
    <>
      <main className="pt-[85px] max-w-screen-lg mx-auto ">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ProcessSection />
        <ContactSection />
      </main>
    </>
  );
}
