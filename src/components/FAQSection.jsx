import React, { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { view } from "../data/allapi"; // Ensure this points to your API routes

const FAQSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  // Fetch FAQs from API
  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch(view.GET_ALL_FAQ); // Replace with correct API endpoint
        const result = await response.json();

        if (result.success && Array.isArray(result.data)) {
          const activeFaqs = result.data.filter((faq) => faq.isActive);
          setFaqs(activeFaqs);
        }
      } catch (error) {
        console.error("Failed to fetch FAQs:", error);
      }
    };

    fetchFAQs();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Frequently asked questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={faq._id} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-lg font-medium text-gray-900">
                {faq.question}
              </span>
              <span className="text-gray-700">
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-2 text-gray-600 text-sm transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;