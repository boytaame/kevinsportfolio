import { Mouse, Target, Dumbbell, BookImage, NotebookTabs, Languages } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Mouse,
      title: 'CPS Test Website',
      href: 'https://boytaame.github.io/ClickSpeedTest-boytaame/',
      AIinvolvement: 'AI Involvement: 2/10',
      description: 'A CPS test website to test how fast You can click your mouse.',
      madeusing: 'Made using React'
    },
    {
      icon: Target,
      title: '3D Aim Trainer',
      href: '#',
      AIinvolvement: 'AI Involvement: 2/10',
      description: 'A little game I made to help me aim better in video games.',
      madeusing: 'Made using C# (Unity)'
    },
    {
      icon: Dumbbell,
      title: 'Gym Workout Tracker',
      href: 'https://boytaame-max.github.io/GymSync/',
      AIinvolvement: 'AI Involvement: 3/10',
      description: 'A gym workout tracker to help me track rest times and workouts.',
      madeusing: 'Made using Vanilla HTML/CSS/JS'
    },
    {
      icon: BookImage,
      title: 'Class of Cards',
      href: 'https://class-of-cards.vercel.app/',
      AIinvolvement: 'AI Involvement: 7/10',
      description: 'A video game I made based on character designs that a few of my classmates came up with.',
      madeusing: 'Made using Vanilla HTML/CSS/JS (Vite)'
    },
    {
      icon: NotebookTabs,
      href: 'https://docs.google.com/spreadsheets/d/1l_lQvONdSKrFVlOF-JvbTvLpzymPwdqjjgaaGXsh_nk/edit?gid=2095291761#gid=2095291761',
      title: 'Accounting Book Automator',
      AIinvolvement: 'AI Involvement: 10/10',
      description: 'A program I made to automate the process of creating accounting books, and to demonstrate how powerful AI can be.',
      madeusing: 'Made using JavaScript (Apps Script)'
    },
    {
      icon: Languages,
      href: 'https://drive.google.com/file/d/1aNQVfmbRSFueHkNio4VIrXyKzfKrvleC/view?usp=sharing',
      title: 'CEFR C1 Level English',
      AIinvolvement: 'AI Involvement: 0/10',
      description: "I've been speaking the english language ever since the age of 5. ",
      madeusing: 'Fully Self-Taught.'
    }
  ];

  return (
    <section className="relative py-20 bg-gray-950">
      {/* Bottom gradient to blend into Contact (bg-gray-800) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-gray-800" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 items-center justify-center">
          <h1 className="text-5xl font-bold text-white">What I've done</h1>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 group">
                <div className="bg-red-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors duration-300">
                  <IconComponent className="text-white" size={24} />
                </div>
                <a href={service.href} target="_blank" className="text-white text-xl font-bold mb-4">{service.title}</a>
                <p className="text-gray-400 text-sm leading-relaxed mt-3"><i>| {service.AIinvolvement} |</i></p>
                <p className="text-gray-400 leading-relaxed mt-3">"{service.description}"</p>
                <p className="text-gray-400 text-sm leading-relaxed mt-3"><i>{service.madeusing}</i></p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;