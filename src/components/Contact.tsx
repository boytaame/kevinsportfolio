import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6">
            Hence, lies the end of Kevin's portfolio
          </h2>
          <p className="italic font-serif text-gray-400 text-lg leading-relaxed mb-12">
            "It ain't about how hard you can hit, it's about how hard you can get hit and keep moving forward." <br/>
            - Rocky Balboa
          </p>
          
          <a href="https://wa.me/+6281388286665" target="_blank" className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 mb-16">
            Contact
          </a>
          
          <div className="flex justify-center space-x-8 mt-12">
            <a href="https://www.instagram.com/kevin.jerome_/" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Instagram size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-700 flex justify-center">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">KJ</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;