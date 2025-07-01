import React from "react";
import "./StatsCard.css";

interface StatsCardProps {
  label: string;
  count: number;
  type: "realizada" | "agendada" | "cancelada" | "total";
}

export const StatsCard: React.FC<StatsCardProps> = ({ label, count, type }) => {
  const getTypeClass = (cardType: "realizada" | "agendada" | "cancelada" | "total") => {
    switch (cardType) {
      case "realizada":
        return "stats-realizada";
      case "agendada":
        return "stats-agendada";
      case "cancelada":
        return "stats-cancelada";
      case "total":
        return "stats-total";
      default:
        return "";
    }
  };

  return (
    <div className={`stats-card ${getTypeClass(type)}`}>
      <span className="stats-count">{count}</span>
      <span className="stats-label">{label}</span>
    </div>
  );
};
