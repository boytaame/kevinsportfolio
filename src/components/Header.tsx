import { Home, User, Mail } from 'lucide-react';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">KJ</span>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white hover:text-red-500 transition-colors duration-300 flex items-center space-x-2"
          >
            <Home size={16} />
            <span>HOME</span>
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-red-500 transition-colors duration-300 flex items-center space-x-2"
          >
            <User size={16} />
            <span>ABOUT ME</span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-red-500 transition-colors duration-300 flex items-center space-x-2"
          >
            <Mail size={16} />
            <span>CONTACT</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;