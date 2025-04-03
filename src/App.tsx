
import { BookOpen, Video, Zap, Image } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LearningSection from './components/LearningSection';
import MentorSection from './components/MentorSection';
import BonusSection from './components/BonusSection';
import FAQSection from './components/FAQSection';

function App() {
  const learningTopics = [
    {
      title: 'Prompting Techniques',
      icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
      description: 'Master the art of crafting effective prompts for AI models'
    },
    {
      title: 'ChatGPT',
      icon: <Zap className="w-8 h-8 text-indigo-600" />,
      description: 'Learn to leverage ChatGPT for various business applications'
    },
    {
      title: 'Zapier Integration',
      icon: <Video className="w-8 h-8 text-indigo-600" />,
      description: 'Automate workflows by connecting AI tools with Zapier'
    },
    {
      title: 'AI Image Generation',
      icon: <Image className="w-8 h-8 text-indigo-600" />,
      description: 'Create stunning visuals using AI image generators'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <LearningSection topics={learningTopics} />
        <MentorSection />
        <BonusSection />
        <FAQSection />
      </main>
      
    </div>
  );
}

export default App;