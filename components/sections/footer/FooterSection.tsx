import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

const quickLinks = ["Home", "About us", "Gallery", "Activities"];
const moreLinks = ["Contact", "Privacy Policy", "Terms & Conditions"];

export function FooterSection() {
  return (
    <footer className="relative flex flex-col justify-between min-h-[460px] w-full overflow-hidden px-6 pb-8 pt-24 text-left font-body text-[16px] text-primary sm:px-10 lg:px-0  sm:pt-18 xl:pt-[10.7rem]">
      <Image
        src="/images/footerBg.png"
        alt="banner"
        fill
        priority
        className="object-cover object-top z-0"
      />

      {/* <footer className="mx-auto w-full max-w-[1523px] bg-[url('/images/footerBg.png')] bg-[length:100%_100%] bg-top bg-no-repeat px-6 pb-8 pt-24 text-left font-body text-[16px] text-primary sm:px-10 lg:aspect-[1523/460] lg:px-0 lg:pt-[10.7rem]"> */}
      <ScrollReveal
        className="mx-auto relative grid max-w-[1308px] gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-[1.28fr_1fr_0.72fr_0.88fr] lg:gap-12 lg:px-5"
        stagger={0.1}
      >
        <div>
          <SectionHeading as="h2" className="leading-none">
            <span className="text-primary-active">Snow</span>{" "}
            <span className="text-primary">Village</span>
          </SectionHeading>
          <p className="mt-2 max-w-[390px] leading-[1.45] text-black">
            A magical winter destination where snow, fun, excitement, and
            unforgettable memories come together.
          </p>
          <Link
            className="mt-3 inline-flex rounded-[9px] bg-gradient-footer-button px-3 py-3 font-body-semibold leading-none text-white shadow-[0_4px_8px_rgba(0,26,69,0.22)] transition-transform hover:-translate-y-0.5"
            href="#booking"
          >
            Book at snowvillage.in
          </Link>
        </div>

        <div className="lg:border-r lg:border-primary/18 lg:pr-12">
          <h3 className="text-[18px] font-body-semibold leading-none text-primary-active">
            Contact
          </h3>
          <div className="mt-2 flex items-start gap-3 leading-[1.6]">
            <svg
              aria-hidden="true"
              className="mt-1 h-5 w-5 shrink-0 text-primary-active"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
            </svg>
            <p>
              4th Floor, E Tower, Spectrum Metro Phase 2, Sector 75, Noida,
              Uttar Pradesh 201307
            </p>
          </div>
          <a className="mt-1 flex items-center gap-3" href="tel:+919211072226">
            <svg
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-primary-active"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.56 3.58.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.19 2.46.56 3.58a1 1 0 0 1-.25 1.01l-2.19 2.2Z" />
            </svg>
            +91 9211072226
          </a>
          <a
            className="mt-1 flex items-center gap-3"
            href="mailto:info@snowvillage.in"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-primary-active"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-.4 4.25-7.07 4.42a1 1 0 0 1-1.06 0L4.4 8.25 5.46 6.6 12 10.69l6.54-4.09 1.06 1.65Z" />
            </svg>
            info@snowvillage.in
          </a>
        </div>

        <div className="lg:border-r lg:border-primary/18 lg:pr-12">
          <h3 className="text-[18px] font-body-semibold leading-none text-primary-active">
            Quick links
          </h3>
          <ul className="mt-2">
            {quickLinks.map((link) => (
              <li key={link}>
                <Link
                  className="inline-flex items-center gap-2 hover:text-primary-active"
                  href={
                    link === "Home"
                      ? "/"
                      : `#${link.toLowerCase().replaceAll(" ", "-")}`
                  }
                >
                  <img
                    src="/icons/bullet-star.svg"
                    alt="icon"
                    width={9}
                    height={9}
                    className="h-auto w-auto shrink-0"
                  />

                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[18px] font-body-semibold leading-none text-primary-active">
            More
          </h3>
          <ul className="mt-2">
            {moreLinks.map((link) => (
              <li key={link}>
                <Link
                  className="inline-flex items-center gap-2 hover:text-primary-active"
                  href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
                >
                  <img
                    src="/icons/bullet-star.svg"
                    alt="icon"
                    width={9}
                    height={9}
                    className="h-auto w-auto shrink-0"
                  />
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-4">
            <a
              aria-label="Instagram"
              className="grid h-[34px] w-[34px] place-items-center rounded-full bg-primary-active text-white shadow-[0_3px_7px_rgba(0,26,69,0.2)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_6px_12px_rgba(0,26,69,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-active"
              href="#instagram"
            >
              <svg
                aria-hidden="true"
                className="h-[18px] w-[18px]"
                fill="none"
                viewBox="0 0 24 24"
              >
                <rect
                  height="15"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="15"
                  x="4.5"
                  y="4.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3.2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="16.8" cy="7.3" fill="currentColor" r="1.2" />
              </svg>
            </a>
            <a
              aria-label="Facebook"
              className="grid h-[34px] w-[34px] place-items-center rounded-full bg-primary-active text-white shadow-[0_3px_7px_rgba(0,26,69,0.2)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_6px_12px_rgba(0,26,69,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-active"
              href="#facebook"
            >
              <svg
                aria-hidden="true"
                className="h-[18px] w-[18px]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.3 8H16V5.2c-.29-.04-1.28-.12-2.43-.12-2.4 0-4.05 1.51-4.05 4.28V12H6.9v3.13h2.62V23h3.22v-7.87h2.52L15.66 12h-2.92V9.67c0-.9.24-1.67 1.56-1.67Z" />
              </svg>
            </a>
            <a
              aria-label="YouTube"
              className="grid h-[34px] w-[34px] place-items-center rounded-full bg-primary-active text-white shadow-[0_3px_7px_rgba(0,26,69,0.2)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_6px_12px_rgba(0,26,69,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-active"
              href="#youtube"
            >
              <svg
                aria-hidden="true"
                className="h-[19px] w-[19px]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.6 7.2a2.8 2.8 0 0 0-1.97-1.98C17.9 4.75 12 4.75 12 4.75s-5.9 0-7.63.47A2.8 2.8 0 0 0 2.4 7.2 29.3 29.3 0 0 0 2 12a29.3 29.3 0 0 0 .4 4.8 2.8 2.8 0 0 0 1.97 1.98c1.73.47 7.63.47 7.63.47s5.9 0 7.63-.47a2.8 2.8 0 0 0 1.97-1.98A29.3 29.3 0 0 0 22 12a29.3 29.3 0 0 0-.4-4.8ZM10 15.2V8.8l5.3 3.2-5.3 3.2Z" />
              </svg>
            </a>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="p"
        className="mx-auto relative mt-5 w-fit rounded-[12px] bg-white/70 px-3 py-4 text-[14px] leading-none text-primary shadow-[0_2px_8px_rgba(0,26,69,0.08)]"
        delay={0.12}
      >
        © 2026. All rights reserved.
      </ScrollReveal>
    </footer>
  );
}
