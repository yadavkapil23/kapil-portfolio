import React from 'react';

const skillCategories = [
  {
    title: "Core Concepts",
    barColor: "from-blue-400 to-purple-400",
    skills: [
      { name: "Data Structures", level: 90 },
      { name: "RAG", level: 85 },
      { name: "Computer Vision", level: 80 },
      { name: "Machine Learning", level: 90 },
      { name: "Transformers", level: 80 },
      { name: "Deep Learning", level: 85 },
      { name: "Generative AI", level: 80 },
      { name: "NLP", level: 85 },
      { name: "LangGraph", level: 75 },
      { name: "LLM", level: 75 }
    ]
  },
  {
    title: "Languages",
    barColor: "from-pink-500 to-yellow-400",
    skills: [
      { name: "Python", level: 95 },
      { name: "C/C++", level: 85 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 80 },
      { name: "SQL", level: 85 },
      { name: "HTML5", level: 80 },
      { name: "CSS3", level: 80 }
    ]
  },
  {
    title: "ML/DL & Frameworks",
    barColor: "from-green-400 to-blue-500",
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "Pytorch", level: 80 },
      { name: "scikit-learn", level: 90 },
      { name: "OpenCV", level: 80 },
      { name: "Streamlit", level: 80 },
      { name: "NLTK", level: 75 },
      { name: "LangChain", level: 80 },
      { name: "Django", level: 75 },
      { name: "FastAPI", level: 80 },
      { name: "Flask", level: 80 },
      { name: "Pydantic", level: 70 }
    ]
  },
  {
    title: "DevOps & Cloud",
    barColor: "from-teal-400 to-emerald-500",
    skills: [
      { name: "Microsoft Azure", level: 80 },
      { name: "Azure VM", level: 75 },
      { name: "Azure Storage", level: 75 },
      { name: "Azure Functions", level: 70 },
      { name: "Azure ML", level: 75 },
      { name: "Azure Cognitive Services", level: 70 },
      { name: "Azure DevOps", level: 70 },
      { name: "Docker", level: 80 },
      { name: "Kubernetes", level: 75 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Bitbucket", level: 70 },
      { name: "GitLab CI/CD", level: 70 },
      { name: "Jenkins", level: 70 },
      { name: "Ansible", level: 65 },
      { name: "Terraform", level: 65 },
      { name: "Jira", level: 70 },
      { name: "DevOps", level: 80 }
    ]
  },
  {
    title: "Databases",
    barColor: "from-purple-500 to-indigo-400",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 75 },
      { name: "FAISS", level: 70 },
      { name: "ChromaDB", level: 70 }
    ]
  },
  {
    title: "Soft Skills",
    barColor: "from-orange-400 to-pink-400",
    skills: [
      { name: "Communication", level: 90 },
      { name: "Team Work", level: 90 },
      { name: "Public Speaking", level: 80 },
      { name: "Collaboration", level: 85 }
    ]
  }
];

const Skills = () => (
  <section id="skills" className="py-20 bg-gray-900">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">Skills & Expertise</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A comprehensive toolkit for building intelligent systems and solving complex problems
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-bold text-gray-100 mb-6 text-center">{category.title}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-200 font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${category.barColor} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;