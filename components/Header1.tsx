
import React from 'react';
import { MedSusLogoIcon } from '../constants';

interface HeaderProps {
  onNavigateToLanding: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateToLanding }) => {
  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigateToLanding();
  };

  return (
    <header className="py-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center justify-between h-16 bg-gradient-to-r from-sky-100 to-blue-200 rounded-xl shadow-lg px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex-shrink-0">
            <a 
              href="#" 
              onClick={handleNavigate}
              aria-label="Página Inicial MedSUS"
            >
              <MedSusLogoIcon />
            </a>
          </div>
          
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-2 lg:space-x-4">
            {/* Navigation links removed as per request */}
          </nav>

          <div className="flex-shrink-0 ml-auto">
            <a
              href="#"
              onClick={handleNavigate}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-sky-100"
              aria-label="Voltar para a página inicial"
            >
              Voltar
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;