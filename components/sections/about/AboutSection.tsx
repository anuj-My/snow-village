import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AboutFeatureRow } from "@/components/sections/about/AboutFeatureRow";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: "/icons/snowflake-icon-white.svg",
    text: "Real Snow, Ready for You.",
    penguin: true,
  },
  {
    icon: "/icons/temp-icon-white.svg",
    text: "Real indoor snow experience at -10°C",
  },
  {
    icon: "/icons/kids-icon-white.svg",
    text: "Fun for kids aged 3 and above",
  },
  {
    icon: "/icons/support-icon-white.svg",
    text: "Fully supervised environment",
  },
  {
    icon: "/icons/calender-icon-white.svg",
    text: "Open every day, 11 AM to 10 PM",
  },
  {
    icon: "/icons/location-icon-white.svg",
    text: "At Spectrum Mall Phase 2, Noida",
  },
];

export function AboutSection() {
  return (
    <section
      className="relative min-h-[880px] w-full overflow-hidden px-6 py-20 sm:px-10 lg:px-0 lg:py-0"
      id="about-us"
    >
      <Image
        src="/images/About.png"
        alt="about"
        fill
        priority
        className="object-cover object-top"
      />

      <ScrollReveal
        className="pointer-events-none relative z-[1] mx-auto w-[78%] max-w-[520px] select-none lg:absolute lg:left-0 lg:top-[16.8%] lg:w-[45.3%] lg:max-w-none"
        distance={42}
      >
        <Image
          className="h-auto w-full"
          src="/images/about-left.png"
          alt="Snow-covered village house"
          width={690}
          height={675}
        />
      </ScrollReveal>

      <ScrollReveal
        className="relative z-10 mx-auto mt-8 max-w-[560px] lg:absolute lg:left-[53.8%] lg:top-[11.2%] lg:mt-0 lg:w-[45%] lg:max-w-none xl:w-[36%]"
        delay={0.1}
      >
        <SectionEyebrow className="mb-4">Who We Are</SectionEyebrow>

        <SectionHeading
          as="h2"
          className="text-center text-[#001A45] lg:text-left"
          style={{
            WebkitTextStroke: "0.5px white",
            textShadow:
              "rgba(255, 255, 255, 0.25) 0px 0px 12px, rgba(255, 255, 255, 0.5) 0px 0px 24px, rgba(255, 255, 255, 0.6) 0px 0px 36px, rgba(0, 0, 0, 0.25) 5px 4px 4px",
          }}
        >
          Noida&apos;s Indoor Snow Park -
          <br />
          <span className="text-primary-active">Open All Year!</span>
        </SectionHeading>

        <ul className="mt-7 flex flex-col gap-[18px] lg:max-w-[94%]">
          {features.map((feature) => (
            <AboutFeatureRow key={feature.text} {...feature} />
          ))}
        </ul>

        <div className="mt-10 text-center lg:text-left">
          <PrimaryButton showArrow={false}>Explore Snow Village</PrimaryButton>
        </div>
      </ScrollReveal>

      <Image
        className="pointer-events-none absolute bottom-[-8px] right-0 z-20 hidden h-auto w-[21.7%] select-none lg:block"
        src="/images/penguins.png"
        alt="penguins"
        width={331}
        height={256}
      />
    </section>
  );
}
