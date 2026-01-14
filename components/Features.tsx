
import React from 'react';

const FeatureCard: React.FC<{ title: string; description: string; icon: string }> = ({ title, description, icon }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-lg font-bold text-cyan-300">{title}</h3>
    <p className="text-slate-400 mt-1 text-sm">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-righteous">Why Parents (and Kids) Love Us</h2>
        <p className="mt-3 text-lg text-slate-400">We do more than just define slang.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard 
          icon="📚"
          title="Gen-Z Glossary" 
          description="Our constantly updated dictionary of teen slang and trends, explained in plain English." 
        />
        <FeatureCard 
          icon="🤖"
          title="Gift Genius AI" 
          description="AI-powered gift recommendations that match their unique interests and personality." 
        />
        <FeatureCard 
          icon="✅"
          title="Parent-Approved" 
          description="We focus on clear, simple explanations. No advanced degree in meme-ology required." 
        />
        <FeatureCard 
          icon="📈"
          title="Trend Alerts" 
          description="Stay ahead of the curve with updates on what's new, what's hot, and what's next." 
        />
      </div>
    </section>
  );
};

export default Features;
