
import React from 'react';
import Section from './Section';

const HeroSection: React.FC = () => {
  return (
    <Section id="home" className="pt-24 sm:pt-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter">
            unlock your team's <span className="text-purple-600">full potential</span>.
          </h1>
          <p className="mt-6 text-lg text-zinc-600 max-w-xl mx-auto md:mx-0">
            synergy orb is the all-in-one platform that brings your projects, tasks, and communication together in one seamless, intuitive workspace.
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a
              href="#pricing"
              className="bg-purple-600 text-white text-lg font-semibold px-8 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              start for free
            </a>
            <a
              href="#features"
              className="bg-zinc-200 text-zinc-800 text-lg font-semibold px-8 py-3 rounded-lg hover:bg-zinc-300 transition-colors duration-300"
            >
              learn more
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <img 
            src="https://picsum.photos/seed/tech/600/500" 
            alt="synergy orb dashboard illustration" 
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
