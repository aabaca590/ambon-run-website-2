
import React from 'react';
import Section from './Section';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, title, avatarUrl }) => (
  <figure className="bg-zinc-100 p-8 rounded-2xl">
    <blockquote className="text-zinc-800 text-lg">
      <p>"{quote}"</p>
    </blockquote>
    <figcaption className="flex items-center mt-6">
      <img className="w-12 h-12 rounded-full" src={avatarUrl} alt={author} />
      <div className="ml-4">
        <div className="font-bold">{author}</div>
        <div className="text-zinc-600 text-sm">{title}</div>
      </div>
    </figcaption>
  </figure>
);

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: 'synergy orb has completely transformed how our team collaborates. our productivity has skyrocketed, and project management is finally a breeze.',
      author: 'sarah l.',
      title: 'ceo, tech innovators',
      avatarUrl: 'https://picsum.photos/seed/woman1/100/100'
    },
    {
      quote: 'the intuitive interface and powerful ai features make this an indispensable tool. we were up and running in minutes.',
      author: 'mark c.',
      title: 'product manager, creative solutions',
      avatarUrl: 'https://picsum.photos/seed/man1/100/100'
    },
    {
      quote: 'finally, a tool that consolidates everything we need. no more switching between a dozen apps. it just works.',
      author: 'emily r.',
      title: 'founder, startup collective',
      avatarUrl: 'https://picsum.photos/seed/woman2/100/100'
    }
  ];

  return (
    <Section id="testimonials" className="bg-zinc-50">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">loved by teams <span className="text-purple-600">worldwide</span>.</h2>
        <p className="mt-4 text-lg text-zinc-600">
          don't just take our word for it. here's what our customers are saying.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.author} {...testimonial} />
        ))}
      </div>
    </Section>
  );
};

export default TestimonialsSection;
