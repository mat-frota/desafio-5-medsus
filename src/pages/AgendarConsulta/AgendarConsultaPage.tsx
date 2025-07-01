import React, { useState } from 'react';
import { LocationIcon, UserIcon } from '../../assets/constants';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';

interface ConfirmedAppointmentDetails {
  specialty: string;
  doctor: string;
  unit: string;
  time: string;
  date: string; // e.g., "30 de Julho de 2025"
  observations?: string;
}

const specialties = ["Dermatologia", "Cardiologia", "Pediatria", "Clínica Geral", "Ortopedia"];
const doctorsBySpecialty: { [key: string]: string[] } = {
  "Dermatologia": ["Dr. Carlos Silva", "Dra. Ana Pele", "Dr. Roberto Cutis", "Dra. Sofia Derma", "Dr. Miguel Epiderme", "Dra. Laura Solar"],
  "Cardiologia": ["Dr. João Coração", "Dra. Maria Batimento", "Dr. Pedro Vascular", "Dra. Clara Ritmo", "Dr. Fernando Arteria", "Dra. Beatriz Pressão"],
  "Pediatria": ["Dra. Alice Criança", "Dr. Bruno Bebê", "Dra. Carla Infância", "Dr. Daniel Pequeno", "Dra. Elisa Kids", "Dr. Fabio Junior"],
  "Clínica Geral": ["Dr. Geraldo BemEstar", "Dra. Viviane Saúde", "Dr. Antonio Cuidado", "Dra. Patricia MedGeral", "Dr. Ricardo Clinico", "Dra. Julia Familia"],
  "Ortopedia": ["Dr. Osvaldo Osso", "Dra. Regina Articulação", "Dr. Marcio Fratura", "Dra. Valeria Coluna", "Dr. Silvio Músculo", "Dra. Helena Trauma"],
};
const unitsBySpecialty: { [key: string]: string[] } = {
    "Dermatologia": ["Hospital da Pele - Caxias/MA", "Clínica Dermato Sul", "Centro Médico Epiderme"],
    "Cardiologia": ["Instituto Cardio Vida", "Hospital do Coração Leste", "Clínica Vascular Check"],
    "Pediatria": ["Hospital Infantil Pequeninos", "Clínica Crescer Bem", "Posto de Saúde Kids"],
    "Clínica Geral": ["UBS Central", "Posto de Saúde Bairro Novo", "Clínica Família Feliz"],
    "Ortopedia": ["Hospital Ortopédico Avançado", "Clínica Movimento Pleno", "Centro de Traumatologia"],
};


const timeSlots = {
  manha: ["09:00", "10:00", "11:00", "12:00"],
  tarde: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
  noite: ["19:00", "20:00", "21:00"],
};

interface AgendarConsultaPageProps {
}

