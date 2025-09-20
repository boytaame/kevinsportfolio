const About = () => {
  const skills = [
    { name: 'HTML', color: 'bg-orange-500' },
    { name: 'CSS', color: 'bg-blue-500' },
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'C#', color: 'bg-purple-600' },
    { name: 'AI', color: 'bg-gray-800' }
  ];

  return (
    <section id="about" className="relative py-20 bg-gray-900">
      {/* Bottom gradient to blend into Services (bg-gray-950) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-gray-950" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 bg-red-600 rounded-lg overflow-hidden">
                <img 
                  src="https://i.imgur.com/HugkZv5.png"
                  alt="Kevin Jerome"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="text-red-500 text-sm font-semibold mb-2">▶ About me</p>
              <h2 className="text-4xl font-bold text-white mb-6">Who Am I</h2>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              My name is Kevin Jerome, and I am a passionate developer with aspirations for being an entrepreneur.
              My early life consisted of a few key things; nickelodeon, video games, and creativity. I spent my days
              carving play-doh, drawing frames for still pictures and/or flipbooks, and writing stories. It wasn't until
              I laid my eyes on programming that I started to see the potential for creating something that could bring my ideas to life.
              I started learning HTML, CSS, and JavaScript on my phone, before eventually getting a computer, 
              then transitioning to C# to build a video game using Unity, and then finally learning more about 
              tech stacks and further honing my skills in software development.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              I see AI not as a 'job killer', but as an amplifier for those who know what they're doing. AI has played
              a role in most of my most recent work, and I expect it to continue playing a role in amplifying the speed
              in which I can complete my future work. I understand that speed is a very important factor in the game of
              entrepreneurship, and I intend to utilize AI as the accelerator that it is meant to be.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2 bg-gray-700 p-2 rounded-lg">
                  <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
                  <span className="text-white text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;