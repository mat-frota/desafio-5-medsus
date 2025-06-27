import { useState } from "react";
import imagemCoracao from "../../assets/logocoracao.png";
import InputText from "../../components/InputText/InputText";
import "./RegisterForm.css";

export const RegisterForm = () => {
  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [cns, setCns] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nome:", name);
    console.log("CPF:", cpf);
    console.log("CNS:", cns);
    console.log("Email:", email);
    console.log("Senha:", password);
    console.log("Lembrar de mim:", rememberMe);
  };

  return (
    <div className="register-form-wrapper">
      <div className="register-icon-container">
        <img
          src={imagemCoracao}
          alt="Ícone de register"
          className="register-icon"
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
        Criar Conta
      </h2>
      <p style={{ marginBottom: "20px", textAlign: "left" }}>
        Entre para acompanhar seus atendimentos médicos
      </p>

      <form onSubmit={handleSubmit} className="register-form">
        <InputText
          label="Nome Completo"
          id="name"
          type="text"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          placeholder="Escreva seu nome completo aqui"
        />
        <InputText
          label="Email"
          id="email"
          type="email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          placeholder="Entre com seu email"
        />
        <InputText
          label="CPF"
          id="cpf"
          type="text"
          value={cpf}
          onChange={(e: any) => setCpf(e.target.value)}
          placeholder="000.000.000-00"
        />
        <InputText
          label="CNS"
          id="cns"
          type="text"
          value={cns}
          onChange={(e: any) => setCns(e.target.value)}
          placeholder="000 0000 0000 0000"
        />

        <InputText
          label="Senha"
          id="password"
          type="password"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
          placeholder="Crie uma senha"
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

        <button type="submit" className="register-button">
          Cadastrar
        </button>
      </form>

      <p className="signup-link">
        Já tem uma conta? <a href="/login">Faça login!</a>
      </p>
    </div>
  );
};
