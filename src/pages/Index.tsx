import HeroSection from "@/components/HeroSection";
import StackSection from "@/components/StackSection";
import GallerySection from "@/components/GallerySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StackSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
};

export default Index;
