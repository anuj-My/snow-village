type SectionHeadingProps = {
  as?: "h1" | "h2";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function SectionHeading({
  as: Tag = "h2",
  children,
  className = "",
  style,
}: SectionHeadingProps) {
  const sizeClass =
    Tag === "h1"
      ? "text-[clamp(32px,5.52vw,84px)] leading-[1.07]"
      : "text-[clamp(28px,3.15vw,48px)] leading-[1.2]";

  return (
    <Tag
      className={`font-heading tracking-normal text-primary ${sizeClass} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
