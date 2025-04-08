import { Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              In A World Where AI Is Rapidly Advancing, Will You Adapt or Be Left Behind?
            </h1>
            <p className="text-lg text-yellow-300 mb-6">
              AI tools are changing how we work, are you ready to stay ahead? Join us this Sunday for our{' '}
              <span className="text-yellow-400 font-semibold">Generative AI Workshop</span> and discover simple ways to make your daily work easier. Whether you're a professional, entrepreneur, or just curious about AI, this workshop is your chance to learn the skills and tools that will help you succeed in an AI-powered world.
            </p>
            <div className="space-y-6">
              <button className="bg-yellow-400 text-black text-xl px-8 py-4 rounded-full hover:bg-yellow-500 transform hover:scale-105 transition-all font-bold">
                Book Now for Just ₹9/- <span className="line-through text-white">₹500</span>
              </button>
              
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <img
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-yellow-500"
                      src={`https://i.pravatar.cc/150?img=${i}`}
                      alt={`Student ${i}`}
                    />
                  ))}
                </div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-yellow-200">200+ Happy Students 😊</span>
              </div>

              <div className="inline-block bg-yellow-500 rounded-lg p-4 shadow-sm text-black font-semibold">
                <div className="text-center">
                  <div className="font-bold text-2xl">APR</div>
                  <div className="text-3xl font-extrabold">06</div>
                  <div className="">Sunday</div>
                  <div className="">10:00 AM</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video bg-yellow-100 rounded-lg overflow-hidden shadow-xl">
              <div className="grid grid-cols-2 gap-2 p-2">
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                  alt="Workshop Preview"
                  className="rounded-lg col-span-2"
                />
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136"
                  alt="AI Workshop"
                  className="rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481"
                  alt="AI Learning"
                  className="rounded-lg"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-yellow-400 text-black p-4 rounded-full shadow-lg hover:bg-yellow-500 transform hover:scale-105 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
