import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  "What makes Fresha the leading platform for businesses in beauty and wellness?",
  "How does Fresha help my business grow?",
  "Are there any hidden costs?",
  "Is there a minimum commitment or contract?",
  "Does Fresha support businesses of all sizes?",
  "What types of businesses can use Fresha?",
  "How can Fresha help reduce no-shows?",
  "Can I migrate my data from my previous system to Fresha?",
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Frequently asked questions
      </h2>
      <div className="space-y-4">
        {faqs.map((question, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-lg font-medium text-gray-900">
                {question}
              </span>
              <span className="text-gray-700">
                {openIndex === index ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-2 text-gray-600 text-sm transition-all duration-300">
                {/* You can customize or dynamically insert answers here */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                facilisis nisl sit amet lacus gravida facilisis.
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
