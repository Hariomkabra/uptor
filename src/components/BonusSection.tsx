import React from 'react';
import { CheckCircle } from 'lucide-react';

const BonusSection = () => {
  const bonuses = [
    {
      title: 'AI Prompt Templates',
      description: 'Access a curated collection of prompts to maximize the effectiveness of AI tools in your projects.',
      image: 'https://img.freepik.com/premium-photo/3d-icon-chat-message-pink-color-white-background-concept-talkdialogue-online-support-messenger-discussion-modern-trendy-icon-web-design-vector-3d-style_839035-1753576.jpg'
    },
    {
      title: 'Step-by-Step Guides',
      description: 'Receive detailed instructions on utilizing AI for content creation, coding, and multimedia production.',
      image: 'https://i.pinimg.com/736x/10/f7/cc/10f7cc6773c0c364c8f9979cf3d0300e.jpg'
    },
    {
      title: 'Resource Library',
      description: 'Gain entry to an extensive library of AI tools and platforms to continue your learning journey.',
      image: 'https://images.freeimages.com/image/previews/1ac/pink-book-icon-png-5694164.png'
    }
  ];

  return (
    <section id="bonuses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Exclusive Bonuses
          </h2>
          <p className="text-xl ">
            Attend the workshop to receive exclusive access to our bonuses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 p-6 "
            >
              <img src={bonus.image} alt={bonus.title} className="w-12 h-12" />
              <h3 className="text-xl font-semibold text-gray-900">
                {bonus.title}
              </h3>
              <p className="text-gray-600">{bonus.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 flex justify-center">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center max-w-4xl">
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold text-gray-900">Secure Your Spot!</h3>
              <p className="text-gray-600">
                Elevate your career by joining our workshop and unlock new opportunities for success in the digital world.
              </p>
            </div>
            <a
              href="#"
              className="mt-4 md:mt-0 bg-pink-700 hover:bg-pink-700 text-white font-semibold py-2 px-3 rounded-lg text-lg"
            >
              Book Now for Just ₹9/- <span className="line-through text-gray-400">₹500</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BonusSection;
