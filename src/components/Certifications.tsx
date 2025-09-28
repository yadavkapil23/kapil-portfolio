import React from 'react';
import { BadgeCheck } from 'lucide-react';

const certifications = [
  {
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    provider: "Oracle",
    date: "Sept 2025",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=1A6138C47969578C2BF7C9DEBC89AA3F7FE2AB9A44F7EF8C5A37C9C5DC3954E0"
  },

  {
    title: " Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    provider: "Oracle",
    date: "Sept 2025",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=1A6138C47969578C2BF7C9DEBC89AA3FD3B895747B5A50A0331A98E6CC843795"
  },
  {
    title: "Big Data Foundations",
    provider: "IBM",
    date: "Aug 2025",
    link: "https://www.credly.com/badges/df79b9a9-b8e7-47bc-bd6e-9c3d462d6860/public_url"
  },
  {
    title: "Generative AI With Diffusion Models",
    provider: "Amazon Web Services",
    date: "Aug 2025",
    link: "amazon.com"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    provider: "Oracle",
    date: "July 2025",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=402BB2BADDA145B13EE2BDC1401A2D0398E57EC1379697D20062BD44E83C3613"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    provider: "Oracle",
    date: "July 2025",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=8B35503E703130072AF3251695A24079BA4C6AA0BD32B731E2226438C569534E"
  },

  {
    title: "Getting Started with LLMs",
    provider: "Skillsoft",
    date: "May 2025",
    link: "https://skillsoft.digitalbadges.skillsoft.com/e52f8934-bf23-4f44-991a-8926dd11183a"
  },


  {
    title: "Introduction to Generative AI",
    provider: "Coursera",
    date: "Dec 2023",
    link: "https://coursera.org/verify/HC2ZPH4MJ6XB"
  },
  {
    title: "Foundations of User Experience (UX) Design",
    provider: "Coursera · Google",
    date: "Jul 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/XYZ789"
  }
];

// Gradient backgrounds
const cardBg = [
  "bg-gradient-to-br from-white via-purple-50 to-blue-50",
  "bg-gradient-to-br from-white via-pink-50 to-yellow-50",
  "bg-gradient-to-br from-white via-green-50 to-teal-50"
];

const Certifications = () => (
  <section id="certifications" className="py-16 bg-gray-900 text-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Certifications</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className={`rounded-xl shadow-lg p-6 ${cardBg[idx % cardBg.length]}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <BadgeCheck className="text-green-600 h-5 w-5" />
              <h3 className="text-lg font-semibold text-gray-800">
                {cert.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 mb-1">{cert.provider}</p>
            <p className="text-sm text-gray-500 mb-3">{cert.date}</p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-blue-600 hover:underline"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
