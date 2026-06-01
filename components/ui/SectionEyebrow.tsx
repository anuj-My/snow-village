import Image from "next/image";

type SectionEyebrowProps = {
  children: React.ReactNode;
  iconSrc?: string;
  className?: string;
};

export function SectionEyebrow({
  children,
  iconSrc = "/icons/mingcute_snow-line.svg",
  className = "",
}: SectionEyebrowProps) {
  return (
    <div
      className={`flex flex-col items-center text-primary-active ${className}`}
    >
      <Image src={iconSrc} alt="" width={34} height={34} />
      <div className="mt-2 flex items-center justify-center gap-7">
        <span className="h-[3.2px] w-9 rounded-full bg-primary-active" />
        <span className="font-body text-[16px] font-body-semibold uppercase leading-none sm:text-[20px]">
          {children}
        </span>
        <span className="h-[3.2px] w-9 rounded-full bg-primary-active" />
      </div>
    </div>
  );
}
