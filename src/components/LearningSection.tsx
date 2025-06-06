import React from 'react';

interface LearningTopic {
  number: string;
  title: string;
  description: string;
}

interface LearningSectionProps {
  topics: LearningTopic[];
}

const LearningSection: React.FC<LearningSectionProps> = ({ topics }) => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What you'll learn?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-yellow-500 p-6 rounded-xl shadow-lg flex flex-col items-start hover:scale-105 transition-transform"
            >
              <span className="flex items-center justify-center w-10 h-10 bg-black text-white text-lg font-bold rounded-full mb-4">
                {topic.number}
              </span>
              <h3 className="text-xl font-semibold text-white mb-2">
                {topic.title}
              </h3>
              <p className="text-white">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
