
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
            Este é um conteúdo placeholder para a nova página de informações adicionais.
          </p>
        </section>

        <section className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Detalhes</h2>
          <p className="text-gray-600 mb-4">
            Aqui você pode adicionar qualquer conteúdo relevante para esta nova seção do seu aplicativo MedSUS.
            Pode ser sobre termos de serviço, políticas de privacidade, detalhes sobre uma funcionalidade específica,
            ou qualquer outra informação que você deseje fornecer aos seus usuários.
          </p>
          <p className="text-gray-600">
            Lembre-se de estruturar o conteúdo de forma clara e acessível.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default InformacoesAdicionaisPage;
