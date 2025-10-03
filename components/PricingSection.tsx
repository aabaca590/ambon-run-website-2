
import React from 'react';
import Section from './Section';

interface PricingCardProps {
  plan: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);


const PricingCard: React.FC<PricingCardProps> = ({ plan, price, period, features, isPopular = false }) => (
  <div className={`border rounded-2xl p-8 flex flex-col ${isPopular ? 'border-purple-500 border-2' : 'border-zinc-200'}`}>
    {isPopular && <span className="text-xs font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full self-start">most popular</span>}
    <h3 className="text-2xl font-bold mt-4">{plan}</h3>
    <p className="mt-4">
      <span className="text-4xl font-extrabold">${price}</span>
      <span className="text-zinc-500">/{period}</span>
    </p>
    <ul className="mt-6 space-y-3 text-zinc-600 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckIcon />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <a
      href="#"
      className={`mt-8 block text-center font-semibold py-3 px-6 rounded-lg transition-colors duration-300 ${
        isPopular ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-zinc-200 text-zinc-800 hover:bg-zinc-300'
      }`}
    >
      choose plan
    </a>
  </div>
);

const PricingSection: React.FC = () => {
  const plans = [
    {
      plan: 'starter',
      price: '0',
      period: 'month',
      features: ['up to 5 users', 'basic task management', '2 projects', 'community support'],
    },
    {
      plan: 'pro',
      price: '12',
      period: 'user/month',
      features: ['unlimited users', 'advanced task management', 'unlimited projects', 'ai insights', 'priority support'],
      isPopular: true,
    },
    {
      plan: 'enterprise',
      price: 'contact us',
      period: 'custom',
      features: ['everything in pro', 'dedicated account manager', 'sso & advanced security', 'custom integrations'],
    },
  ];

  return (
    <Section id="pricing">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">simple, transparent <span className="text-purple-600">pricing</span>.</h2>
        <p className="mt-4 text-lg text-zinc-600">
          choose the plan that's right for your team. no hidden fees, ever.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((planData) => (
          <PricingCard key={planData.plan} {...planData} />
        ))}
      </div>
    </Section>
  );
};

export default PricingSection;
