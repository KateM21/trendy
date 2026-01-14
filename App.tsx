
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrendCards from './components/TrendCards';
import WhyUseUs from './components/WhyUseUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [selectedAge, setSelectedAge] = useState<number>(14);

  return (
    <div className="bg-slate-900 text-white min-h-screen overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      <main className="relative z-10 flex flex-col items-center">
        <Header />
        <Hero selectedAge={selectedAge} setSelectedAge={setSelectedAge} />
        <TrendCards selectedAge={selectedAge} />
        <WhyUseUs />
        <Footer />
      </main>
    </div>
  );
};

export default App;
