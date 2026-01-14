
import React from 'react';
import { SearchIcon } from './icons/SearchIcon';
import { LightbulbIcon } from './icons/LightbulbIcon';
import { GiftIcon } from './icons/GiftIcon';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <SearchIcon className="w-8 h-8 text-cyan-400" />,
      title: "1. Enter a Trend",
      description: "You type in a word you've overheard, like 'VSCO' or 'e-girl', into our simple search bar.",
    },
    {
      icon: <LightbulbIcon className="w-8 h-8 text-cyan-400" />,
      title: "2. Get the Deets",
      description: "We break it down in simple terms: what it is, why it's cool, and key items associated with it.",
    },
    {
      icon: <GiftIcon className="w-8 h-8 text-cyan-400" />,
      title: "3. Find the Perfect Gift",
      description: "Get a curated list of top-rated gift ideas, from starter packs to holy grails they'll adore.",
    },
  ];

  return (
    <section id="how-it-works" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-righteous">Your 3-Step Guide to Becoming Cool</h2>
        <p className="mt-3 text-lg text-slate-400">It's easier than you think.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {steps.map((step, index) => (
          <div key={index} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center items-center h-16 w-16 mx-auto mb-6 bg-slate-700 rounded-full">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-slate-400">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
