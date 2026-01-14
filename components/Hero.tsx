
import React from 'react';

interface HeroProps {
  selectedAge: number;
  setSelectedAge: (age: number) => void;
}

const AGES = [6, 10, 12, 14];

const Hero: React.FC<HeroProps> = ({ selectedAge, setSelectedAge }) => {
  return (
    <section id="hero" className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold font-righteous leading-tight">
        Досить гадати. <span className="text-cyan-400">Час дарувати.</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
        Ідеальний перекладач підліткових трендів для спокою батьків. Оновлюється кожні 48 годин.
      </p>
      
      <div className="mt-10 max-w-2xl mx-auto">
        <label className="block text-center text-lg font-semibold mb-4 text-slate-200">Про що говорить моя дитина?</label>
        <div className="p-2 bg-slate-800/80 border border-slate-700 rounded-full inline-flex items-center space-x-2">
            {AGES.map(age => (
                <button
                    key={age}
                    onClick={() => setSelectedAge(age)}
                    className={`px-6 py-2 rounded-full text-base font-bold transition-colors duration-300 ${
                        selectedAge === age 
                        ? 'bg-purple-600 text-white' 
                        : 'text-slate-300 hover:bg-slate-700/50'
                    }`}
                >
                    {age}{age === 14 ? '+' : ''}
                </button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
