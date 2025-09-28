import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20">
  <div className="text-center max-w-4xl mx-auto px-6">
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
      Hey, I'm Kapil 👋
    </h1>
    <p className="text-lg text-blue-300 flex items-center justify-center gap-2 mb-3">
      <MapPin className="inline h-5 w-5" /> Living in Dehradun, India
    </p>
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6 leading-relaxed">
      CS Student who's obsessed with AI & building cool stuff
    </h2>
    <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
      Currently studying Computer Science at UPES. I spend most of my time experimenting with machine learning, 
      building random projects, and trying to figure out how to make computers think (spoiler: it's harder than it looks 😅).
    </p>
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      <a href="mailto:ky8050989@gmail.com" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
        <Mail className="inline h-5 w-5 mr-2" /> Let's chat!
      </a>
      <a href="https://www.linkedin.com/in/kapil-516749313" className="bg-slate-800 border border-blue-400 text-blue-300 px-6 py-3 rounded-lg font-medium hover:bg-blue-900 hover:border-blue-300 transition-all duration-200">
        <Linkedin className="inline h-5 w-5 mr-2" /> LinkedIn
      </a>
      <a href="https://github.com/yadavkapil23" className="bg-slate-800 border border-gray-500 text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-700 hover:border-gray-400 transition-all duration-200">
        <Github className="inline h-5 w-5 mr-2" /> GitHub
      </a>
    </div>
  </div>
</section>

);

export default Hero;