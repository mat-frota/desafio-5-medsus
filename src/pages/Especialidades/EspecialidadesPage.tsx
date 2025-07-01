
import React from 'react';
import { SearchIcon, HeartIconFilled, ChevronDownIcon } from '../../assets/constants-EspecialidadesPage.tsx';
import Footer from '../../components/Footer/Footer.tsx';
import Header from '../../components/Header1/Header1.tsx';
import image1 from "../../assets/Images/imagem-1.png"
import image2 from "../../assets/Images/imagem-2.png"
import image3 from "../../assets/Images/imagem-3.png"
import image4 from "../../assets/Images/imagem-4.png"
import image5 from "../../assets/Images/imagem-5.png"
import image6 from "../../assets/Images/imagem-6.png"
import image7 from "../../assets/Images/imagem-7.png"
import image8 from "../../assets/Images/imagem-8.png"
import image9 from "../../assets/Images/imagem-9.png"
import image10 from "../../assets/Images/imagem-10.png"
import image11 from "../../assets/Images/imagem-11.png"
import image12 from "../../assets/Images/imagem-12.png"
import ctaBanner from "../../assets/Images/cta-banner.png"
import { useNavigate } from 'react-router';

interface SpecialtyCardProps {
  imageSrc: string;
  tag: string;
  title: string;
  description: string;
  imageAlt: string;
}

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
            aria-hidden="true" // Decorative, details in text
          />
        </div>
        <button 
          aria-label="Adicionar aos favoritos" 
          className="absolute top-2 left-2 bg-teal-500 text-white p-2 rounded-full shadow-md hover:bg-teal-600 transition-colors"
        >
          <HeartIconFilled className="w-5 h-5" />
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

interface EspecialidadesPageProps {
}

const EspecialidadesPage: React.FC<EspecialidadesPageProps> = () => {
  const navigate = useNavigate()
  const specialties: SpecialtyCardProps[] = [
    { imageSrc: image1, tag: 'Ginecologia', title: 'Bem-estar feminino', description: 'Saúde da mulher com atenção e cuidado integral.', imageAlt: 'Consulta de Ginecologia' },
    { imageSrc: image2, tag: 'Pediatria', title: 'Cuidado com crianças', description: 'Especialistas dedicados à saúde infantil.', imageAlt: 'Consulta de Pediatria' },
    { imageSrc: image3, tag: 'Cardiologia', title: 'Coração saudável', description: 'Acompanhamento para sua saúde cardiovascular.', imageAlt: 'Consulta de Cardiologia' },
    { imageSrc: image4, tag: 'Dermatologia', title: 'Cuidado com sua pele', description: 'Soluções dermatológicas para saúde e estética.', imageAlt: 'Consulta de Dermatologia' },
    { imageSrc: image5, tag: 'Neurologia', title: 'Saúde do cérebro', description: 'Diagnóstico e tratamento de distúrbios neurológicos.', imageAlt: 'Consulta de Neurologia' },
    { imageSrc: image6, tag: 'Ortopedia', title: 'Movimentação', description: 'Tratamentos para ossos, músculos e articulações.', imageAlt: 'Consulta de Ortopedia' },
    { imageSrc: image7, tag: 'Odontologia', title: 'Saúde bucal', description: 'Cuidados odontológicos para se manter saudável.', imageAlt: 'Consulta de Odontologia' },
    { imageSrc: image8, tag: 'Oftalmologia', title: 'Visão em foco', description: 'Cuidados para manter sua saúde ocular em dia.', imageAlt: 'Consulta de Oftalmologia' },
    { imageSrc: image9, tag: 'Endocrinologia', title: 'Equilíbrio hormonal', description: 'Acompanhamento de distúrbios hormonais.', imageAlt: 'Consulta de Endocrinologia' },
    { imageSrc: image10, tag: 'Psiquiatria', title: 'Bem-estar mental', description: 'Atendimento especializado em saúde mental.', imageAlt: 'Consulta de Psiquiatria' },
    { imageSrc: image11, tag: 'Gastroenterologia', title: 'Saúde digestiva', description: 'Cuidado com o sistema digestivo.', imageAlt: 'Consulta de Gastroenterologia' },
    { imageSrc: image12, tag: 'Pneumologia', title: 'Respire melhor', description: 'Tratamentos para doenças respiratórias.', imageAlt: 'Consulta de Pneumologia' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Header/>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow max-w-7xl">
        <section className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-3">
            Especialidades Disponíveis
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escolha a especialidade ideal e agende seu atendimento com poucos cliques.
          </p>
        </section>

        <section className="mb-10 p-4 bg-white rounded-lg shadow">
          <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex-grow">
              <label htmlFor="search-specialty" className="block text-sm font-medium text-gray-700 mb-1">
                Buscar
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search-specialty"
                  name="search-specialty"
                  placeholder="Procure a especialidade desejada"
                  className="w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
                  aria-label="Procurar especialidade"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <label htmlFor="filter-status" className="block text-sm font-medium text-gray-700 mb-1">
                Filtrar
              </label>
              <div className="relative">
                <select
                  id="filter-status"
                  name="filter-status"
                  className="w-full appearance-none pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  defaultValue="all"
                  aria-label="Filtrar por status"
                >
                  <option value="all">Todos os status</option>
                  {/* Add other filter options here if needed */}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {specialties.map((spec) => (
            <SpecialtyCard key={spec.title} {...spec} />
          ))}
        </section>

        <section className="bg-gradient-to-r from-teal-500 to-sky-600 rounded-xl shadow-xl p-8 md:p-12 text-white overflow-hidden">
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
              {/* Placeholder for image - ensure you have an image at this path */}
              <img 
                src={ctaBanner} 
                alt="Profissionais de saúde MedSUS" 
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg object-contain"
                style={{ filter: 'drop-shadow(0 10px 8px rgba(0,0,0,0.3))' }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EspecialidadesPage;
