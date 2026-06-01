"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HeaderButton } from "@/components/layout/HeaderButton";

const navItems = ["Home", "About us", "Activities", "Gallery", "Contact"];

function getNavHref(item: string) {
  return item === "Home" ? "/" : `#${item.toLowerCase().replaceAll(" ", "-")}`;
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`px-7 py-3 flex  items-start justify-between ${
        isOpen ? "fixed inset-x-0 top-0 z-30" : ""
      } min-[992px]:relative z-10`}
    >
      <Link
        className="relative z-30 block shrink-0"
        href="/"
        aria-label="Snow Village home"
        onClick={() => setIsOpen(false)}
      >
        <Image
          className="h-auto w-[86px] sm:w-[142px] min-[992px]:max-[1200px]:w-[110px]"
          src="/images/logo2.png"
          alt="Snow Village"
          width={142}
          height={105}
          priority
        />
      </Link>

      <nav
        className="hidden items-center mt-7 font-body font-body-semibold leading-none text-primary min-[992px]:flex gap-7 text-[24px] min-[992px]:max-[1200px]:gap-5 min-[992px]:max-[1200px]:text-[20px] lg:gap-[38px]
  "
      >
        {navItems.map((item) => (
          <Link
            className={
              item === "Home"
                ? "text-primary-active"
                : "transition-colors hover:text-primary-active"
            }
            href={getNavHref(item)}
            key={item}
          >
            {item}
          </Link>
        ))}
      </nav>

      <div className="hidden mt-4 min-[992px]:block">
        <HeaderButton />
      </div>

      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="relative z-30 grid h-12 w-12 place-items-center rounded-full bg-white/80 shadow-[0_8px_24px_rgba(0,26,69,0.16)] backdrop-blur transition-transform duration-300 hover:scale-105 min-[992px]:hidden"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span className="relative h-5 w-6">
          <span
            className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-primary transition duration-300 ${
              isOpen ? "translate-y-[9px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[9px] h-0.5 w-6 rounded-full bg-primary transition duration-200 ${
              isOpen ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[18px] h-0.5 w-6 rounded-full bg-primary transition duration-300 ${
              isOpen ? "-translate-y-[9px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-20 overflow-hidden transition min-[992px]:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none delay-500"
        }`}
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(145deg,#ffffff_0%,#effbff_24%,#b8ecff_48%,#52baf7_72%,#165FF5_100%)] transition-[clip-path] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            clipPath: isOpen
              ? "circle(150vmax at calc(100% - 48px) 48px)"
              : "circle(0px at calc(100% - 48px) 48px)",
          }}
        />
        <div
          className={`flex flex-col pt-[170px] px-[50px] h-full transition duration-500 sm:inset-x-12 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-4 font-body text-[24px] font-body-semibold leading-none text-primary sm:gap-5 sm:text-[32px]"
          >
            {navItems.map((item, index) => (
              <Link
                className={`transition duration-500 ${
                  item === "Home"
                    ? "text-primary-active"
                    : "hover:text-primary-active"
                } ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                href={getNavHref(item)}
                key={item}
                onClick={() => setIsOpen(false)}
                style={{
                  transitionDelay: isOpen ? `${120 + index * 65}ms` : "0ms",
                }}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div
            className={`mt-8 transition duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? "480ms" : "0ms" }}
          >
            <HeaderButton
              className="w-full max-w-[280px] py-3 text-[15px] sm:max-w-[320px] sm:py-4 sm:text-[18px]"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
