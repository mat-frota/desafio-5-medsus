
import React from 'react';
import { MedSusLogoIcon } from '../../assets/constants';
import { useNavigate } from 'react-router';

const Header: React.FC = () => {
  const navigate = useNavigate()
  return (
    <header className="py-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"> {/* Changed max-w-6xl to max-w-7xl for consistency */}
        <div className="flex items-center justify-between h-16 bg-[#CFEDFB] rounded-xl shadow-lg px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex-shrink-0">
            <button onClick={() => navigate("/")} aria-label="Página Inicial MedSUS">
              <MedSusLogoIcon />
            </button>
          </div>
          
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-2 lg:space-x-4">
            {/* Navigation links can be added here if needed in the future */}
          </nav>

          <div className="flex items-center space-x-4 ml-auto">
            <button
            onClick={() => navigate("/login")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-150 ease-in-out"
              aria-label="Entrar na sua conta"
            >
              Entrar
            </button>
            <button
            onClick={() => navigate("/register")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#CFEDFB]"
              aria-label="Cadastrar uma nova conta"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;