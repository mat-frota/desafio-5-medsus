
import React from 'react';
import image1 from '../../assets/Images/imagem-1.png'
import image2 from '../../assets/Images/imagem-2.png'
import image3 from '../../assets/Images/imagem-3.png'
import image4 from '../../assets/Images/imagem-4.png'
import icon1 from '../../assets/Images/feature-icon-1.png'
import icon2 from '../../assets/Images/feature-icon-2.png'
import icon3 from '../../assets/Images/feature-icon-3.png'
import heroImage from "../../assets/Images/hero-main.png"
import ctaBanner from "../../assets/Images/cta-banner.png"
import Header from '../../components/Header2/Header2';
import { useNavigate } from 'react-router';
import Footer from '../../components/Footer/Footer';

// Interface for Specialty Card Props (copied from EspecialidadesPage for now)
interface SpecialtyCardProps {
  imageSrc: string;
  tag: string;
  title: string;
  description:string;
  imageAlt: string;
}

// Specialty Card Component (copied from EspecialidadesPage for now, could be moved to a shared components folder)
const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ imageSrc, tag, title, description, imageAlt }) => {
  return (
    <div 
      className="bg-sky-50 rounded-xl shadow-lg p-5 flex flex-col group hover:border-2 hover:border-blue-500 transition-all duration-200 cursor-pointer"
      role="article"
      aria-labelledby={`card-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="relative mb-4">
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-40 object-cover"
            aria-hidden="true" 
          />
        </div>
        <button 
          aria-label="Adicionar aos favoritos" 
          className="absolute top-2 left-2 bg-teal-500 text-white p-2 rounded-full shadow-md hover:bg-teal-600 transition-colors"
        >
          {/* <HeartIconFilled className="w-5 h-5" /> */}
        </button>
      </div>
      <span className="inline-block bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 self-start">
        {tag}
      </span>
      <h3 id={`card-title-${title.replace(/\s+/g, '-').toLowerCase()}`} className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm flex-grow">{description}</p>
    </div>
  );
};


interface FeatureItemProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ iconSrc, iconAlt, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col items-center">
    <div className="bg-teal-100 rounded-full p-3 mb-4 inline-flex">
      <img src={iconSrc} alt={iconAlt} className="w-10 h-10 object-contain" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

interface LandingPageProps {
}

const LandingPage: React.FC<LandingPageProps> = ({ 
}) => {
  const features: FeatureItemProps[] = [
    { iconSrc: icon1, iconAlt: 'Ícone de calendário', title: 'Agendamento Fácil', description: 'Agende suas consultas de forma rápida e prática.' },
    { iconSrc: icon2, iconAlt: 'Ícone de relógio com notificações', title: 'Lembretes Automáticos', description: 'Receba notificações por Email e WhatsApp.' },
    { iconSrc: icon3, iconAlt: 'Ícone de escudo de segurança', title: 'Seguro e Confiável', description: 'Seus dados protegidos e com tecnologia de ponta.' },
  ];

  const highlightedSpecialties: SpecialtyCardProps[] = [
    { imageSrc: image1, tag: 'Ginecologia', title: 'Bem-estar feminino', description: 'Saúde da mulher com atenção e cuidado integral.', imageAlt: 'Consulta de Ginecologia' },
    { imageSrc: image2, tag: 'Pediatria', title: 'Cuidado com crianças', description: 'Especialistas dedicados à saúde infantil.', imageAlt: 'Consulta de Pediatria' },
    { imageSrc: image3, tag: 'Cardiologia', title: 'Coração saudável', description: 'Acompanhamento para sua saúde cardiovascular.', imageAlt: 'Consulta de Cardiologia' },
    { imageSrc: image4, tag: 'Dermatologia', title: 'Cuidado com sua pele', description: 'Soluções dermatológicas para saúde e estética.', imageAlt: 'Consulta de Dermatologia' },
  ]

  const navigate = useNavigate()
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 md:pr-10">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Cuidar da sua <span className="text-sky-600">saúde</span> nunca foi tão simples!
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-md mx-auto md:mx-0">
                  Agende consultas médicas online de forma rápida, segura e conveniente.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => navigate("/login")} 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-150 ease-in-out text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label="Agendar uma consulta"
                  >
                    Agendar Consulta
                  </button>
                  <button
                    onClick={() => navigate("informacoes-adicionais")}
                    className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg shadow-sm transition-colors duration-150 ease-in-out text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label="Saiba mais sobre MedSUS"
                  >
                    Saiba Mais
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={heroImage} 
                  alt="Profissional de saúde MedSUS sorrindo" 
                  className="rounded-xl shadow-2xl w-full max-w-md mx-auto md:max-w-full" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Porque Agendar Section */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                Porque Agendar A Sua Consulta Pelo <span className="text-sky-600">MedSUS</span>?
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Uma plataforma completa para gerenciar sua saúde com facilidade e segurança.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <FeatureItem key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Especialidades Disponíveis Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 lg:mb-12">
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Especialidades Disponíveis</h2>
                    <p className="mt-3 text-lg text-gray-600 max-w-xl">
                        Profissionais experientes e preparados para oferecer o melhor em cada área da medicina.
                    </p>
                </div>
                <button
                  onClick={() => navigate("especialidades")}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-150 ease-in-out whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Explorar todas as especialidades"
                >
                  Explorar Todas
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlightedSpecialties.map((spec) => (
                <SpecialtyCard key={spec.title} {...spec} />
              ))}
            </div>
            <div className="text-center mt-12">
              <button
                onClick={() => navigate("especialidades")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-150 ease-in-out text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Ver lista completa de especialidades"
              >
                Ver lista completa de especialidades
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section (Pronto Para Cuidar Melhor Da Sua Saúde?) */}
        <section className="bg-slate-50 py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="bg-gradient-to-r from-teal-500 to-sky-600 rounded-xl shadow-xl p-8 md:p-12 text-white overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-3/5 lg:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Pronto Para Cuidar Melhor Da Sua Saúde?
                    </h2>
                    <p className="text-lg mb-8 opacity-90">
                        Cadastre-se gratuitamente e agende sua primeira consulta hoje mesmo. Simples, rápido e seguro.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <button
                        onClick={() => navigate("/register")}
                        className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-500 text-center"
                        aria-label="Cadastre-se agora"
                        >
                        Cadastre-se Agora
                        </button>
                        <button
                        onClick={() => navigate("/login")}
                        className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-white hover:text-sky-600 transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-500 text-center"
                        aria-label="Acessar conta existente"
                        >
                        Já Tenho Conta
                        </button>
                    </div>
                    </div>
                    <div className="md:w-2/5 lg:w-1/2 flex justify-center md:justify-end">
                    <img 
                        src={ctaBanner}
                        alt="Profissionais de saúde MedSUS" 
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg object-contain"
                        style={{ filter: 'drop-shadow(0 10px 8px rgba(0,0,0,0.3))' }}
                    />
                    </div>
                </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;