const AgendarConsultaPage: React.FC<AgendarConsultaPageProps> = () => {
  const navigate = useNavigate()
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const [selectedUnit, setSelectedUnit] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [observations, setObservations] = useState<string>('');
  const [appointmentConfirmed, setAppointmentConfirmed] = useState<boolean>(false);
  const [confirmedDetails, setConfirmedDetails] = useState<ConfirmedAppointmentDetails | null>(null);

  const URL = import.meta.env.VITE_URL_API;

   const mutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(`${URL}/api/scheduling/cadastro/1`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date_scheduling: `2025-07-30 ${selectedTime}:00`,
          type: selectedSpecialty,
          local: selectedUnit,
          medico: selectedDoctor,
          time: selectedTime,
          observations: observations,
        }),
      });
      if (!res.ok) {
        throw new Error("Erro ao cadastrar.");
      }
      return res.json();
    },
    onSuccess: () => {
      console.log("Cadastro com sucesso!");
    },
    onError: (error) => {
      console.log("Erro ao cadastrar:", error);
    },
  });

  const clientName = "Nome do Usuário"; // Hardcoded client name

  const handleConfirmAppointment = () => {
    if (!selectedSpecialty || !selectedDoctor || !selectedUnit || !selectedTime) {
      alert("Por favor, preencha todos os campos obrigatórios e selecione um horário.");
      return;
    }
    const details: ConfirmedAppointmentDetails = {
      specialty: selectedSpecialty,
      doctor: selectedDoctor,
      unit: selectedUnit,
      time: selectedTime,
      date: "30 de Julho de 2025", // Hardcoded date as per mockup example
      observations: observations,
    };
    setConfirmedDetails(details);
    setAppointmentConfirmed(true);
      mutation.mutate();
  };

  const handleCancelConfirmedAppointment = () => {
    setAppointmentConfirmed(false);
    setConfirmedDetails(null);
    // Reset form fields for a clean slate
    setSelectedSpecialty('');
    setSelectedDoctor('');
    setSelectedUnit('');
    setSelectedTime(null);
    setObservations('');
  };
  
  const currentDoctors = selectedSpecialty ? doctorsBySpecialty[selectedSpecialty] || [] : [];
  const currentUnits = selectedSpecialty ? unitsBySpecialty[selectedSpecialty] || [] : [];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna Principal (Formulário) */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Agendar Consulta</h1>
              <p className="text-gray-600">Preencha os campos abaixo e agende seu atendimento</p>
            </div>

            <div className="space-y-6 bg-white p-6 rounded-lg shadow">
              <div>
                <label htmlFor="specialty-select" className="block text-sm font-medium text-gray-700 mb-1">Especialidade</label>
                <div className="relative">
                  <select
                    id="specialty-select"
                    value={selectedSpecialty}
                    onChange={(e) => {
                        setSelectedSpecialty(e.target.value);
                        setSelectedDoctor(''); 
                        setSelectedUnit(''); 
                    }}
                    className="w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 appearance-none"
                    aria-label="Selecionar Especialidade"
                    disabled={appointmentConfirmed}
                  >
                    <option value="" disabled>Selecione uma especialidade</option>
                    {specialties.map(spec => <option key={spec} value={spec}>{spec}</option>)}
                  </select>
                  {/* <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" /> */}
                </div>
              </div>
            
              <div>
                <label htmlFor="doctor-select" className="block text-sm font-medium text-gray-700 mb-1">Médico</label>
                <div className="relative">
                  <select
                    id="doctor-select"
                    value={selectedDoctor}
                    onChange={(e) => setSelectedDoctor(e.target.value)}
                    className="w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 appearance-none"
                    aria-label="Selecionar Médico"
                    disabled={appointmentConfirmed || !selectedSpecialty || currentDoctors.length === 0}
                  >
                    <option value="" disabled>Selecione um profissional</option>
                    {currentDoctors.map(doc => <option key={doc} value={doc}>{doc}</option>)}
                  </select>
                  {/* <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" /> */}
                </div>
              </div>

              <div>
                <label htmlFor="unit-select" className="block text-sm font-medium text-gray-700 mb-1">Unidade</label>
                <div className="relative">
                  <select
                    id="unit-select"
                    value={selectedUnit}
                    onChange={(e) => setSelectedUnit(e.target.value)}
                    className="w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 appearance-none"
                    aria-label="Selecionar Unidade"
                    disabled={appointmentConfirmed || !selectedSpecialty || currentUnits.length === 0}
                  >
                    <option value="" disabled>Selecione uma unidade</option>
                     {currentUnits.map(unit => <option key={unit} value={unit}>{unit}</option>)}
                  </select>
                  {/* <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" /> */}
                </div>
              </div>
            </div>


            {/* Horários */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Horários</h3>
              {Object.entries(timeSlots).map(([period, slots]) => (
                <div key={period} className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2 capitalize">{period}</p>
                  <div className="flex flex-wrap gap-2">
                    {slots.map(time => (
                      <button
                        key={time}
                        onClick={() => !appointmentConfirmed && setSelectedTime(time)}
                        disabled={appointmentConfirmed}
                        className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors
                          ${selectedTime === time ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 hover:bg-gray-200 border-gray-300 text-gray-700'}
                          ${appointmentConfirmed ? 'cursor-not-allowed opacity-70' : ''}
                        `}
                        aria-pressed={selectedTime === time}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Observações */}
            <div className="bg-white p-6 rounded-lg shadow">
              <label htmlFor="observations" className="block text-sm font-medium text-gray-700 mb-1">Observações</label>
              <textarea
                id="observations"
                rows={4}
                value={observations}
                onChange={(e) => setObservations(e.target.value)}
                disabled={appointmentConfirmed}
                placeholder="Descreva sintomas ou informações relevantes..."
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {!appointmentConfirmed && (
              <button
                onClick={handleConfirmAppointment}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors text-lg"
              >
                Confirmar Agendamento
              </button>
            )}

            {appointmentConfirmed && confirmedDetails && (
              <div className="mt-12 p-6 bg-white rounded-xl shadow-xl border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Consulta Agendada</h2>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">{confirmedDetails.specialty}</span>
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-700">Agendado</span>
                  </div>
                  <div className="flex items-center">
                    <UserIcon className="w-5 h-5 mr-2 text-gray-500" /> 
                    <span>{confirmedDetails.doctor}</span>
                  </div>
                  <div className="flex items-center">
                    {/* <CalendarDaysIcon className="w-5 h-5 mr-2 text-gray-500" />  */}
                    <span>{confirmedDetails.date}</span>
                  </div>
                  <div className="flex items-center">
                    {/* <ClockIcon className="w-5 h-5 mr-2 text-gray-500" />  */}
                    <span>{confirmedDetails.time}</span>
                  </div>
                  <div className="flex items-center">
                    <LocationIcon className="w-5 h-5 mr-2 text-gray-500" /> 
                    <span>{confirmedDetails.unit}</span>
                  </div>
                  {confirmedDetails.observations && (
                     <p className="text-sm pt-2"><span className="font-semibold">Observações:</span> {confirmedDetails.observations}</p>
                  )}
                </div>
                <div className="mt-6 flex space-x-3">
                  <button 
                    className="flex-1 px-4 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium"
                    // Add onClick handler for "Ver Detalhes" if needed in future
                  >
                    Ver Detalhes
                  </button>
                  <button 
                    onClick={handleCancelConfirmedAppointment}
                    className="flex-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm font-medium"
                  >
                    Cancelar Consulta
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Coluna Lateral (Resumo e Agendamento Rápido) */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Resumo do Agendamento</h2>
              <div className="space-y-3 text-sm">
                <p><span className="font-medium text-gray-700">Cliente:</span> <span className="text-gray-600">{clientName}</span></p>
                <p><span className="font-medium text-gray-700">Especialidade:</span> <span className="text-gray-600">{selectedSpecialty || (appointmentConfirmed && confirmedDetails ? confirmedDetails.specialty : 'Não Selecionado')}</span></p>
                <p><span className="font-medium text-gray-700">Médico:</span> <span className="text-gray-600">{selectedDoctor || (appointmentConfirmed && confirmedDetails ? confirmedDetails.doctor : 'Não Selecionado')}</span></p>
                <p><span className="font-medium text-gray-700">Unidade:</span> <span className="text-gray-600">{selectedUnit || (appointmentConfirmed && confirmedDetails ? confirmedDetails.unit : 'Não Selecionado')}</span></p>
                <p><span className="font-medium text-gray-700">Horário do Agendamento:</span> <span className="text-gray-600">{selectedTime || (appointmentConfirmed && confirmedDetails ? confirmedDetails.time : '00:00')}</span></p>
              </div>
            </div>

            <div className="bg-teal-500 p-6 rounded-xl shadow-lg text-white">
              <div className="flex items-center mb-3">
                {/* <ChatBubblesIcon className="w-8 h-8 mr-3 text-emerald-100" /> */}
                <h2 className="text-xl font-semibold">Agendamento Rápido</h2>
              </div>
              <p className="text-sm mb-4 opacity-90">
                Precisa de atendimento com urgência? Fale agora com nossa equipe pelo chat e agilize seu agendamento em poucos minutos.
              </p>
              <button 
                onClick={() => navigate("/chat")}
                className="w-full bg-white text-teal-600 font-semibold py-2.5 px-4 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
              >
                Ir para o chat
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AgendarConsultaPage;
