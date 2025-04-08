const BonusSection = () => {
  const bonuses = [
    {
      title: 'AI Prompt Templates',
      description: 'Access a curated collection of prompts to maximize the effectiveness of AI tools in your projects.',
      image:
        'https://png.pngtree.com/png-clipart/20210710/ourmid/pngtree-abstract-geometric-social-media-quick-prompt-dialog-png-image_3575060.jpg',
    },
    {
      title: 'Step-by-Step Guides',
      description: 'Receive detailed instructions on utilizing AI for content creation, coding, and multimedia production.',
      image:
        'https://png.pngtree.com/png-vector/20221223/ourmid/pngtree-bulb-ideas-symbol-png-image_6535151.png',
    },
    {
      title: 'Resource Library',
      description: 'Gain entry to an extensive library of AI tools and platforms to continue your learning journey.',
      image:
        'https://i.pinimg.com/736x/72/42/5f/72425f80b7c509e4ee38ea7196f8349e.jpg',
    },
  ];

  return (
    <section id="bonuses" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Exclusive <span className="text-yellow-400">Bonuses</span>
          </h2>
          <p className="text-xl text-gray-300">
            Attend the workshop to receive exclusive access to our bonuses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 p-6 bg-yellow-500 rounded-xl shadow-lg"
            >
              <img src={bonus.image} alt={bonus.title} className="w-12 h-12" />
              <h3 className="text-xl font-semibold text-black">{bonus.title}</h3>
              <p className="text-black">{bonus.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 flex justify-center">
          <div className="bg-yellow-500 shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center max-w-4xl">
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold text-black">Secure Your Spot!</h3>
              <p className="text-black">
                Elevate your career by joining our workshop and unlock new opportunities for success in the digital world.
              </p>
            </div>
            <a
              href="#"
              className="mt-4 md:mt-0 bg-black hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg text-lg transition-colors"
            >
              Book Now for Just ₹9/-{' '}
              <span className="line-through text-gray-300">₹500</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
