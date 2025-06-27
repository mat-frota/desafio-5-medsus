import { useState } from "react";
import imagemCoracao from "../../assets/logocoracao.png";
import "./LoginForm.css";
import InputText from "../InputText/InputText";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", password);
    console.log("Lembrar de mim:", rememberMe);
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
          label="Email"
          id="email"
          type="email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          placeholder="Entre com seu email"
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
