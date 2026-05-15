import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "What payment methods are supported?",
    answer:
      "Payments can be made through cheque, bank transfer, or home loan disbursement from approved banks and financial institutions.",
  },
  {
    id: 2,
    question: "Can bookings be cancelled?",
    answer:
      "Yes, bookings can be cancelled based on the company cancellation policy and applicable terms.",
  },
  {
    id: 3,
    question: "How do I receive purchase documentation?",
    answer:
      "All purchase documents are shared through email and physical copies can also be provided upon request.",
  },
  {
    id: 4,
    question: "Which approvals and licenses are applicable?",
    answer:
      "All projects are approved by relevant government and local development authorities.",
  },
  {
    id: 5,
    question: "Footer Text below Shakuntal logo?",
    answer:
      "You can add your company description or footer branding text here.",
  },
];

const HomeQuestions = () => {
  const [activeId, setActiveId] = useState(1);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Top Button */}
        <div className="flex justify-center mb-12">
          <button className="border border-[#b08a2f] text-[#b08a2f] px-8 py-3 rounded-xl text-sm font-medium hover:bg-[#b08a2f] hover:text-white transition duration-300">
            Have More Question?
          </button>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className={`rounded-2xl transition-all duration-300 ${
                activeId === faq.id
                  ? "bg-[#ded3be] p-10"
                  : "bg-transparent border-b border-gray-200 pb-5"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-[22px] font-medium text-[#2f2f2f]">
                  {faq.question}
                </h3>

                <span className="text-[#2f2f2f]">
                  {activeId === faq.id ? (
                    <Minus size={28} />
                  ) : (
                    <Plus size={28} />
                  )}
                </span>
              </button>

              {/* Answer */}
              {activeId === faq.id && (
                <p className="text-[#4b4b4b] text-base leading-relaxed mt-6 max-w-3xl">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeQuestions;