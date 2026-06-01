import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FAQAccordion } from "@/components/sections/faq/FAQAccordion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

export function FAQSection() {
  return (
    <section className="relative min-h-[614px] w-full overflow-hidden bg-[#f7feff] px-6 pb-10 pt-10 sm:px-10 lg:px-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[150px] bg-[linear-gradient(180deg,rgba(238,253,255,0.96)_0%,rgba(247,254,255,0.78)_64%,rgba(247,254,255,0)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-[72px] bottom-0 z-[1]"
      >
        <Image
          src="/images/FAQ.png"
          alt="faq"
          fill
          priority
          className="object-cover object-top"
        />
      </div>

      <ScrollReveal className="relative z-10 mx-auto text-center">
        <SectionEyebrow className="mb-3">
          Frequently Asked Questions
        </SectionEyebrow>
        <SectionHeading
          as="h2"
          className="text-[#001A45] [filter:drop-shadow(2px_2px_0_rgba(0,0,0,0.12))]"
        >
          Quick Answers -{" "}
          <span className="text-primary-active">Before You Visit</span>
        </SectionHeading>
        <p className="mx-auto mt-3 max-w-[850px] text-[16px] leading-[1.45] text-primary-70 sm:text-[21px]">
          Everything you need to know, answered fast. More questions? Visit
          snowvillage.in.
        </p>
      </ScrollReveal>

      <ScrollReveal className="relative z-10 mt-10 sm:mt-11" delay={0.08}>
        <FAQAccordion />
      </ScrollReveal>
    </section>
  );
}
