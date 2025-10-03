
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} synergy orb. all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
