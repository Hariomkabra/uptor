import { Linkedin } from 'lucide-react';

const MentorSection = () => {
  return (
    <section id="mentor" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Meet Your <span className="text-yellow-400">Mentor</span>
          </h2>
          <p className="mt-2 text-lg text-gray-300">
            Learn from the best in the field of AI and Business Strategy.
          </p>
        </div>

        <div className="bg-yellow-500 rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img
              className="object-cover w-full h-full"
              src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvMjg3LWFrZTA2ODg3LWNoaW0uanBn.jpg"
              alt="Mentor"
            />
          </div>
          <div className="p-8 md:w-2/3 flex flex-col justify-center">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-black">Mr. Premanand Sethurajan</h3>
                <p className="text-black font-medium">AI Consultant & Business Strategist</p>
              </div>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <p className="mt-4 text-black leading-relaxed">
              With over 15 years of experience in technology and business transformation, Premanand has guided countless
              organizations to leverage the power of AI. His core expertise lies in AI implementation strategies,
              workflow automation, and enabling digital-first growth across industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
