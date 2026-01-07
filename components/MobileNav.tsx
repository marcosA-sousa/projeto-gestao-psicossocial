
import React from 'react';
import { Home, FileText, Mail } from 'lucide-react';

const MobileNav: React.FC = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 z-50">
      <div className="flex justify-around items-center h-16 safe-area-bottom">
        <a href="#" className="flex flex-col items-center justify-center w-full h-full text-primary">
          <Home size={22} strokeWidth={2.5} />
          <span className="text-[10px] font-bold mt-1">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-primary transition-colors">
          <FileText size={22} />
          <span className="text-[10px] mt-1">Docs</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-primary transition-colors">
          <Mail size={22} />
          <span className="text-[10px] mt-1">Contato</span>
        </a>
      </div>
    </nav>
  );
};

export default MobileNav;
