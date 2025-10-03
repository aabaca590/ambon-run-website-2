
import React from 'react';
import Section from './Section';

const ContactSection: React.FC = () => {
  return (
    <Section id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">ready to get started?</h2>
        <p className="mt-4 text-lg text-zinc-600">
          have a question or want to see a demo? drop us a line and we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="mt-12 max-w-xl mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="your name"
              className="block w-full rounded-md border-zinc-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-3"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your email"
              className="block w-full rounded-md border-zinc-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-3"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">message</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              placeholder="your message"
              className="block w-full rounded-md border-zinc-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-3"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full justify-center rounded-lg bg-purple-600 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors duration-300"
            >
              send message
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default ContactSection;
