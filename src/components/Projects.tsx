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
      "Built this after watching one too many AI tutorials. Took me 2 weeks to figure out why my embeddings were returning garbage (spoiler: wrong chunk size).",
      "The app can actually answer questions now! It checks my local docs first, then falls back to Wikipedia when it gets confused. Accuracy improved from 'completely wrong' to 'mostly right'.",
      "Deployed it on Azure and it actually works! My friends were impressed until they realized I spent more time debugging Docker than coding the actual AI part."
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
  },
    {
    title: "Quorix : Agent Orchestration System",
    tech: ["LangChain", "FastAPI", "Agentic AI", "LangGraph", "OpenAI API"],
    description: [
      "Built a LangGraph-driven multi-agent orchestration system where specialized agents (Researcher, Coder, Tester, Critic ,  Synthesis) collaborate through loop control and shared state.",
      "Implemented agent nodes as LangChain Runnable chains with structured outputs; added a final synthesis stage aggregating results into summaries, recommendations, and guides.",
      "Optimized deployment using Docker."
    ],
    github: "https://github.com/yadavkapil23/Quorix-Agent.git",
    demo: "https://quorix.onrender.com/"
  },
];

const Projects = () => (
  <section id="projects" className="py-16 bg-gray-900 text-gray-900">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">Stuff I've Built</h2>
        <p className="text-gray-300">Some projects that didn't break (completely)</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`rounded-xl shadow-lg p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${cardBg[idx % cardBg.length]} border border-gray-200`}
          >
            <h3 className="text-xl font-bold text-blue-700 mb-3">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${tagColors[i % tagColors.length]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-2 space-y-2 text-sm leading-relaxed">
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            <div className="flex gap-4 text-gray-600">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center text-sm font-medium">
                <Github className="h-4 w-4 mr-1" /> Code
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
