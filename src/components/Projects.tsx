import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Colored tag styles
const tagColors = [
  "bg-blue-100 text-blue-800",
  "bg-purple-100 text-purple-800",
  "bg-pink-100 text-pink-800",
  "bg-teal-100 text-teal-800",
  "bg-orange-100 text-orange-800",
  "bg-green-100 text-green-800",
  "bg-yellow-100 text-yellow-800"
];

// Gradient backgrounds for cards
const cardBg = [
  "bg-gradient-to-br from-white via-blue-50 to-purple-50",
  "bg-gradient-to-br from-white via-pink-50 to-yellow-50",
  "bg-gradient-to-br from-white via-green-50 to-teal-50"
];

const projects = [
  {
    title: "RAG Based Assistant",
    tech: ["LangChain", "FastAPI", "Docker", "Kubernetes", "FAISS"],
    description: [
      "Engineered a scalable, containerized Retrieval-Augmented Generation application supporting 6+ concurrent users.",
      "Designed a multi-stage query pipeline prioritizing local knowledge base, with LLM Fallback to Wikipedia API and LLM generation, boosting answer accuracy by 35%.",
      "Optimized deployment workflows using Docker and Kubernetes, reducing setup time by 40% and enhancing maintainability."
    ],
    github: "https://github.com/yadavkapil23/RAG_Project.git",
    demo: "https://rag-app-6bwl.onrender.com/"
  },
  {
    title: "DeepFake Detection Model",
    tech: ["Deep Learning", "Xception CNN", "Streamlit"],
    description: [
      "Developed an image-based deepfake detection system by fine-tuning Xception CNN model on facial forensics datasets.",
      "Achieved an accuracy boost from 70% to 83% by applying dropout layers, early stopping, and image augmentation.",
      "Explored model explainability through saliency maps."
    ],
    github: "https://github.com/yadavkapil23/DeepFake_Detection_App.git",
    demo: "https://deepfakedetectorapp.streamlit.app/"
  },
  {
    title: "URLZAP: URL Shortener — CLI | Web App",
    tech: ["Azure App Service", "GitHub Actions", "Argparse"],
    description: [
      "Built a scalable URL shortening tool with both a CLI utility and a Web App, deployed on Azure.",
      "Integrated CI/CD pipeline via GitHub Actions for automated deployments and zero-downtime updates.",
      "Engineered CLI with support for batch processing, URL validation, and persistent usage history tracking.",
      "Optimized for performance with capacity to handle 3K–4K requests daily."
    ],
    github: "https://github.com/yadavkapil23/url-shortener-web-app.git",
    demo: "https://urlzap-c0dabcggbca5ftb0.centralindia-01.azurewebsites.net/"
  }
];

const Projects = () => (
  <section id="projects" className="py-16 bg-gray-900 text-gray-900">
    <div className="container mx-auto px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white mb-2">Projects</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-xl p-8 transition hover:scale-[1.02] ${cardBg[idx % cardBg.length]}`}
          >
            <h3 className="text-xl font-bold text-blue-700 mb-3">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${tagColors[i % tagColors.length]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <ul className="list-disc list-inside text-gray-800 mb-4 ml-4 space-y-1">
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            <div className="flex gap-4 text-gray-600">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center">
                <Github className="h-5 w-5 mr-1" /> Code
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center">
                <ExternalLink className="h-5 w-5 mr-1" /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
