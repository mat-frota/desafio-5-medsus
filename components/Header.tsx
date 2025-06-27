import React, { useState, useEffect, useRef } from 'react';
import { MedSusLogoIcon, UserIcon } from '../constants';
import { Page } from '../App';

interface HeaderProps {
  navigateTo: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
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

  const handleLinkClick = (page: Page) => {
    navigateTo(page);
    setIsDropdownOpen(false);
  };

  return (
    <header className="py-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center justify-between h-16 bg-sky-100 rounded-xl shadow-lg px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigateTo(Page.LANDING)}>
            <MedSusLogoIcon />
          </div>
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-2 lg:space-x-4">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateTo(Page.HISTORICO); }}
              className="text-gray-700 hover:text-teal-700 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors"
            >
              Histórico
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateTo(Page.SOBRE); }}
              className="text-gray-700 hover:text-teal-700 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors"
            >
              Sobre
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateTo(Page.CHAT); }}
              className="text-gray-700 hover:text-teal-700 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors"
            >
              Chat
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateTo(Page.AGENDAR_CONSULTA); }}
              className="text-gray-700 hover:text-teal-700 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors"
            >
              Agendar Consulta
            </a>
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
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); handleLinkClick(Page.USER_PROFILE); }}
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-sky-100 hover:text-teal-700 w-full text-left transition-colors duration-150"
                    role="menuitem"
                    id="user-menu-item-0"
                  >
                    Meu Perfil
                  </a>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); handleLinkClick(Page.LANDING); }}
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-sky-100 hover:text-teal-700 w-full text-left transition-colors duration-150"
                    role="menuitem"
                    id="user-menu-item-1"
                  >
                    Sair
                  </a>
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
