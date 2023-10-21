import AboutSection from "@/components/sections/About.section";
import HeroSection from "@/components/sections/Hero.section";

export default function PortfolioPage(): JSX.Element {
  return (
    <>
      <main className="pt-[85px] max-w-screen-xl mx-auto ">
        <HeroSection />
        <AboutSection />
      </main>
    </>
  );
}
