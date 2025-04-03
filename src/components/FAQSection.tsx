import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: 'How will I get the link to attend?', answer: 'Once you register, you will receive an email with the workshop link and access details. Reminders will also be sent before the event.' },
    { question: 'Why is this program only ₹9?', answer: 'We aim to make learning affordable for everyone! This special price is part of our initiative to empower more learners with valuable skills.' },
    { question: 'When is the workshop?', answer: 'The workshop is scheduled at a convenient time. Check your registration details for exact timing.' },
    { question: 'Will I get a recording?', answer: 'Yes, all participants will receive a recording of the workshop, accessible for 30 days after the event.' },
    { question: 'What if I miss the workshop?', answer: 'No worries! You’ll still get access to the recording and all materials. You can also join our next session at no extra cost.' },
    { question: 'What should I have ready during the Workshop?', answer: 'Ensure you have a stable internet connection, a notebook for notes, and any required software installed as per the pre-session email.' },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ Header */}
        <div className="bg-pink-600 text-white p-6 rounded-t-lg text-left">
          <h2 className="text-2xl md:text-3xl font-bold">FAQs:</h2>
        </div>

        {/* FAQ List */}
        <div className="bg-pink-600 p-4 rounded-b-lg">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-2">
              <button
                className="w-full bg-white text-black px-6 py-4 text-left flex justify-between items-center rounded-lg focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-500" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 pt-2 bg-white rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
