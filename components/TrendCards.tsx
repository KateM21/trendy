
import React from 'react';
import type { Trend } from '../types';
import { TikTokIcon } from './icons/TikTokIcon';
import { InstagramIcon } from './icons/InstagramIcon';

const allTrends: Trend[] = [
    { id: 1, name: "Полювання на 'Stanley Cup'", insight: "Це вірусний символ статусу, а не просто пляшка для води.", hype: 95, image: 'https://picsum.photos/seed/stanley/500/300', ages: [12, 14] },
    { id: 2, name: "Естетика 'Puffy Tech'", insight: "Поєднує футуристичні технології з м'якими, хмарними дизайнами.", hype: 80, image: 'https://picsum.photos/seed/puffy/500/300', ages: [14] },
    { id: 3, name: "Стиль 'Кокетка'", insight: "Надзвичайно жіночна мода у вінтажному стилі з бантами та мереживом.", hype: 88, image: 'https://picsum.photos/seed/coquette/500/300', ages: [12, 14] },
    { id: 4, name: "Феномен 'Скібіді'", insight: "Сюрреалістичний, динамічний YouTube-серіал, що став величезним мемом.", hype: 75, image: 'https://picsum.photos/seed/skibidi/500/300', ages: [6, 10, 12] },
    { id: 5, name: "Бали аури та енергія", insight: "Соціальна гра, в якій оцінюють 'вайб' або присутність людини.", hype: 65, image: 'https://picsum.photos/seed/aura/500/300', ages: [14] },
    { id: 6, name: "Слайми та сенсорні ігри", insight: "Захоплюючий 'АСМР' тренд створення та гри зі слаймами.", hype: 90, image: 'https://picsum.photos/seed/slime/500/300', ages: [6, 10] },
    { id: 7, name: "Roblox 'Adopt Me!'", insight: "Надзвичайно популярна гра про колекціонування та обмін віртуальними тваринами.", hype: 98, image: 'https://picsum.photos/seed/roblox/500/300', ages: [6, 10, 12] },
];

const TrendCard: React.FC<{ trend: Trend }> = ({ trend }) => (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300">
        <div className="relative">
            <img src={trend.image} alt={trend.name} className="w-full h-48 object-cover" />
            <div className="absolute top-2 right-2 flex items-center space-x-2 p-1.5 bg-black/40 rounded-full">
                <TikTokIcon className="w-5 h-5 text-white" />
                <InstagramIcon className="w-5 h-5 text-white" />
            </div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">{trend.name}</h3>
            <p className="text-slate-300 text-sm flex-grow">"{trend.insight}"</p>
            <div className="mt-4">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-semibold text-purple-300">Рівень хайпу</span>
                    <span className="text-sm font-bold text-white">{trend.hype}% Гаряче</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-2.5 rounded-full" style={{ width: `${trend.hype}%` }}></div>
                </div>
            </div>
            <a href="#" className="mt-6 block w-full text-center bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-2 px-4 rounded-full transition-colors">
                Знайти зараз
            </a>
        </div>
    </div>
);

const TrendCards: React.FC<{ selectedAge: number }> = ({ selectedAge }) => {
    const filteredTrends = allTrends.filter(t => t.ages.includes(selectedAge)).slice(0, 3);
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrends.map(trend => <TrendCard key={trend.id} trend={trend} />)}
       </div>
    </section>
  );
};

export default TrendCards;
