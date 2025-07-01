
import React from 'react';
// import Footer from './Footer';
import Header from '../../components/Header1/Header1';
import Footer from '../../components/Footer/Footer';

interface InformacoesAdicionaisPageProps {
}

const InformacoesAdicionaisPage: React.FC<InformacoesAdicionaisPageProps> = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Página de <span className="text-sky-600">Informações Adicionais</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Esta página reúne conteúdos complementares que ajudam a esclarecer o uso e os recursos do MedSUS.
          </p>
        </section>

        <section className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Detalhes</h2>
          <p className="text-gray-600 mb-4">
            Aqui você encontra conteúdos essenciais para garantir uma experiência transparente, segura e completa ao utilizar nosso aplicativo.
            Nesta área, disponibilizamos informações como termos de uso, políticas de privacidade, e detalhes sobre funcionalidades específicas da plataforma. Nosso objetivo é assegurar que você compreenda plenamente seus direitos, deveres e os recursos disponíveis.
            Fique à vontade para explorar e tirar suas dúvidas.
          </p>
          <p className="text-gray-600">
            Todas as informações foram organizadas com foco em clareza, acessibilidade e responsabilidade com os dados do usuário.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default InformacoesAdicionaisPage;
