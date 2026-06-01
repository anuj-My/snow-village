import Image from "next/image";

type FAQItemProps = {
  answer: string;
  id: string;
  isOpen: boolean;
  onToggle: () => void;
  question: string;
};

export function FAQItem({
  answer,
  id,
  isOpen,
  onToggle,
  question,
}: FAQItemProps) {
  return (
    <div className="overflow-hidden rounded-[15px] border border-white/80 bg-[#e9fbff]/78 shadow-[0_5px_9px_rgba(0,26,69,0.16),inset_0_1px_10px_rgba(255,255,255,0.5)] backdrop-blur-[3px]">
      <button
        aria-controls={`${id}-panel`}
        aria-expanded={isOpen}
        className="flex min-h-[62px] w-full cursor-pointer items-center gap-3 px-4 text-left text-[18px] font-medium leading-tight text-primary sm:text-[20px]"
        id={`${id}-trigger`}
        onClick={onToggle}
        style={{ cursor: "pointer" }}
        type="button"
      >
        <span className="grid h-[39px] w-[39px] shrink-0 place-items-center rounded-full bg-primary-active">
          <Image
            className="h-[23px] w-[23px] object-contain"
            src="/icons/snowflake-icon-white.svg"
            alt=""
            width={23}
            height={23}
            aria-hidden="true"
          />
        </span>
        <span className="h-10 w-px shrink-0 bg-primary/14" />
        <span className="min-w-0 flex-1">{question}</span>
        <span className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full bg-white/75 text-primary-active shadow-[0_2px_6px_rgba(0,26,69,0.16)]">
          <svg
            aria-hidden="true"
            className={`h-4 w-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="m6 14 6-6 6 6"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </span>
      </button>

      <div
        aria-labelledby={`${id}-trigger`}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
        id={`${id}-panel`}
        role="region"
      >
        <div className="overflow-hidden">
          <p className="px-[72px] pb-5 pr-12 text-[16px] leading-[1.45] text-primary-70">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
