import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is AgriHub?',
      answer: 'AgriHub is a digital platform that connects Sri Lankan farmers with modern agricultural machinery and services.'
    },
    {
      question: 'How do I register as a farmer?',
      answer: 'Click on the Register button, fill in your details including NIC, address, and create a password. You\'ll receive a confirmation email.'
    },
    {
      question: 'How can I book machinery?',
      answer: 'After logging in, browse available machinery, select your preferred date and time, and submit a booking request.'
    },
    {
      question: 'What types of machinery are available?',
      answer: 'We offer tractors, harvesters, cultivators, seeders, water pumps, and sprayers from various brands.'
    },
    {
      question: 'How do I track my booking?',
      answer: 'You can view all your bookings in the dashboard. Each booking shows its current status (Pending, Approved, Rejected).'
    },
    {
      question: 'Is there a mobile app available?',
      answer: 'Currently, we offer a responsive web application that works on all devices. A mobile app is in development.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600">Find answers to common questions about AgriHub</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card cursor-pointer" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {openIndex === index && (
                <p className="text-gray-600 mt-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;