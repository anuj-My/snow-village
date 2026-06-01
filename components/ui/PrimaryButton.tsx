import Image from "next/image";

type PrimaryButtonProps = {
  children: React.ReactNode;
  href?: string;
  showArrow?: boolean;
};

export function PrimaryButton({
  children,
  href = "#",
  showArrow = true,
}: PrimaryButtonProps) {
  return (
    <a
      className="inline-flex items-center gap-2.5 rounded-[12px] bg-gradient-button px-3 py-2.5 font-body text-[16px] font-medium leading-none text-white shadow-[0_5px_4px_rgba(0,26,69,0.35)] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-active md:gap-4 md:rounded-[14px] md:py-[13.5px] md:text-[22px]"
      href={href}
    >
      <span className="whitespace-nowrap">{children}</span>
      {showArrow ? (
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-primary md:h-[41px] md:w-[41px]">
          <Image
            className="h-auto w-[18px] md:w-[25px]"
            src="/icons/right-arrow.svg"
            alt=""
            width={25}
            height={20}
            aria-hidden="true"
          />
        </span>
      ) : null}
    </a>
  );
}
