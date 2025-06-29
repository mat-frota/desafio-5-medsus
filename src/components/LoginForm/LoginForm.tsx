import { useState } from "react";
import imagemCoracao from "../../assets/logocoracao.png";
import "./LoginForm.css";
import InputText from "../InputText/InputText";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { formatCPF } from "../../utils/utils";

export const LoginForm = () => {

  const URL = import.meta.env.VITE_URL_API

  const navigate = useNavigate();

  const [cpf, setCpf] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(`${URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cpf: cpf.replace(/\D/g, ''), password }),
      });
      if (!res.ok) {
        throw new Error("Erro ao logar.");
      }
      return res.json();
    },
    onSuccess: () => {
      console.log("Login com sucesso!");
      navigate("/history");
    },
    onError: (error) => {
      console.log("Erro ao logar:", error);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <div className="login-form-wrapper">
      <div className="login-icon-container">
        <img
          src={imagemCoracao}
          alt="Ícone de login"
          className="login-icon"
          style={{
            margin: 0,
            padding: 0,
            width: "140px",
            height: "170px",
            display: "flex",
            justifyContent: "start",
          }}
        />
      </div>
      <h2
        style={{
          fontSize: "32px",
          textAlign: "left",
          color: "#000",
          fontWeight: "bold",
        }}
      >
        Bem-vindo de volta
      </h2>
      <p style={{ marginBottom: "20px", textAlign: "left" }}>
        Entre para acompanhar seus atendimentos médicos
      </p>

      <form onSubmit={handleSubmit} className="login-form">
        <InputText
          label="CPF"
          id="cpf"
          type="text"
          value={formatCPF(cpf)}
          maxLength={14}
          onChange={(e: any) => setCpf(e.target.value)}
          placeholder="Entre com seu CPF"
        />

        <InputText
          label="Senha"
          id="password"
          type="password"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
          placeholder="Senha"
        />

        <div className="form-options">
          <label className="remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Lembrar
          </label>
          <a href="#" className="forgot-password">
            Esqueceu sua senha?
          </a>
        </div>

        <button type="submit" className="login-button">
          Entrar
        </button>
      </form>

      <p className="signup-link">
        Ainda não tem conta? <a href="/register">Cadastre-se!</a>
      </p>
    </div>
  );
};
