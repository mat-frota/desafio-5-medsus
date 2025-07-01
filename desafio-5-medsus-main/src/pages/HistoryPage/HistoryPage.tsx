import React, { useState, useEffect } from "react";
import "./HistoryPage.css";
import type { Consulta, ConsultaStatus, Stats } from "../../types/types";
import { Filters } from "../../components/Filters/Filters";
import { StatsCard } from "../../components/StatsCard/StatsCard";
import { ConsultaCard } from "../../components/ConsultaCard/ConsultaCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useQuery } from "@tanstack/react-query";

export const HistoryPage: React.FC = () => {
  const [connectedApi, setConnectedApi] = useState<boolean>(false);
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [filteredConsultas, setFilteredConsultas] = useState<Consulta[]>([]);
  const [filterProfissional, setFilterProfissional] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<ConsultaStatus | "todos">(
    "todos"
  );
  const [filterMesAno, setFilterMesAno] = useState<string>("todos");

  const URL = import.meta.env.VITE_URL_API;
    const fetchHistory = async () => {
    const response = await fetch(`${URL}/api/scheduling/todos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      setConnectedApi(false);
      throw new Error("Erro ao buscar historico de consultas");
    }
    const data = await response.json();
    setConsultas(data.scheduling);
    setConnectedApi(true);
    return data;
  };

  const { data: history = [] } = useQuery<any[]>({
    queryKey: ["history"],
    queryFn: fetchHistory,
    initialData: [],
  });
  console.log("Histórico de Consultas:", history);

  useEffect(() => {
    const mockConsultas: Consulta[] = [
      {
        id: "1",
        especialidade: "Cardiologia",
        medico: "Dr. João Silva",
        horario: "09:00",
        data: "14 de março de 2023",
        local: "Hospital Geral - Caxias/MA",
        status: "realizado",
        observacoes: "Exame de rotina",
      },
      {
        id: "2",
        especialidade: "Dermatologia",
        medico: "Dr. Carlos Silva",
        horario: "14:00",
        data: "20 de julho de 2025",
        local: "Hospital da Pele - Caxias/MA",
        status: "agendado",
      },
      {
        id: "3",
        especialidade: "Ginecologia",
        medico: "Dra. Alice Silva",
        horario: "15:00",
        data: "14 de março de 2023",
        local: "Hospital da Mulher - Caxias/MA",
        status: "cancelado",
      },
      {
        id: "4",
        especialidade: "Odontologia",
        medico: "Dr. Lucas Pereira",
        horario: "10:00",
        data: "05 de agosto de 2025",
        local: "Clínica Sorriso Feliz - Caxias/MA",
        status: "agendado",
      },
      {
        id: "5",
        especialidade: "Pediatria",
        medico: "Dra. Mariana Costa",
        horario: "16:00",
        data: "22 de abril de 2023",
        local: "Clínica Infantil Vida - Caxias/MA",
        status: "realizado",
        observacoes: "Check-up anual",
      },
    ];
    setConsultas(mockConsultas);
    setFilteredConsultas(mockConsultas);
  }, []);

  useEffect(() => {
    let currentFiltered = consultas;

    if (filterProfissional) {
      currentFiltered = currentFiltered.filter((c) =>
        c.medico.toLowerCase().includes(filterProfissional.toLowerCase())
      );
    }

    if (filterStatus !== "todos") {
      currentFiltered = currentFiltered.filter(
        (c) => c.status === filterStatus
      );
    }

    if (filterMesAno !== "todos") {
      const [mes, ano] = filterMesAno.split("/");
      currentFiltered = currentFiltered.filter((c) => {
        return c.data.includes(mes) && c.data.includes(ano);
      });
    }

    setFilteredConsultas(currentFiltered);
  }, [consultas, filterProfissional, filterStatus, filterMesAno]);

  const handleClearFilters = () => {
    setFilterProfissional("");
    setFilterStatus("todos");
    setFilterMesAno("todos");
  };

  const getStats = (): Stats => {
    const realizadas = consultas.filter((c) => c.status === "realizado").length;
    const agendadas = consultas.filter((c) => c.status === "agendado").length;
    const canceladas = consultas.filter((c) => c.status === "cancelado").length;
    const total = consultas.length;
    return { realizadas, agendadas, canceladas, total };
  };

  const stats = getStats();

  return (
    <>
      <Header/>
      <div className="consultas-page">
        <div className="consultas-container">
          <div className="page-header">
            <h1>Histórico de Consultas</h1>
            <p>Acompanhe seus agendamentos passados e futuros</p>
          </div>

          <Filters
            connectedApi={connectedApi}
            consultas={consultas}
            profissional={filterProfissional}
            onProfissionalChange={setFilterProfissional}
            status={filterStatus}
            onStatusChange={setFilterStatus}
            mesAno={filterMesAno}
            onMesAnoChange={setFilterMesAno}
            onClearFilters={handleClearFilters}
          />

          <div className="stats-section">
            <StatsCard
              label="Consulta Realizada"
              count={stats.realizadas}
              type="realizada"
            />
            <StatsCard
              label="Consulta Agendada"
              count={stats.agendadas}
              type="agendada"
            />
            <StatsCard
              label="Consulta Cancelada"
              count={stats.canceladas}
              type="cancelada"
            />
            <StatsCard
              label="Total de Consultas"
              count={stats.total}
              type="total"
            />
          </div>
          <div className="consultas-list">
            {filteredConsultas.length > 0 ? (
              filteredConsultas.map((consulta) => (
                <ConsultaCard key={consulta.id} consulta={consulta} />
              ))
            ) : (
              <p className="no-results">
                Nenhuma consulta encontrada com os filtros aplicados.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </>

  );
};
