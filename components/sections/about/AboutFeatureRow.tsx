import Image from "next/image";

type AboutFeatureRowProps = {
  icon: string;
  text: string;
  penguin?: boolean;
};

export function AboutFeatureRow({
  icon,
  text,
  penguin = false,
}: AboutFeatureRowProps) {
  return (
    <li
      className="
    relative flex min-h-[48px] items-center
    rounded-2xl rounded-tl-[24px] rounded-bl-[24px] pl-[54px] pr-5 text-[14px] leading-snug text-primary-70 sm:pl-[67px] sm:text-[16px] md:text-[18px]
    bg-[linear-gradient(90deg,_#F8F7FA_4%,_#E5F8FF_50%,_#C0ECFA_100%)]
    shadow-[inset_-5px_-6px_45.6px_2px_#C5F0FE,inset_-1px_-2px_8px_1px_rgba(0,0,0,0.25),0_5px_9px_rgba(0,26,69,0.22)]
  "
    >
      <span className="absolute -left-1 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-primary-active shadow-[0_4px_8px_rgba(0,26,69,0.18)] sm:h-[48px] sm:w-[48px]">
        <Image
          className="h-[24px] w-[24px] object-contain"
          src={icon}
          alt="icon"
          width={24}
          height={24}
        />
      </span>
      {text}
      {penguin ? (
        <Image
          className="absolute -right-1 -top-[58px] -z-10 hidden h-auto w-[88px] sm:block"
          src="/images/penguin.png"
          alt="penguin"
          width={88}
          height={81}
        />
      ) : null}
    </li>
  );
}
