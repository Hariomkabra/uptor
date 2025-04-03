import React from 'react';

interface LearningTopic {
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface LearningSectionProps {
  topics: LearningTopic[];
}

const topics = [
  {
    number: "1",
    title: "Prompting Techniques",
    description:
      "You must adopt the Chain of Thought Prompting techniques for any Generative AI tools to work as you desire. It is a skill to guide the LLMs to provide the best possible output. We will discuss many prompting techniques and various tools in this workshop.",
  },
  {
    number: "2",
    title: "ChatGPT",
    description:
      "Your ChatGPT tool is helpful in three main areas: prompt engineering, content creation, and data insights. In our workshop, you will learn all these with practical examples.",
  },
  {
    number: "3",
    title: "Zapier",
    description:
      "Automate without limits using tools like Zapier and Parrot.AI, from creating Zoom meeting summaries to notifying team members and having your conversational AI participate in small meetings without physical presence.",
  },
  {
    number: "4",
    title: "Video & Image Generators",
    description:
      "Tools like Midjourney & Runway are AI image and video generators that bring your wild imagination to life. Thus, you no longer need design or photography skills to generate posters. In our workshop, you will learn all this with practical examples.",
  },
];

const LearningSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What you'll learn?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-start"
            >
              <span className="flex items-center justify-center w-10 h-10 bg-pink-600 text-white text-lg font-bold rounded-full mb-4">
                {topic.number}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {topic.title}
              </h3>
              <p className="text-gray-600">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;