import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Who can register for Babtech programs?',
    answer: 'Any LASU student or tech enthusiast looking to upskill in areas like Frontend Development, Product Design, Cybersecurity, Data Analysis/Science, and more.',
  },
  {
    question: 'Are the class sessions flexible for students?',
    answer: 'Yes, our class sessions are highly flexible, we offer weekend and self-paced options to help you balance school work and tech training.',
  },
  {
    question: 'Can I pay in installments ?',
    answer: 'Yes, we provide flexible payment structures and convenient installment plans to suit your needs.',
  },
  {
    question: 'Will I get a certificate after completing a course?',
    answer: 'Yes, upon successful completion of your course and final project, you will be awarded a Certificate.',
  },
  {
    question: 'How do I register?',
    answer: 'Click the ‘Register Now’ button under your desired program or visit the Babtech stand at the LASU TECH X 4.0 event to sign up on-site.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-blue-800 text-sm font-medium mb-4">
          Frequently Asked Questions
        </div>
       
        <div className="text-left mt-8 bg-white rounded-2xl shadow-md border border-blue-100 divide-y divide-blue-50">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-blue-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-400" />
                  )}
                </button>
                <div
                  id={`faq-panel-${idx}`}
                  className="px-6 pb-4 text-blue-800 text-base faq-accordion-panel"
                  style={{
                    maxHeight: isOpen ? '500px' : '0',
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ; 