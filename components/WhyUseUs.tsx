
import React from 'react';

const WhyUseUs: React.FC = () => {
  return (
    <section className="w-full bg-slate-900/50 py-16">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-r border-slate-700/50 pr-4">
                 <h3 className="text-2xl font-bold text-cyan-400">Більше ніяких кринжових подарунків.</h3>
            </div>
             <div className="border-r border-slate-700/50 pr-4">
                 <h3 className="text-2xl font-bold text-cyan-400">100% точність трендів.</h3>
            </div>
             <div>
                 <h3 className="text-2xl font-bold text-cyan-400">Економте години на пошуки.</h3>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUseUs;
