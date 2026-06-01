"use client";

import { useState } from "react";
import { FAQItem } from "@/components/sections/faq/FAQItem";

const faqColumns = [
  [
    {
      answer:
        "Snow Village is at Spectrum Mall Phase 2, Noida, with the snow park experience inside the mall premises.",
      question: "Where is Snow Village?",
    },
    {
      answer:
        "Snow Village is open every day from 11 AM to 10 PM, including weekends and holidays.",
      question: "What are the opening hours?",
    },
    {
      answer:
        "Yes. The experience uses real indoor snow so visitors can feel fresh snow underfoot.",
      question: "Is the snow real?",
    },
    {
      answer:
        "The snow zone is maintained at around -10°C for a real winter experience.",
      question: "How cold is it inside?",
    },
  ],
  [
    {
      answer:
        "Wear warm, comfortable clothing. Winter gear is provided as needed before entering the snow area.",
      question: "What should I wear?",
    },
    {
      answer:
        "Yes. It is suitable for children aged 3 and above, with supervision inside the snow park.",
      question: "Is it suitable for young children?",
    },
    {
      answer:
        "Each session is designed as a 45-minute snow experience packed with activities.",
      question: "How long is a session?",
    },
    {
      answer:
        "Tickets can be booked at Snow Village or through the official booking flow once enabled on the website.",
      question: "How do I book tickets?",
    },
  ],
];

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="mx-auto grid max-w-[1104px] lg:px-5 gap-5 md:grid-cols-2 lg:gap-x-[2.5rem] xl:gap-x-[9.1rem]">
      {faqColumns.map((column, columnIndex) => (
        <div className="flex flex-col gap-5" key={columnIndex}>
          {column.map((item, itemIndex) => {
            const id = `faq-${columnIndex}-${itemIndex}`;
            return (
              <FAQItem
                answer={item.answer}
                id={id}
                isOpen={openId === id}
                key={item.question}
                onToggle={() =>
                  setOpenId((current) => (current === id ? null : id))
                }
                question={item.question}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
