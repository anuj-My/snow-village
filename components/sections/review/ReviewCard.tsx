import Image from "next/image";

type ReviewCardProps = {
  quote: string;
  name: string;
  city: string;
  avatar: string;
  avatarClass: string;
};

export function ReviewCard({
  quote,
  name,
  city,
  avatar,
  avatarClass,
}: ReviewCardProps) {
  return (
    <article
      className="
    relative min-h-[182px] rounded-[32px]
    border border-[#155CEE]
    bg-[linear-gradient(180deg,_#F8F5FF_0%,_#DBF8FF_100%)]
    pl-8 pr-4 pb-8 pt-9
    shadow-[0_5px_5px_rgba(0,0,0,0.3)]
    backdrop-blur-[1px]
  "
    >
      <span className="absolute -left-2 -top-2 grid h-[30px] w-[30px] place-items-center rounded-full bg-primary-active shadow-[0_3px_6px_rgba(0,26,69,0.18)]">
        <Image
          src="/icons/quote-white-icon.svg"
          alt=""
          width={17}
          height={13}
          aria-hidden="true"
        />
      </span>
      <p className="text-base italic text-primary">&quot;{quote}&quot;</p>
      <div className="mt-6 flex items-center gap-4">
        <span className="relative h-[48px] w-[48px] overflow-hidden rounded-full">
          <Image
            className={`object-cover ${avatarClass}`}
            src={avatar}
            alt=""
            fill
            sizes="48px"
            aria-hidden="true"
          />
        </span>
        <div>
          <h3 className="text-[16px] font-body-semibold leading-none text-primary">
            {name}
          </h3>
          <p className="mt-2 text-[11px] uppercase leading-none text-primary-70">
            {city}
          </p>
        </div>
      </div>
    </article>
  );
}
