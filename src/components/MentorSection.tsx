import React from 'react';
import { Linkedin } from 'lucide-react';

const MentorSection = () => {
  return (
    <section id="mentor" className="py-20 bg-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black-900 mb-4">
            Meet Your  <span className="text-pink-500">Mentor</span>
          </h2>
        </div>

        <div className="bg-#f0d1e7 rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvMjg3LWFrZTA2ODg3LWNoaW0uanBn.jpg"  // Updated image source
                height="320"
                width="320"
                alt="Mentor"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-pink-500">
                    Mr. Premanand Sethurajan
                  </h3>
                  <p className="text-black-600 font-medium">
                    AI Consultant & Business Strategist
                  </p>
                </div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 text-gray-400 hover:text-pink-600"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <p className="mt-4 text-gray-600">
                With over 15 years of experience in technology and business
                transformation, Premanand has helped numerous organizations
                leverage AI to achieve their business goals. He specializes in
                AI implementation strategies, process automation, and digital
                transformation.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
