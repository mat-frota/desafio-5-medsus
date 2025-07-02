import { useState } from "react";
import imagemCoracao from "../../assets/logocoracao.png";
import InputText from "../../components/InputText/InputText";
import "./RegisterForm.css";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { formatCPF, formatTelefone } from "../../utils/utils";

export const RegisterForm = () => {

  const URL = import.meta.env.VITE_URL_API

  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");3
  const [cpf, setCpf] = useState<string>("");
  const [dateNascimento, setDateNascimento] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [cartaoSus, setCartaoSus] = useState<string>("");
  const [estado, setEstado] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(`${URL}/api/users/cadastro`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          cpf: cpf.replace(/\D/g, ''),
          dateNascimento,
          phone,
          cartaoSus,
          estado,
          cidade,
          cep,
        }),
      });
      if (!res.ok) {
        throw new Error("Erro ao cadastrar.");
      }
      return res.json();
    },
    onSuccess: () => {
      console.log("Cadastro com sucesso!");
      navigate("/login");
      setName("");
      setEmail("");
      setPassword("");
      setCpf("");
      setDateNascimento("");
      setPhone("");
      setCartaoSus("");
      setEstado("");
      setCidade("");
      setCep("");
    },
    onError: (error) => {
      console.log("Erro ao cadastrar:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
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
          value={formatCPF(cpf)}
          maxLength={14}
          onChange={(e: any) => setCpf(e.target.value)}
          placeholder="000.000.000-00"
        />
        <InputText
          label="Telefone"
          id="phone"
          type="text"
          maxLength={15}
          value={formatTelefone(phone)}
          onChange={(e: any) => setPhone(e.target.value)}
          placeholder="(99) 99999-9999"
        />
        <InputText
          label="Cartão SUS"
          id="cartaoSus"
          type="text"
          value={cartaoSus}
          onChange={(e: any) => setCartaoSus(e.target.value)}
          placeholder="123456789012345"
          maxLength={15}
        />
        <InputText
          label="Cidade"
          id="cidade"
          type="text"
          value={cidade}
          onChange={(e: any) => setCidade(e.target.value)}
          placeholder="Digite sua cidade"
        />
        <InputText
          label="Data de Nascimento"
          id="dateNascimento"
          type="date"
          value={dateNascimento}
          onChange={(e: any) => setDateNascimento(e.target.value)}
          placeholder="Selecione sua data de nascimento"
        />
        <InputText
          label="Estado"
          id="estado"
          type="text"
          value={estado}
          onChange={(e: any) => setEstado(e.target.value)}
          placeholder="Digite seu estado"
        />
        <InputText
          label="CEP"
          id="cep"
          type="text"
          value={cep}
          onChange={(e: any) => setCep(e.target.value)}
          placeholder="00000-000"
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
