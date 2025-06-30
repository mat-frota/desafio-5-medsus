import React from "react";
import "./Filters.css";
import type { Consulta, ConsultaStatus } from "../../types/types";
import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";
import { Icon } from "@iconify/react/dist/iconify.js";

interface FiltersProps {
  connectedApi: boolean;
  consultas: Consulta[];
  profissional: string;
  onProfissionalChange: (profissional: string) => void;
  status: ConsultaStatus | "todos";
  onStatusChange: (status: ConsultaStatus | "todos") => void;
  mesAno: string;
  onMesAnoChange: (mesAno: string) => void;
  onClearFilters: () => void;
}

export const Filters: React.FC<FiltersProps> = ({
  connectedApi,
  consultas,
  profissional,
  onProfissionalChange,
  status,
  onStatusChange,
  mesAno,
  onMesAnoChange,
  onClearFilters,
}) => {
  const statusOptions = [
    { value: "todos", label: "Todos os status" },
    { value: "realizado", label: "Realizado" },
    { value: "agendado", label: "Agendado" },
    { value: "cancelado", label: "Cancelado" },
  ];

  const mesAnoOptions = [
    { value: "todos", label: "Todos os meses/anos" },
    { value: "julho/2025", label: "Julho/2025" },
    { value: "março/2023", label: "Março/2023" },
    { value: "agosto/2025", label: "Agosto/2025" },
  ];

  const profissionalOptions = [
    { value: "", label: "Selecionar um profissional" },
    ...consultas.map((consulta) => ({
      value: consulta.medico,
      label: consulta.medico,
    })),
  ];

  return (
      <div className="filters-section">
        <div className="filters-header">
          <h1>Filtros</h1>
          <Button variant="primary" onClick={onClearFilters} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Icon icon="material-symbols:close" width={20} height={20} />
            Limpar Filtros
          </Button>
        </div>
        <div className="filters-grid">
          <div className="filter-group">
            <label htmlFor="profissional-filter">Buscar</label>
            <Dropdown
              id="profissional-filter"
              options={profissionalOptions}
              value={profissional}
              onChange={(e) => onProfissionalChange(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <label htmlFor="status-filter">Status</label>
            <Dropdown
              disabled={connectedApi}
              id="status-filter"
              options={statusOptions}
              value={status}
              onChange={(e) =>
                onStatusChange(e.target.value as ConsultaStatus | "todos")
              }
            />
          </div>
          <div className="filter-group">
            <label htmlFor="mes-ano-filter">Mês/Ano</label>
            <Dropdown
              disabled={connectedApi}
              id="mes-ano-filter"
              options={mesAnoOptions}
              value={mesAno}
              onChange={(e) => onMesAnoChange(e.target.value)}
            />
          </div>
        </div>
      </div>
  );
};
