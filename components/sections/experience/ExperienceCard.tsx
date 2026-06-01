import Image from "next/image";

type ExperienceCardProps = {
  snow: string;
  icon: string;
  title: string;
  text: string;
};

export function ExperienceCard({
  snow,
  icon,
  title,
  text,
}: ExperienceCardProps) {
  return (
    <article className="relative flex min-h-[184px] flex-col items-center rounded-[16px] border border-white/80 bg-[#ddf8ff]/58 px-6 pb-6 pt-[110px] sm:pt-[92px] text-center shadow-[0_5px_8px_rgba(0,26,69,0.14),inset_0_1px_18px_rgba(255,255,255,0.62),inset_0_-18px_28px_rgba(255,255,255,0.32)] backdrop-blur-[7px]">
      <Image
        className="pointer-events-none absolute -top-[25px] sm:-top-[16px] left-1/2 h-auto w-[112%] -translate-x-1/2 select-none"
        src={snow}
        alt=""
        width={270}
        height={69}
        aria-hidden="true"
      />
      <span className="absolute top-[42px] grid h-[40px] w-[40px] place-items-center rounded-full bg-primary-active shadow-[0_4px_8px_rgba(0,26,69,0.18)]">
        <Image
          className="h-[20px] w-[20px] object-contain"
          src={icon}
          alt=""
          width={22}
          height={22}
          aria-hidden="true"
        />
      </span>
      <h3 className="text-[16px] font-bold leading-[1.2] text-primary/80">
        {title}
      </h3>
      <p className="mt-2 max-w-[210px] text-[16px] font-medium leading-[1.38] text-primary/80">
        {text}
      </p>
      <span className="mt-3 h-0.5 w-10 rounded-full bg-primary-active" />
    </article>
  );
}
