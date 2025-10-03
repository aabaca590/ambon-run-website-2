
import React from 'react';
import Section from './Section';

const FeatureIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-purple-100 text-purple-600 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
    {children}
  </div>
);

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="p-6">
    <FeatureIcon>{icon}</FeatureIcon>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-zinc-600">{description}</p>
  </div>
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'seamless integration',
      description: 'connect with your favorite tools in just a few clicks. automate workflows and keep everything in sync.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    },
    {
      title: 'ai-powered insights',
      description: 'gain valuable insights with our intelligent analytics. predict project timelines and identify bottlenecks before they happen.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    },
    {
      title: 'collaborative workspace',
      description: 'work together in real-time with shared tasks, documents, and whiteboards. foster creativity and keep everyone aligned.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    },
  ];

  return (
    <Section id="features" className="bg-zinc-50">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">everything you need, nothing you don't.</h2>
        <p className="mt-4 text-lg text-zinc-600">
          discover features designed to eliminate friction and amplify your team's output.
        </p>
      </div>
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </Section>
  );
};

export default FeaturesSection;
