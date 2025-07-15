"use client";

import { useState, useEffect } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return, and we'll provide you with a prepaid shipping label.",
  },
  {
    id: 2,
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available for 1-2 day delivery. International shipping times vary by location but generally take 7-14 business days.",
  },
  {
    id: 3,
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by destination. All international orders are subject to local customs duties and taxes, which are the responsibility of the customer.",
  },
  {
    id: 4,
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or directly with the shipping carrier. You'll also receive updates as your package moves through the delivery process.",
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All transactions are processed securely using industry-standard encryption.",
  },
  {
    id: 6,
    question: "Can I modify or cancel my order?",
    answer:
      "Orders can be modified or cancelled within 1 hour of placement. After this window, orders enter our fulfillment process and cannot be changed. Please contact customer service immediately if you need to make changes.",
  },
  {
    id: 7,
    question: "Do you offer size exchanges?",
    answer:
      "Yes, we offer free size exchanges within 30 days of purchase. The item must be unworn and in original condition. Simply contact us to arrange an exchange, and we'll send you a prepaid return label.",
  },
  {
    id: 8,
    question: "How do I care for my products?",
    answer:
      "Care instructions vary by product and are included with each item. Generally, we recommend following the care label instructions. For specific questions about product care, please refer to our detailed care guide or contact customer service.",
  },
  {
    id: 9,
    question: "Do you have a loyalty program?",
    answer:
      "Yes! Our VIP program offers exclusive benefits including early access to sales, free shipping on all orders, birthday discounts, and reward points for every purchase. Sign up is free and you'll start earning benefits immediately.",
  },
  {
    id: 10,
    question: "What if I receive a damaged item?",
    answer:
      "We're sorry if you receive a damaged item. Please contact us within 48 hours of delivery with photos of the damage. We'll immediately send a replacement or provide a full refund, and you won't need to return the damaged item.",
  },
  {
    id: 11,
    question: "How can I contact customer service?",
    answer:
      "Our customer service team is available Monday-Friday 9AM-6PM EST via email, live chat, or phone. You can reach us at support@company.com, use the chat widget on our website, or call 1-800-123-4567.",
  },
  {
    id: 12,
    question: "Do you offer gift cards?",
    answer:
      "Yes, we offer digital gift cards in denominations from $25 to $500. Gift cards are delivered via email and can be used for any purchase on our website. They never expire and can be combined with other promotions.",
  },
  {
    id: 13,
    question: "What is your privacy policy?",
    answer:
      "We take your privacy seriously and never sell your personal information to third parties. We only use your data to process orders and improve your shopping experience. You can view our complete privacy policy in the footer of our website.",
  },
  {
    id: 14,
    question: "Do you offer wholesale pricing?",
    answer:
      "Yes, we offer wholesale pricing for bulk orders and retail partners. Minimum order quantities and pricing tiers vary by product category. Please contact our wholesale team at wholesale@company.com for more information.",
  },
  {
    id: 15,
    question: "How do I create an account?",
    answer:
      "Creating an account is easy and free. Simply click 'Sign Up' at the top of any page, enter your email and create a password. Having an account allows you to track orders, save favorites, and checkout faster on future purchases.",
  },
  {
    id: 16,
    question: "What makes your products sustainable?",
    answer:
      "We're committed to sustainability through eco-friendly materials, ethical manufacturing practices, and carbon-neutral shipping. Our products are made from recycled and organic materials whenever possible, and we partner with certified sustainable suppliers.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-100/40 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-4 animate-pulse">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our products, shipping,
            returns, and more. Can't find what you're looking for? Feel free to
            contact our support team.
          </p>
        </div>

        {/* FAQ Items - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            {faqData
              .slice(0, Math.ceil(faqData.length / 2))
              .map((item, index) => {
                const isOpen = openItems.has(item.id);

                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-2xl relative z-10 transition-all duration-300"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-semibold text-gray-900 pr-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {item.question}
                        </h3>
                        <div className="flex-shrink-0">
                          <div
                            className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-all duration-300 ${
                              isOpen
                                ? "rotate-45 scale-110"
                                : "rotate-0 scale-100"
                            } group-hover:scale-110`}
                          >
                            <svg
                              className="w-4 h-4 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-5">
                        <div className="pt-2 border-t border-gray-200">
                          <p
                            className={`text-gray-700 leading-relaxed mt-4 text-sm transition-all duration-500 ${
                              isOpen
                                ? "translate-y-0 opacity-100"
                                : "translate-y-2 opacity-0"
                            }`}
                          >
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {faqData.slice(Math.ceil(faqData.length / 2)).map((item, index) => {
              const isOpen = openItems.has(item.id);

              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: `${(index + 8) * 100}ms`,
                  }}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-2xl relative z-10 transition-all duration-300"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold text-gray-900 pr-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <div
                          className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-all duration-300 ${
                            isOpen
                              ? "rotate-45 scale-110"
                              : "rotate-0 scale-100"
                          } group-hover:scale-110`}
                        >
                          <svg
                            className="w-4 h-4 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <div className="pt-2 border-t border-gray-200">
                        <p
                          className={`text-gray-700 leading-relaxed mt-4 text-sm transition-all duration-500 ${
                            isOpen
                              ? "translate-y-0 opacity-100"
                              : "translate-y-2 opacity-0"
                          }`}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
