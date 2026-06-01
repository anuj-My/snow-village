import { AboutSection } from "@/components/sections/about/AboutSection";
import { ExperienceSection } from "@/components/sections/experience/ExperienceSection";
import { FAQSection } from "@/components/sections/faq/FAQSection";
import { FooterSection } from "@/components/sections/footer/FooterSection";
import { FreshSnowSection } from "@/components/sections/fresh-snow/FreshSnowSection";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { ReviewSection } from "@/components/sections/review/ReviewSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-body">
      <HeroSection />
      <AboutSection />
      <ReviewSection />
      <FreshSnowSection />
      <ExperienceSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
