import Link from "next/link";

type HeaderButtonProps = {
  className?: string;
  onClick?: () => void;
};

export function HeaderButton({ className = "", onClick }: HeaderButtonProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center rounded-[18px] bg-gradient-header-button px-2 py-3 font-body font-body-semibold leading-none text-white shadow-[0_4px_10px_rgba(0,26,69,0.18)] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-active sm:py-[22px] sm:text-[18px] min-[992px]:max-[1200px]:px-3 min-[992px]:max-[1200px]:py-[16px] min-[992px]:max-[1200px]:text-[15px] ${className}`}
      href="#booking"
      onClick={onClick}
    >
      Book Your Snow Day
    </Link>
  );
}
