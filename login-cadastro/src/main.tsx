import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { LoginPage } from "./pages/LoginPage/LoginPage.tsx";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route index path="/" element={<>Página Inicial</>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
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
);
