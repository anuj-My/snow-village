import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ExperienceCard } from "@/components/sections/experience/ExperienceCard";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";

const cards = [
  {
    snow: "/images/snowfall1.png",
    icon: "/icons/snowflake-icon-white.svg",
    title: "Real snowfall",
    text: "watch actual snow fall around you indoors",
  },
  {
    snow: "/images/snowfall2.png",
    icon: "/icons/icon4.svg",
    title: "Multiple activities",
    text: "in one 45-minute session",
  },
  {
    snow: "/images/snowfall3.png",
    icon: "/icons/icon5.svg",
    title: "Great for ages 3",
    text: "and above fun for the whole family",
  },
];

export function ExperienceSection() {
  return (
    <section
      className="relative min-h-[780px] w-full overflow-hidden bg-[linear-gradient(180deg,#F7FEFF_0%,#EAFDFF_46%,#D8F7FF_100%)] px-6 py-16 sm:px-10 lg:aspect-[1523/782] lg:px-0 lg:py-0"
      id="activities"
    >
      <Image
        className="object-cover object-top z-0"
        src="/images/Experience.png"
        alt=""
        fill
        sizes="100vw"
      />

      <div className="relative z-10 mx-auto flex max-w-[1052px] flex-col items-center rounded-[34px] bg-[#effdff]/78 px-6 pb-12 sm:pb-44 pt-8 text-center backdrop-blur-[2px] sm:px-12 lg:absolute lg:left-1/2 lg:top-[10%] xl:top-[16.4%] lg:w-[90%] lg:h-[58%] xl:w-[69.1%] lg:-translate-x-1/2 lg:px-16 lg:pb-0 lg:pt-8">
        <Image
          src="/images/snow-image1.png"
          alt=""
          width={55}
          height={31}
          aria-hidden="true"
          className="pointer-events-none absolute w-full max-w-[60px] left-[-10px] top-0 z-20 -translate-y-[40%]"
        />

        <Image
          src="/images/snow-image3.png"
          alt=""
          width={282}
          height={37}
          aria-hidden="true"
          className="pointer-events-none absolute left-[7%] top-0 z-20 h-auto w-auto -translate-y-[40%]"
        />

        <Image
          src="/images/snow-image3.png"
          alt=""
          width={282}
          height={37}
          aria-hidden="true"
          className="pointer-events-none absolute right-[7%] top-0 z-20 h-auto w-auto -translate-y-[40%]"
        />

        <Image
          src="/images/snow-image2.png"
          alt=""
          width={79}
          height={46}
          aria-hidden="true"
          className="pointer-events-none absolute w-full max-w-[89px] right-[-22px] top-[7px] z-20 -translate-y-[40%]"
        />

        <ScrollReveal className="mx-auto w-full">
          <SectionEyebrow className="mb-4">The Experience</SectionEyebrow>
          <SectionHeading
            as="h2"
            className="text-[#001A45] [filter:drop-shadow(2px_2px_0_rgba(0,0,0,0.12))]"
          >
            One Hour of Pure Snow
            <br />
            <span className="text-primary-active">Fun!</span>
          </SectionHeading>
          <p className="mx-auto mt-6 text-[16px] leading-[1.42] text-primary-70">
            From the moment you walk into -10°C air with fresh snow underfoot,
            every minute inside Snow Village is packed with fun. Race down snow
            slides, launch snowballs, build a snowman, watch real snowfall, and
            snap photos that look like you actually went to the mountains all in
            a single 45-minute session.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal
        className="relative z-20 mx-auto mt-13 grid max-w-[927px] gap-10 sm:-mt-36 sm:grid-cols-3 sm:gap-[5%] lg:absolute lg:left-[8%] lg:right-[8%] lg:top-[58%] lg:mt-0 lg:max-w-none xl:left-[19.6%] xl:right-[19.6%] xl:top-[64%] xl:gap-[11%]"
        stagger={0.12}
      >
        {cards.map((card) => (
          <ExperienceCard key={card.title} {...card} />
        ))}
      </ScrollReveal>
    </section>
  );
}
