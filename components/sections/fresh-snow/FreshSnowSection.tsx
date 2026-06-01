import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const flakes = [
  "left-[2.1%] top-[29%] w-[2.15rem]",
  "left-[4.4%] bottom-[24%] w-[1.45rem]",
  "right-[7.6%] top-[2%] w-[2.9rem]",
  "right-[1.1%] top-[31%] w-[2.5rem]",
  "right-[1.7%] bottom-[21%] w-[1.55rem]",
];

export function FreshSnowSection() {
  return (
    <section className="relative mt-[-102px] min-h-[713px] w-full overflow-hidden px-6 sm:px-10 lg:mt-[-53px]">
      <Image
        src="/images/fresh%20snow%20background.png"
        alt="about"
        fill
        priority
        className="object-cover object-top"
      />

      <ScrollReveal
        className="relative z-10 mx-auto flex min-h-[calc(713px-7rem)] w-full max-w-[1368px] flex-col items-center justify-center gap-8 py-14 lg:min-h-[713px] lg:flex-row lg:items-center lg:justify-start lg:gap-16 lg:py-0"
        stagger={0.14}
      >
        <Image
          className="h-auto w-full max-w-[531px] shrink select-none lg:flex-[0_1_531px]"
          src="/images/fresh-snow-left.png"
          alt="Fresh snow machine blowing snow indoors"
          width={531}
          height={595}
        />

        <div className="relative z-10 w-full max-w-[707px] rounded-[20px] bg-primary px-8 py-8 text-center shadow-[0_13px_16px_rgba(0,26,69,0.32)] sm:px-12 lg:flex-[0_1_707px] lg:px-[2.75rem] lg:py-[2.8rem]">
          {flakes.map((className) => (
            <Image
              className={`pointer-events-none absolute h-auto select-none ${className}`}
              src="/icons/snow-image.svg"
              alt="snow flake icon"
              width={44}
              height={44}
              key={className}
            />
          ))}
          <p className="relative z-10 text-[24px] font-body-semibold leading-[1.42] text-white sm:text-[30px] lg:text-[2rem] lg:leading-[1.35]">
            Not Old. Not Stored.{" "}
            <span className="font-heading text-[32px] font-normal text-primary-active sm:text-[40px] lg:text-[2.25rem]">
              Just Fresh Snow.
            </span>
            <br /> Walk In.
            <span className="font-heading text-[32px] font-normal text-primary-active sm:text-[40px] lg:text-[2.25rem]">
              Feel Winter.
            </span>
            Walk Out Grinning.
          </p>
        </div>
      </ScrollReveal>

      <Image
        className="pointer-events-none absolute bottom-0 left-0 z-20 hidden h-auto w-auto select-none lg:block"
        src="/images/freshSnow.png"
        alt="snow"
        width={632}
        height={200}
      />

      <Image
        className="pointer-events-none absolute bottom-0 right-0 z-20 hidden h-auto w-[20.5%] select-none lg:block"
        src="/images/bear.png"
        alt="bear"
        width={632}
        height={720}
      />
    </section>
  );
}
