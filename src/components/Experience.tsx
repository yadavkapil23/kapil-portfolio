import React from 'react';
import { Briefcase, Users, Globe, School } from 'lucide-react';

const experiences = [
  {
    title: "Intern",
    company: "Weazy Infotech",
    duration: "Jun 2025 – Present (2 mos)",
    location: "India – Remote",
    description: [
      "Contributing as an AI Intern to the development and integration of AI-powered features within retail and e-commerce platforms.",
      "Assisting in building and optimizing machine learning models for customer analytics and recommendation systems.",
      "Supporting chatbot development using NLP techniques to improve user interaction and support automation.",
      "Collaborating with product and tech teams to research AI-driven solutions for marketing automation and personalized customer engagement.",
      "Conducting data preprocessing, feature engineering, and model evaluation to support various AI projects."
    ],
    skills: ["Artificial Intelligence (AI)", "FastAPI", "Machine Learning", "Back-End Web Development"],
    icon: <Briefcase className="h-7 w-7 text-blue-600" />
  },
  {
    title: "Student Developer",
    company: "OPEN Community",
    duration: "Feb 2025 – Present (6 mos)",
    location: "Dehradun, Uttarakhand, India – On-site",
    description: [
      "Contributing to the Open Source as Student Developer at the OPEN."
    ],
    skills: ["Open-Source Software", "Flutter", "Git", "Linux"],
    icon: <Users className="h-7 w-7 text-green-600" />
  },
  {
    title: "Member",
    company: "GDG Gurugram",
    duration: "Nov 2023 – Present (1 yr 11 mos)",
    location: "Gurugram, Haryana, India – Remote",
    description: [
      "Active member of GDG Gurugram, engaging with a vibrant community of developers and tech enthusiasts.",
      "Participate in events, workshops, and tech talks, gaining insights into the latest Google technologies.",
      "Contribute to community-driven learning and collaboration."
    ],
    skills: ["Community Engagement", "Google Workspace", "Public Speaking", "Public Relations"],
    icon: <Globe className="h-7 w-7 text-purple-600" />
  },
  {
    title: "Member",
    company: "UPES IET Community",
    duration: "Feb 2025 – Present (6 mos)",
    location: "Dehradun, Uttarakhand, India – On-site",
    description: [],
    skills: [],
    icon: <School className="h-7 w-7 text-yellow-600" />
  },
  {
    title: "Member",
    company: "GDG New Delhi",
    duration: "Jan 2024 – Present (1 yr 9 mos)",
    location: "New Delhi, Delhi, India – Remote",
    description: [],
    skills: [],
    icon: <Globe className="h-7 w-7 text-blue-400" />
  },
  {
    title: "Summer Intern",
    company: "Self Reliant India (SRI)",
    duration: "Jul 2024 – Jul 2024 (2 mos)",
    location: "Rewari, Haryana, India – On-site",
    description: [
      "Collaborated with various groups to serve the education sector, making education accessible to the needy.",
      "Raised funds for making education accessible to all."
    ],
    skills: ["Community Engagement", "Communication"],
    icon: <Users className="h-7 w-7 text-green-400" />
  }
];

const Experience = () => (
  <section id="experience" className="py-16 bg-gray-900">
    <div className="container mx-auto px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white mb-2">Experience</h2>
      </div>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-white p-8 shadow-md border border-gray-200"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div className="flex items-center gap-4">
                {exp.icon}
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.title}{' '}
                  <span className="font-normal text-gray-600">– {exp.company}</span>
                </h3>
              </div>
              <div className="text-sm text-gray-500 mt-2 md:mt-0">
                {exp.duration} | {exp.location}
              </div>
            </div>
            {exp.description.length > 0 && (
              <ul className="list-disc list-inside text-gray-700 ml-4 mb-2 space-y-1">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            )}
            {exp.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
