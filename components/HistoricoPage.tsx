import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { 
  UserIcon, 
  CalendarDaysIcon, 
  ClockIcon, 
  LocationIcon, 
  ChevronDownIcon, 
  XMarkIcon 
} from '../constants-HistoricoPage.tsx';
import { Appointment, AppointmentStatus } from '../types';
import { Page } from '../App';

const appointmentsData: Appointment[] = [
  {
    id: '1',
    specialty: 'Cardiologia',
    doctorName: 'Dr. João Silva',
    time: '09:00',
    date: '14 de março de 2023',
    location: 'Hospital Geral - Caxias/MA',
    status: AppointmentStatus.REALIZADA,
    observations: 'Exame de rotina',
  },
  {
    id: '2',
    specialty: 'Dermatologia',
    doctorName: 'Dr. Carlos Silva',
    time: '14:00',
    date: '20 de julho de 2025',
    location: 'Hospital da Pele - Caxias/MA',
    status: AppointmentStatus.AGENDADA,
  },
  {
    id: '3',
    specialty: 'Ginecologia',
    doctorName: 'Dra. Alice Silva',
    time: '15:00',
    date: '14 de março de 2023',
    location: 'Hospital da Mulher - Caxias/MA',
    status: AppointmentStatus.CANCELADA,
  },
];

const AppointmentCard: React.FC<{ appointment: Appointment }> = ({ appointment }) => {
  const getStatusClasses = (status: AppointmentStatus) => {
    switch (status) {
      case AppointmentStatus.REALIZADA:
        return 'bg-green-100 text-green-700';
      case AppointmentStatus.AGENDADA:
        return 'bg-blue-100 text-blue-700';
      case AppointmentStatus.CANCELADA:
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <article className="bg-white rounded-xl shadow-lg p-6 mb-6" aria-labelledby={`appointment-specialty-${appointment.id}`}>
      <div className="flex flex-col sm:flex-row justify-between">
        {/* Left Side */}
        <div className="mb-4 sm:mb-0">
          <h3 id={`appointment-specialty-${appointment.id}`} className="text-2xl font-bold text-gray-800 mb-2">{appointment.specialty}</h3>
          <div className="flex items-center text-gray-600 mb-1">
            <UserIcon className="w-5 h-5 mr-2 text-gray-500" />
            <span>{appointment.doctorName}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <ClockIcon className="w-5 h-5 mr-2 text-gray-500" />
            <span>{appointment.time}</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-start sm:items-end">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full mb-2 ${getStatusClasses(appointment.status)}`}>
            {appointment.status}
          </span>
          <div className="flex items-center text-gray-600 mb-1">
            <CalendarDaysIcon className="w-5 h-5 mr-2 text-gray-500" />
            <span>{appointment.date}</span>
          </div>
          <div className="flex items-center text-gray-600 mb-3">
            <LocationIcon className="w-5 h-5 mr-2 text-gray-500" />
            <span>{appointment.location}</span>
          </div>
          
          {appointment.status === AppointmentStatus.REALIZADA && (
            <button className="px-4 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium">
              Ver Relatório
            </button>
          )}
          {appointment.status === AppointmentStatus.AGENDADA && (
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium">
                Ver Detalhes
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm font-medium">
                Cancelar Consulta
              </button>
            </div>
          )}
          {appointment.status === AppointmentStatus.CANCELADA && (
            <button className="px-4 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium">
              Reagendar
            </button>
          )}
        </div>
      </div>
      {appointment.observations && (
        <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-md">
          <p className="text-sm text-blue-700"><span className="font-semibold">Observações:</span> {appointment.observations}</p>
        </div>
      )}
    </article>
  );
};

const SummaryCard: React.FC<{ count: number; label: string; countColor?: string }> = ({ count, label, countColor = "text-gray-900" }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 text-center">
    <p className={`text-5xl font-bold mb-2 ${countColor}`}>{count}</p>
    <p className="text-gray-600">{label}</p>
  </div>
);

interface HistoricoPageProps {
  navigateTo: (page: Page) => void;
}

const HistoricoPage: React.FC<HistoricoPageProps> = ({ navigateTo }) => {
  const summaryStats = {
    realizada: 1,
    agendada: 1,
    cancelada: 1,
    total: 3,
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Header navigateTo={navigateTo} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow max-w-7xl">
        {/* Page Title */}
        <section className="mb-10 text-left">
          <h1 className="text-4xl font-bold text-gray-800">Histórico de Consultas</h1>
          <p className="text-lg text-gray-600 mt-1">Acompanhe seus agendamentos passados e futuros</p>
        </section>

        {/* Filters Section */}
        <section className="mb-10 p-6 bg-white rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-end space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Filtros</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="search-professional" className="block text-sm font-medium text-gray-700 mb-1">
                    Buscar
                  </label>
                  <div className="relative">
                    <select
                      id="search-professional"
                      name="search-professional"
                      className="w-full appearance-none pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-500"
                      defaultValue=""
                      aria-label="Selecionar um profissional"
                    >
                      <option value="" disabled>Selecione um profissional</option>
                      <option value="dr_joao_silva">Dr. João Silva</option>
                      <option value="dr_carlos_silva">Dr. Carlos Silva</option>
                      <option value="dra_alice_silva">Dra. Alice Silva</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="filter-status" className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <div className="relative">
                    <select
                      id="filter-status"
                      name="filter-status"
                      className="w-full appearance-none pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-500"
                      defaultValue="all"
                      aria-label="Filtrar por status"
                    >
                      <option value="all">Todos os status</option>
                      <option value={AppointmentStatus.REALIZADA}>{AppointmentStatus.REALIZADA}</option>
                      <option value={AppointmentStatus.AGENDADA}>{AppointmentStatus.AGENDADA}</option>
                      <option value={AppointmentStatus.CANCELADA}>{AppointmentStatus.CANCELADA}</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="filter-month-year" className="block text-sm font-medium text-gray-700 mb-1">
                    Mês/Ano
                  </label>
                  <div className="relative">
                    <select
                      id="filter-month-year"
                      name="filter-month-year"
                      className="w-full appearance-none pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-500"
                      defaultValue="all"
                      aria-label="Filtrar por mês e ano"
                    >
                      <option value="all">Todos os status</option> {/* Placeholder text from image, ideally "Todos os meses/anos" */}
                      {/* Add month/year options here */}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button 
              className="mt-4 md:mt-0 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Limpar todos os filtros"
            >
              <XMarkIcon className="w-5 h-5 mr-2" />
              Limpar Filtros
            </button>
          </div>
        </section>

        {/* Appointments List Section */}
        <section className="mb-16">
          {appointmentsData.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))}
        </section>

        {/* Summary Cards Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SummaryCard count={summaryStats.realizada} label="Consulta Realizada" />
          <SummaryCard count={summaryStats.agendada} label="Consulta Agendada" />
          <SummaryCard count={summaryStats.cancelada} label="Consulta Cancelada" countColor="text-red-600" />
          <SummaryCard count={summaryStats.total} label="Total de Consultas" countColor="text-green-600" />
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default HistoricoPage;
