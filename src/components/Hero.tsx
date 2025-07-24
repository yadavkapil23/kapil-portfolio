import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 py-20">
  <div className="text-center">
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Kapil</h1>
    <p className="text-lg text-blue-400 flex items-center justify-center gap-2 mb-2">
      <MapPin className="inline h-5 w-5" /> Dehradun, Uttarakhand, India
    </p>
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
      Aspiring AI Engineer & Computer Science Student
    </h2>
    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
      B.Tech in Computer Science and Engineering at UPES | Passionate about AI, ML, Deep Learning...
    </p>
    <div className="flex justify-center gap-4 mb-8">
      <a href="mailto:ky8050989@gmail.com" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition">
        <Mail className="inline h-5 w-5 mr-2" /> Email
      </a>
      <a href="https://www.linkedin.com/in/kapil-516749313" className="bg-gray-800 border border-blue-600 text-blue-400 px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition">
        <Linkedin className="inline h-5 w-5 mr-2" /> LinkedIn
      </a>
      <a href="https://github.com/yadavkapil23" className="bg-gray-800 border border-gray-600 text-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition">
        <Github className="inline h-5 w-5 mr-2" /> GitHub
      </a>
    </div>
  </div>
</section>

);

export default Hero;