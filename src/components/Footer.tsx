import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-xl font-bold">
              <span className="text-blue-400">K</span>apil
            </span>
          </div>
          
          <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
            Thanks for checking out my portfolio! Feel free to reach out.
          </p>
          
          <div className="mt-8 pt-8 border-t border-slate-700">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Kapil.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;