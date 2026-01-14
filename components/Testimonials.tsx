
import React from 'react';

const TestimonialCard: React.FC<{ quote: string; author: string; image: string }> = ({ quote, author, image }) => (
  <figure className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col h-full">
    <blockquote className="flex-grow text-slate-300">
      <p>"{quote}"</p>
    </blockquote>
    <figcaption className="flex items-center mt-6">
      <img className="w-12 h-12 rounded-full object-cover mr-4" src={image} alt={author} />
      <div>
        <div className="font-bold text-white">{author}</div>
        <div className="text-sm text-slate-400">Verified Parent</div>
      </div>
    </figcaption>
  </figure>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "I finally bought a birthday gift my daughter didn't secretly return. This app is a miracle worker!",
      author: "Sarah P., Mom of 2",
      image: "https://picsum.photos/id/1027/100/100",
    },
    {
      quote: "My son mentioned 'dark academia' and I thought it was a new metal band. TrendyKid Navigator saved me from major embarrassment. I even found a cool gift for him.",
      author: "David L., Dad of 1",
      image: "https://picsum.photos/id/1005/100/100",
    },
    {
      quote: "It's like having a cheat sheet for parenting a teenager. 10/10 would recommend to any parent who feels a little lost.",
      author: "Maria G., Mom of 3",
      image: "https://picsum.photos/id/1011/100/100",
    },
  ];

  return (
    <section id="testimonials" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-righteous">Don't Just Take Our Word For It</h2>
        <p className="mt-3 text-lg text-slate-400">See what other parents are saying.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
