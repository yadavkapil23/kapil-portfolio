import React from 'react';

const skillCategories = [
  {
    title: "AI/ML Stuff (My Obsession)",
    barColor: "from-blue-400 to-purple-400",
    skills: [
      { name: "Python", level: 88, note: "My go-to language" },
      { name: "Machine Learning", level: 82, note: "Still learning but getting there" },
      { name: "Deep Learning", level: 78, note: "PyTorch > TensorFlow (fight me)" },
      { name: "NLP", level: 75, note: "Love working with text" },
      { name: "Computer Vision", level: 70, note: "Getting better at this" },
      { name: "RAG", level: 85, note: "Actually built something useful" },
      { name: "LangChain", level: 80, note: "Makes my life easier" },
      { name: "Transformers", level: 65, note: "Still figuring this out" }
    ]
  },
  {
    title: "Languages & Frameworks",
    barColor: "from-pink-500 to-yellow-400",
    skills: [
      { name: "Python", level: 88, note: "Can't live without it" },
      { name: "JavaScript", level: 75, note: "For when I need to make things pretty" },
      { name: "Java", level: 70, note: "Learned it, use it sometimes" },
      { name: "C++", level: 65, note: "For competitive programming" },
      { name: "SQL", level: 80, note: "Database queries are fun" },
      { name: "HTML/CSS", level: 70, note: "Enough to not break things" }
    ]
  },
  {
    title: "Tools & Libraries",
    barColor: "from-green-400 to-blue-500",
    skills: [
      { name: "scikit-learn", level: 85, note: "My ML best friend" },
      { name: "PyTorch", level: 78, note: "Prefer this over TensorFlow" },
      { name: "FastAPI", level: 80, note: "Building APIs is easy now" },
      { name: "Streamlit", level: 85, note: "Quick demos for friends" },
      { name: "Docker", level: 75, note: "Containerization is magic" },
      { name: "Git", level: 90, note: "Version control is life" },
      { name: "Pandas", level: 85, note: "Data manipulation made easy" },
      { name: "NumPy", level: 80, note: "Math operations without the math" }
    ]
  },
  {
    title: "Cloud & DevOps",
    barColor: "from-teal-400 to-emerald-500",
    skills: [
      { name: "Azure", level: 75, note: "My cloud platform of choice" },
      { name: "Docker", level: 75, note: "Containers are amazing" },
      { name: "Kubernetes", level: 60, note: "Still learning this beast" },
      { name: "GitHub Actions", level: 70, note: "CI/CD made simple" },
      { name: "Linux", level: 80, note: "Command line is life" },
      { name: "AWS", level: 40, note: "Dabbled a bit" }
    ]
  },
  {
    title: "Databases",
    barColor: "from-purple-500 to-indigo-400",
    skills: [
      { name: "PostgreSQL", level: 75, note: "My preferred database" },
      { name: "MongoDB", level: 70, note: "NoSQL when I need it" },
      { name: "MySQL", level: 65, note: "Old reliable" },
      { name: "FAISS", level: 70, note: "Vector search is cool" }
    ]
  },
  {
    title: "Soft Skills (The Important Stuff)",
    barColor: "from-orange-400 to-pink-400",
    skills: [
      { name: "Problem Solving", level: 85, note: "Love debugging" },
      { name: "Learning", level: 90, note: "Always curious" },
      { name: "Communication", level: 80, note: "Can explain tech to non-tech people" },
      { name: "Teamwork", level: 85, note: "Collaboration is key" }
    ]
  }
];

const Skills = () => (
  <section id="skills" className="py-20 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">What I Know (Sort Of)</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          The tools and skills I use to build things and solve problems (with varying degrees of success)
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-700">
            <h3 className="text-xl font-bold text-gray-100 mb-6 text-center">{category.title}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-200 font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
                    <div
                      className={`bg-gradient-to-r ${category.barColor} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  {skill.note && (
                    <p className="text-gray-400 text-xs italic opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {skill.note}
                    </p>
                  )}
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