import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";


export default function Faq() {

  const [openIndex, setOpenIndex] = useState(1); // default open second question

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What does Sunil Kardam do?",
      answer:
        "Sunil Kardam is an entrepreneur working in the network marketing industry, helping people build businesses and achieve financial independence.",
    },
    {
      question: "How can I start working with Sunil Kardam?",
      answer:
        "You can connect through his contact form, schedule a call, or join his team to learn step-by-step how to begin your journey in network marketing.",
    },
    {
      question: "Do I need prior experience to start?",
      answer:
        "No, you don’t need prior experience. With proper mentorship, training, and dedication, anyone can succeed in this business.",
    },
    {
      question: "What kind of support will I receive?",
      answer:
        "You will get personal guidance, business strategies, and continuous motivation from Sunil Kardam and his team.",
    },
    {
      question: "How much time does it take to see results?",
      answer:
        "It depends on your consistency and efforts. Many people start seeing results within a few months of dedicated work.",
    },
  ];

  return (
    <>
      <section className="py-16 px-4 bg-white" id='faq'>
        <div className="w-[85%] mx-auto grid lg:grid-cols-3 gap-10">
          {/* Left - FAQs */}
          <div className="lg:col-span-2">
            <div className="text-center mb-12">
              <p className="text-sm uppercase text-gray-500 tracking-wide">— FAQs</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Questions? <span className="text-orange-500 italic">Look here.</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  onClick={() => toggleFAQ(index)}
                  className={`rounded-xl p-5 cursor-pointer border transition ${openIndex === index
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-black"
                    }`}
                >
                  {/* Question */}
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-lg">{faq.question}</h3>
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </div>

                  {/* Answer */}
                  {openIndex === index && (
                    <p className="mt-3 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Info Cards */}
          <div className="space-y-6 md:mt-28 mt-5">
            {/* Contact Card */}
            <div className="bg-black text-white rounded-xl p-8 shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💬</span>
                <h4 className="text-xl font-semibold">You have different questions?</h4>
              </div>
              <p className="text-gray-300 text-sm mb-6">
                Your Questions, My Answers. Quick Responses Guaranteed.
              </p>
              <a href="#contact">
                <button className="bg-orange-500 px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition">
                  Contact Us
                </button>
              </a>
            </div>

            {/* Availability Card */}
            <div className="bg-gray-100 rounded-xl p-6 flex items-start gap-4 shadow">
              <div className="text-orange-500 text-2xl"><FaPhone/></div>
              <div>
                <p className="font-semibold text-black">Your Vision, My Craft</p>
                <p className="text-orange-500 font-bold">Available 24/7</p>
                <p className="text-gray-600 text-sm">+91 9568208540</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
