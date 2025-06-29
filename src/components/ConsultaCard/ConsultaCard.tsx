import React from "react";
import "./ConsultaCard.css";
import type { Consulta } from "../../types/types";
import { Button } from "../Button/Button";
import { Icon } from "@iconify/react";

interface ConsultaCardProps {
  consulta: Consulta;
}

export const ConsultaCard: React.FC<ConsultaCardProps> = ({ consulta }) => {
  const getStatusClass = (status: Consulta["status"]) => {
    switch (status) {
      case "realizado":
        return "status-realizado";
      case "agendado":
        return "status-agendado";
      case "cancelado":
        return "status-cancelado";
      default:
        return "";
    }
  };

  return (
    <div className={`consulta-card ${getStatusClass(consulta.status)}`}>
      <div className="card-header">
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <h1>{consulta.especialidade}</h1>
          <span className={`status-badge ${getStatusClass(consulta.status)}`}>
            {consulta.status === "realizado" && "realizado"}
            {consulta.status === "agendado" && "agendado"}
            {consulta.status === "cancelado" && "cancelado"}
          </span>
        </div>
        <div className="card-actions">
          {consulta.status === "realizado" && (
            <Button
              variant="outline-blue"
              onClick={() =>
                alert("Ver Relatório para " + consulta.especialidade)
              }
            >
              Ver Relatório
            </Button>
          )}
          {consulta.status === "agendado" && (
            <>
              <Button
                variant="outline-blue"
                onClick={() =>
                  alert("Ver Detalhes para " + consulta.especialidade)
                }
              >
                Ver Detalhes
              </Button>
              <Button
                variant="red"
                onClick={() =>
                  alert("Cancelar Consulta " + consulta.especialidade)
                }
              >
                Cancelar Consulta
              </Button>
            </>
          )}
          {consulta.status === "cancelado" && (
            <Button
              variant="outline-blue"
              onClick={() => alert("Reagendar " + consulta.especialidade)}
            >
              Reagendar
            </Button>
          )}
        </div>
      </div>
      <div className="card-details">
        <div style={{ width: "20%", fontWeight: "bold" }}>
          <p>
            <Icon icon="prime:user"  width="24" height="24" style={{marginRight: "4px"}}></Icon>
            {consulta.medico}
          </p>
          <p>
            <Icon icon="iconoir:clock" width="24" height="24" style={{marginRight: "4px"}} />
            {consulta.horario}
          </p>
        </div>
        <div style={{fontWeight: "bold"}}>
          <p>
            <Icon icon="mynaui:calendar" width="24" height="24" style={{marginRight: "4px"}}></Icon>
            {consulta.data}
          </p>
          <p>
            <Icon icon="famicons:location-outline" width="24" height="24" style={{marginRight: "4px"}} />
            {consulta.local}
          </p>
        </div>
      </div>
      {consulta.observacoes && (
        <div className="card-observations">
          <span>Observações:</span> {consulta.observacoes}
        </div>
      )}
    </div>
  );
};
