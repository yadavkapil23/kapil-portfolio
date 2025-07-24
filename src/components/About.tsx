import React from 'react';
import { Code, Brain, Cloud, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming Excellence",
      description: "Proficient in Python, Java, C++, and JavaScript with strong problem-solving skills"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI/ML Expertise",
      description: "Deep understanding of machine learning algorithms, neural networks, and deep learning frameworks"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "DevOps & Cloud",
      description: "Skilled in Docker, Kubernetes, Azure, CI/CD, and cloud infrastructure automation for scalable deployments"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovation Mindset",
      description: "Always exploring cutting-edge technologies and their applications in real-world scenarios"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">My Journey Towards AI Engineering</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              As a Computer Science Engineering student, I've been fascinated by the potential of artificial 
              intelligence to transform industries and solve complex problems. My academic journey has provided 
              me with a strong foundation in algorithms, data structures, and software development.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm particularly passionate about machine learning, deep learning, and natural language processing. 
              Through various projects and coursework, I've gained hands-on experience with popular AI frameworks 
              and tools, always staying updated with the latest advancements in the field.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My goal is to become a skilled AI Engineer who can design and implement intelligent systems 
              that make a meaningful impact on society while pushing the boundaries of what's possible with technology.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 mt-1">{highlight.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">{highlight.title}</h4>
                    <p className="text-gray-300 text-sm">{highlight.description}</p>
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
