const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gray-950 flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.imgur.com/tG3d66f.png')" }}
    >
      <div className="absolute inset-0 bg-black/30" />
      {/* Bottom gradient to blend into About (bg-gray-900) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-gray-900" />
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-red-500 text-lg font-medium">Hello, My Name Is</p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              KEVIN JEROME LIEM
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            A lifelong creator with a passion for bringing ideas to life. My journey began with drawings, flipbooks, and stories, 
            <br />
            but upon writing my first lines of code, I discovered a vast landscape of creativity that sparked an eternal flame of inspiration within me.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact me
            </button>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-90 h-90 bg-red-600 rounded-lg overflow-hidden">
                <img 
                  src="https://i.imgur.com/fW6ifOe.jpeg"
                  alt="Kevin Jerome"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
