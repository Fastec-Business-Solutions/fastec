import { useState } from "react";

import { IoChevronDown } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

function FAQAccordion() {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(1);

  const faqs = [
    {
      question: "Smart Suggestions",
      answer:
        "Our Smart Suggestions feature uses AI to provide personalized recommendations based on your preferences and past interactions.",
    },
    {
      question: "Market Challenges",
      answer:
        "Startups in Qatar face hurdles like regulations, competition, funding, & hiring, making local insight key.",
    },
    {
      question: "Operational Inefficiencies",
      answer:
        "Our Smart Suggestions feature uses AI to provide personalized recommendations based on your preferences and past interactions.",
    },
    {
      question: "High Consultancy Rates",
      answer:
        "Our Smart Suggestions feature uses AI to provide personalized recommendations based on your preferences and past interactions.",
    },
    {
      question: "Personalized Consultancy",
      answer:
        "Our Smart Suggestions feature uses AI to provide personalized recommendations based on your preferences and past interactions.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItemIndex((prevOpenIndex) =>
      prevOpenIndex === index ? null : index
    );
  };

  return (
    <div className="w-full mx-auto mt-10 text-white">
      <div>
        {faqs.map((faq, index) => {
          const isOpen = openItemIndex === index;

          return (
            <div
              key={index}
              className={`accordion-item ${
                isOpen ? "bg-gradient-accordion-overlay" : ""
              }`}
            >
              <button
                className="flex w-full items-center justify-between px-4 md:px-6 py-6 md:py-8 text-left cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <span
                  className={`${
                    isOpen ? "font-extrabold" : "font-light"
                  } text-lg md:text-2xl uppercase`}
                >
                  {faq.question}
                </span>
                <IoChevronDown
                  className={`${
                    isOpen ? "rotate-180" : ""
                  } h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 ease-in-out flex-shrink-0 ml-2`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 md:px-6 pb-6 md:pb-8 pt-6 md:pt-10 font-family-inter text-sm md:text-base w-full md:w-[80%]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQAccordion;
