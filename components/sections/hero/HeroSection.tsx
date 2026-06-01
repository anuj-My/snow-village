import { Header } from "@/components/layout/Header";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HeroStat } from "@/components/sections/hero/HeroStat";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

const stats = [
  {
    iconSrc: "/icons/icon1.svg",
    title: "Fresh Snow",
    description: "Real snow, made fresh",
    widthClass: "md:w-[150px]",
  },
  {
    iconSrc: "/icons/icon2.svg",
    title: "Fun for Everyone",
    description: "Kids from 3 years, teens, adults all welcome",
    widthClass: "md:w-[240px]",
  },
  {
    iconSrc: "/icons/icon3.svg",
    title: "It's -10°C Inside",
    description: "A real winter experience, 365 days a year",
    widthClass: "md:w-[250px]",
  },
];

export function HeroSection() {
  return (
    <section className="relative aspect-[1523/1024] min-h-[760px] w-full overflow-hidden">
      <Image
        src="/images/heroBg.png"
        alt="banner"
        fill
        priority
        className="object-cover object-top z-0"
      />
      <Header />

      <ScrollReveal
        className="absolute left-[5.2%] right-[5.2%] top-[19%] max-w-[710px] sm:right-auto sm:top-[27%] md:w-[58%] lg:top-[28.8%] lg:w-[48%]"
        delay={0.1}
        start="top 90%"
      >
        <SectionHeading
          as="h1"
          className="max-w-[690px] text-[#001A45]"
          style={{
            WebkitTextStroke: "0.5px white",
            textShadow:
              "rgba(255, 255, 255, 0.25) 0px 0px 12px, rgba(255, 255, 255, 0.5) 0px 0px 24px, rgba(255, 255, 255, 0.6) 0px 0px 36px, rgba(0, 0, 0, 0.25) 5px 4px 4px",
          }}
        >
          Noida&apos;s <span className="text-primary-active">Coolest Spot</span>
          <br />
          Literally!
        </SectionHeading>

        <p className="mt-4 max-w-[690px] text-[16px] leading-[1.35] text-primary max-[638px]:!text-sm sm:mt-5 sm:text-[18px] md:text-[20px] md:leading-[1.24]">
          Fresh snow, -10°C, multiple activities, and a whole lot of fun all
          waiting for you right at{" "}
          <strong className="font-body-semibold text-primary-active">
            Spectrum Phase 2, Noida.
          </strong>
        </p>

        <div className="mt-5 grid max-w-[680px] grid-cols-1 items-start gap-3 min-[520px]:grid-cols-3 sm:mt-7 sm:flex sm:gap-0 lg:mt-8">
          {stats.map((stat, index) => (
            <div className="flex items-start justify-center" key={stat.title}>
              {index > 0 ? (
                <span className="mx-4 mt-[7px] hidden h-[112px] w-px bg-primary/20 sm:block lg:mx-7 lg:h-[126px]" />
              ) : null}
              <HeroStat {...stat} />
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-9 text-center min-[520px]:text-left">
          <PrimaryButton>Explore Snow Village</PrimaryButton>
        </div>
      </ScrollReveal>
    </section>
  );
}
