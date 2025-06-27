import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import AgendarConsultaPage from './components/AgendarConsultaPage';
import SobrePage2 from './components/SobrePage2';
import UserProfile from './components/UserProfile';
import InformacoesAdicionaisPage from './components/InformacoesAdicionaisPage';
import EspecialidadesPage from './components/EspecialidadesPage';
import ChatPage from './components/ChatPage';
import HistoricoPage from './components/HistoricoPage';

export enum Page {
  LANDING,
  SOBRE,
  USER_PROFILE,
  INFORMACOES_ADICIONAIS,
  ESPECIALIDADES,
  AGENDAR_CONSULTA,
  CHAT,
  HISTORICO,
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.LANDING);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  // Update document title based on current page
  useEffect(() => {
    switch(currentPage) {
      case Page.SOBRE:
        document.title = "MedSUS - Sobre Nós";
        break;
      case Page.USER_PROFILE:
        document.title = "MedSUS - Meu Perfil";
        break;
      case Page.INFORMACOES_ADICIONAIS:
        document.title = "MedSUS - Mais Informações";
        break;
      case Page.ESPECIALIDADES:
        document.title = "MedSUS - Especialidades";
        break;
      case Page.AGENDAR_CONSULTA:
        document.title = "MedSUS - Agendar Consulta";
        break;
      case Page.CHAT:
        document.title = "MedSUS - Chat";
        break;
      case Page.HISTORICO:
        document.title = "MedSUS - Histórico";
        break;
      default:
        document.title = "MedSUS - Bem-vindo";
        break;
    }
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch(currentPage) {
      case Page.LANDING:
        return <LandingPage 
          onNavigateToSobre={() => navigateTo(Page.SOBRE)} 
          onNavigateToLanding={() => navigateTo(Page.LANDING)}
          onNavigateToUserProfile={() => navigateTo(Page.USER_PROFILE)}
          onNavigateToInformacoesAdicionais={() => navigateTo(Page.INFORMACOES_ADICIONAIS)}
          onNavigateToEspecialidades={() => navigateTo(Page.ESPECIALIDADES)}
          onNavigateToAgendarConsulta={() => navigateTo(Page.AGENDAR_CONSULTA)}
        />;
      case Page.SOBRE:
        return <SobrePage2 navigateTo={navigateTo} />;
      case Page.USER_PROFILE:
        return <UserProfile onNavigateToLanding={() => navigateTo(Page.LANDING)} />;
      case Page.INFORMACOES_ADICIONAIS:
        return <InformacoesAdicionaisPage onNavigateToLanding={() => navigateTo(Page.LANDING)} />;
      case Page.ESPECIALIDADES:
        return <EspecialidadesPage onNavigateToLanding={() => navigateTo(Page.LANDING)} />;
      case Page.AGENDAR_CONSULTA:
        return <AgendarConsultaPage navigateTo={navigateTo} />;
      case Page.CHAT:
        return <ChatPage navigateTo={navigateTo} />;
      case Page.HISTORICO:
        return <HistoricoPage navigateTo={navigateTo} />;
      default:
        return <LandingPage 
          onNavigateToSobre={() => navigateTo(Page.SOBRE)} 
          onNavigateToLanding={() => navigateTo(Page.LANDING)}
          onNavigateToUserProfile={() => navigateTo(Page.USER_PROFILE)}
          onNavigateToInformacoesAdicionais={() => navigateTo(Page.INFORMACOES_ADICIONAIS)}
          onNavigateToEspecialidades={() => navigateTo(Page.ESPECIALIDADES)}
          onNavigateToAgendarConsulta={() => navigateTo(Page.AGENDAR_CONSULTA)}
        />;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {renderCurrentPage()}
    </div>
  );
};

export default App;
