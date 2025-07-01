import React, { useState, useEffect, useRef } from 'react';
import { MedSusLogoIcon, UserIcon } from '../../assets/constants';
import { useNavigate } from 'react-router';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleLinkClick = (page: any) => {
    navigate(page);
    setIsDropdownOpen(false);
  };

  return (
    <header className="py-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center justify-between h-16 bg-sky-100 rounded-xl shadow-lg px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
            <MedSusLogoIcon />
          </div>
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-2 lg:space-x-4">
            <button
              onClick={() => navigate("/history")}
              className="text-gray-700 hover:text-teal-700 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors"
            >
              Histórico
            </button>
            <button
              onClick={() => navigate("/sobre")}
              className="text-gray-700 hover:text-teal-700 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => navigate("/chat")}
              className="text-gray-700 hover:text-teal-700 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors"
            >
              Chat
            </button>
            <button
              onClick={() => navigate("/agendar-consulta")}
              className="text-gray-700 hover:text-teal-700 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors"
            >
              Agendar Consulta
            </button>
          </nav>
          <div className="relative flex-shrink-0 ml-auto md:ml-0">
            <button
              ref={buttonRef}
              id="user-menu-button"
              aria-label="User menu"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              onClick={toggleDropdown}
              className="p-1 rounded-full text-teal-600 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-100 focus:ring-teal-500"
            >
              <UserIcon className="h-7 w-7" />
            </button>

            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
              >
                <div className="py-1" role="none">
                  <button
                    onClick={() => { handleLinkClick("/user-profile"); }}
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-sky-100 hover:text-teal-700 w-full text-left transition-colors duration-150"
                    role="menuitem"
                    id="user-menu-item-0"
                  >
                    Meu Perfil
                  </button>
                  <button
                    onClick={() => { handleLinkClick("/"); }}
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-sky-100 hover:text-teal-700 w-full text-left transition-colors duration-150"
                    role="menuitem"
                    id="user-menu-item-1"
                  >
                    Sair
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
