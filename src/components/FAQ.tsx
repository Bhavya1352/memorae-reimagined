import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does Memorae capture my memories?",
      answer: "Memorae uses advanced speech recognition to capture your voice notes, conversations, and thoughts. Simply speak naturally, and our AI will transcribe, understand, and organize everything automatically."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. All your memories are encrypted and stored securely. We use military-grade encryption and never share your personal data with third parties. Your memories belong to you."
    },
    {
      question: "Can I search through my old memories?",
      answer: "Yes! Use natural language to search through everything you've ever told Memorae. Ask questions like 'What did I discuss with Sarah last week?' and get instant, accurate results."
    },
    {
      question: "Does it work on mobile devices?",
      answer: "Memorae works perfectly on all devices - mobile, tablet, and desktop. Your memories sync across all devices so you can access them anywhere, anytime."
    },
    {
      question: "How accurate is the voice recognition?",
      answer: "Our AI achieves 95%+ accuracy in voice recognition and continuously learns from your speech patterns to improve over time. It works with accents and multiple languages."
    },
    {
      question: "Can I share memories with family?",
      answer: "Yes! You can securely share specific memories or create family memory spaces where everyone can contribute and access shared experiences."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Memorae
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg mb-4 overflow-hidden hover:shadow-md transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 animate-fade-in">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;