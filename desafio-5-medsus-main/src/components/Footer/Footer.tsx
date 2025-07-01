
import React from 'react';
import { EmailIcon, FacebookIcon, InstagramIcon, LocationIcon, MedSusLogoIcon, PhoneIcon, TwitterIcon } from '../../assets/constants';
// import { 
//   MedSusLogoIcon, PhoneIcon, EmailIcon, LocationIcon, 
//   FacebookIcon, InstagramIcon, TwitterIcon 
// } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <MedSusLogoIcon />
            <p className="mt-3 text-gray-600 text-sm">
              Conectando você aos melhores profissionais de saúde de forma simples e segura.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600"><FacebookIcon /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600"><InstagramIcon /></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600"><TwitterIcon /></a>
            </div>
          </div>
          <div>
            {/* Could add navigation links here if needed */}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Contato</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <PhoneIcon className="mr-2 text-teal-500" /> (11) 91234-5678
              </li>
              <li className="flex items-center">
                <EmailIcon className="mr-2 text-teal-500" /> contato@medsus.com.br
              </li>
              <li className="flex items-center">
                <LocationIcon className="mr-2 text-teal-500" /> São Paulo, SP, Brasil
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} MedSUS. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
