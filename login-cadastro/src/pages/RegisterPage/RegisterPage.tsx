import React from "react";
// import "./LoginPage.css"; // Estilos específicos da página de login
import image1 from "../../assets/imgMedSus1.jpg"; // Imagem de login
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";

export const RegisterPage: React.FC = () => {
  return (
    <div className="login-page">
      <div className="login-content">
        <div className="login-image-container">
          <img
            src={image1}
            alt="Imagem de login"
            style={{
              width: "100%",
              height: "80%",
              objectFit: "cover",
              boxShadow: "00px 0px 0px 30px #CFEDFB",
              borderRadius: "88px",
            }}
          />
        </div>
        <div className="login-form-container">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};
