import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ServicesSection from "@/components/ServicesSection";
import WhySection from "@/components/WhySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <WhySection />
      <FooterSection />
    </div>
  );
};

export default Index;
