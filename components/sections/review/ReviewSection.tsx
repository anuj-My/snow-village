import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ReviewCard } from "@/components/sections/review/ReviewCard";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reviews = [
  {
    quote:
      "Best snow experience we've had in India. My kids are still talking about it a month later!",
    name: "Priya M.",
    city: "Delhi",
    avatar: "/images/heroBg.png",
    avatarClass: "object-[65%_70%]",
  },
  {
    quote:
      "My daughter's first ever snow experience slides, snowman, real snowfall. She loved every second.",
    name: "Arjun S.",
    city: "Gurgaon",
    avatar: "/images/penguins.png",
    avatarClass: "object-center",
  },
  {
    quote:
      "Every photo looked like I was on a mountain holiday. The snow felt so real and fresh!",
    name: "Neha R.",
    city: "Noida",
    avatar: "/images/about-left.png",
    avatarClass: "object-[52%_86%]",
  },
];

export function ReviewSection() {
  return (
    <section className="relative z-[1] min-h-[582px] w-full overflow-hidden px-6 pb-37 sm:px-10 lg:px-0 lg:pb-20">
      <Image
        src="/images/review.png"
        alt="about"
        fill
        priority
        className="object-cover object-top -translate-y-[22px] lg:-translate-y-[12px]"
      />

      <ScrollReveal className="relative z-10 mx-auto pt-10 text-center">
        <SectionEyebrow className="mb-2">Review</SectionEyebrow>
        <SectionHeading
          as="h2"
          className="text-[#001A45] [filter:drop-shadow(2px_2px_0_rgba(0,0,0,0.12))]"
        >
          What Our <span className="text-primary-active">Visitors</span> Say
        </SectionHeading>
      </ScrollReveal>

      <ScrollReveal
        className="relative z-10 mx-auto mt-12 grid max-w-[92%] gap-6 sm:mt-17 lg:grid-cols-3 lg:gap-[5.2%] lg:px-5"
        stagger={0.12}
      >
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </ScrollReveal>

      <Image
        className="pointer-events-none absolute bottom-0 right-0 z-20 hidden h-auto w-[15.2%] select-none lg:block"
        src="/images/happy-snowman-christmas.png"
        alt=""
        width={672}
        height={782}
      />
    </section>
  );
}
