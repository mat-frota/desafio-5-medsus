import React from 'react';
import Header from '../../components/Header/Header';  // O Header já lida com a navegação
import { BookIcon, EyeIcon } from '../../assets/constants';
import Footer from '../../components/Footer/Footer';
import icone1 from "../../assets/Images/icone1.png";
import icone2 from "../../assets/Images/icone2.png";
import icone3 from "../../assets/Images/icone3.png";
import icone4 from "../../assets/Images/icone4.png";

interface SobrePageProps {}

const SobrePage: React.FC<SobrePageProps> = () => {
  const values = [
    {
      imageSrc: icone1,
      altText: 'Ícone de Segurança',
      title: 'Segurança',
      description: 'Protegemos seus dados com os mais altos padrões de segurança',
    },
    {
      imageSrc: icone2,
      altText: 'Ícone de Humanização',
      title: 'Humanização',
      description: 'Colocamos o cuidado humano no centro de tudo que fazemos',
    },
    {
      imageSrc: icone3,
      altText: 'Ícone de Agilidade',
      title: 'Agilidade',
      description: 'Processos rápidos e eficientes para sua comodidade',
    },
    {
      imageSrc: icone4,
      altText: 'Ícone de Cuidado',
      title: 'Cuidado',
      description: 'Dedicação integral ao bem-estar de nossos usuários',
    },
  ];

  return (
    <>
      {/* Remover a propriedade navigateTo */}
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sobre O MedSUS Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Sobre O <span className="text-sky-600">MedSUS?</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Transformando o acesso aos cuidados de saúde através da tecnologia, conectando pacientes e profissionais de forma simples e eficiente.
          </p>
        </section>

        {/* Nossa Missão & Nossa Visão Section */}
        <section className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-16">
          {/* Nossa Missão Card */}
          <div className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white p-8 rounded-xl shadow-xl flex flex-col">
            <div className="flex items-center mb-4">
              <BookIcon className="w-8 h-8 mr-3" />
              <h2 className="text-3xl font-bold">Nossa Missão</h2>
            </div>
            <p className="mb-4 text-base">
              Democratizar o acesso à saúde por meio de uma plataforma digital que <strong>conecta pacientes a profissionais</strong> com agilidade, segurança e eficiência.
            </p>
            <p className="text-base">
              Acreditamos que a tecnologia deve tornar os <strong>cuidados médicos mais acessíveis, organizados e centrados no bem-estar do paciente.</strong>
            </p>
          </div>

          {/* Nossa Visão Card */}
          <div className="bg-gradient-to-br from-sky-500 to-cyan-500 text-white p-8 rounded-xl shadow-xl flex flex-col">
            <div className="flex items-center mb-4">
              <EyeIcon className="w-8 h-8 mr-3" />
              <h2 className="text-3xl font-bold">Nossa Visão</h2>
            </div>
            <p className="mb-4 text-base">
              Ser <strong>referência nacional em agendamento médico digital,</strong> reconhecida pela excelência no atendimento e pela inovação tecnológica.
            </p>
            <p className="text-base">
              Queremos transformar a experiência do paciente, <strong>tornando o agendamento de consultas</strong> tão <strong>simples</strong> quanto solicitar um transporte por aplicativo.
            </p>
          </div>
        </section>

        {/* Nossos Valores Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
            Nossos Valores
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
                <div className="mb-4 h-20 w-20 flex items-center justify-center">
                  <img
                    src={value.imageSrc}
                    alt={value.altText}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SobrePage;
