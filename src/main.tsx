import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { LoginPage } from "./pages/LoginPage/LoginPage.tsx";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage.tsx";
import LandingPage from "./pages/LandingPage/LandingPage.tsx";
import InformacoesAdicionaisPage from "./pages/Informacoesadicionais/InformacoesAdicionaisPage.tsx";
import AgendarConsultaPage from "./pages/AgendarConsulta/AgendarConsultaPage.tsx";
import SobrePage from "./pages/Sobre/SobrePage.tsx";
import ChatPage from "./pages/Chat/ChatPage.tsx";
import UserProfile from "./pages/UserProfile/UserProfile.tsx";
import EspecialidadesPage from "./pages/Especialidades/EspecialidadesPage.tsx";
import { HistoryPage } from "./pages/HistoryPage/HistoryPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <StrictMode>
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/informacoes-adicionais" element={<InformacoesAdicionaisPage />} />
          <Route path="/agendar-consulta" element={<AgendarConsultaPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/especialidades" element={<EspecialidadesPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route
            path="*"
            element={
              <>
                <h1>404 - Página não encontrada</h1>
              </>
            }
          />
        </Routes>
      </StrictMode>
    </BrowserRouter>
  </QueryClientProvider>
);