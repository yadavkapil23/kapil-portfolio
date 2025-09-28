import React from 'react';
import { Code, Brain, Cloud, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Code & Coffee",
      description: "I write Python like it's my first language (because it basically is), and I've dabbled in Java, C++, and JavaScript. Still figuring out why semicolons exist though."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Obsession",
      description: "Got hooked on machine learning after watching too many YouTube videos. Now I can't stop thinking about neural networks and transformers (the AI kind, not the robots)"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Adventures",
      description: "Been playing around with Azure, Docker, and Kubernetes. Still learning, but I can deploy stuff without breaking everything (most of the time)"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Always Learning",
      description: "I'm that person who starts random projects at 2 AM because I read about something cool on Twitter. It's a problem, but I love it"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-300">The story so far...</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">How I got here (it's a long story)</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              So I'm studying Computer Science at UPES, and honestly, I didn't expect to fall this deep into the AI rabbit hole. 
              It all started when I tried to build a simple chatbot for a college project and ended up spending 3 days debugging 
              why it kept saying "I don't understand" to everything (including "hello").
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              That frustration turned into curiosity, and now I'm the person who gets excited about new research papers and 
              spends weekends building random ML models. My friends think I'm weird, but I think they're just jealous of my 
              ability to make computers do cool things.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm still learning (always will be), but I love the challenge of making AI systems that actually work in the real world. 
              Plus, there's something satisfying about watching a model finally get the right answer after hours of tweaking.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:shadow-lg transition-all duration-200 border border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 mt-1">{highlight.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">{highlight.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
