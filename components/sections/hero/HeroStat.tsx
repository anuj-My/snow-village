import Image from "next/image";

type HeroStatProps = {
  iconSrc: string;
  title: string;
  description: string;
  widthClass?: string;
};

export function HeroStat({
  iconSrc,
  title,
  description,
  widthClass = "sm:w-[240px]",
}: HeroStatProps) {
  return (
    <div
      className={`flex w-full min-w-0 flex-col items-center text-center ${widthClass}`}
    >
      <span className="grid h-10 w-10 place-items-center rounded-full border border-white bg-white/35 text-primary-active shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)] md:h-[52px] md:w-[52px]">
        <Image
          className="h-6 w-6 object-contain sm:h-[30px] sm:w-[30px]"
          src={iconSrc}
          alt=""
          width={30}
          height={30}
          aria-hidden="true"
        />
      </span>
      <h3 className="mt-2 text-[16px] font-medium leading-[1.15] text-primary md:mt-3 md:text-[20px] lg:text-[22px]">
        {title}
      </h3>
      <p className="mt-1.5 text-[16px] leading-[1.22] text-primary-70 md:mt-2 md:text-[18px] lg:text-[20px] ">
        {description}
      </p>
    </div>
  );
}
