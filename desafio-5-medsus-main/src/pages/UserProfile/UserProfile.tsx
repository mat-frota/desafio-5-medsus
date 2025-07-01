
import React, { useState, useCallback } from 'react';
import { ActiveTab, type MedicalHistory, type PersonalData, type PreferencesData } from '../../types/types';
import Header from '../../components/Header1/Header1';
import { BLOOD_TYPES, PREFERRED_TIMES, PREFERRED_UNITS, REMINDER_OPTIONS } from '../../assets/constants';
import Footer from '../../components/Footer/Footer';

// Helper Input Field Component
interface InputFieldProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  placeholder?: string;
  autoComplete?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, name, type = "text", value, onChange, placeholder, autoComplete }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="mb-1 text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm bg-white text-black"
    />
  </div>
);

// Helper Select Field Component
interface SelectFieldProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}
const SelectField: React.FC<SelectFieldProps> = ({ label, id, name, value, onChange, options }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="mb-1 text-sm font-medium text-gray-700">{label}</label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm bg-white text-black"
    >
      <option value="">Selecione...</option>
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

// Helper Textarea Field Component
interface TextareaFieldProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
}
const TextareaField: React.FC<TextareaFieldProps> = ({ label, id, name, value, onChange, placeholder, rows = 3 }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="mb-1 text-sm font-medium text-gray-700">{label}</label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm bg-white text-black"
    />
  </div>
);

// Helper Checkbox Field Component
interface CheckboxFieldProps {
  label: string;
  id: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description?: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, id, name, checked, onChange, description }) => (
  <div className="flex items-start">
    <div className="flex items-center h-5">
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300 rounded"
      />
    </div>
    <div className="ml-3 text-sm">
      <label htmlFor={id} className="font-medium text-gray-700">{label}</label>
      {description && <p className="text-gray-500">{description}</p>}
    </div>
  </div>
);

const TABS_UI_CONFIG = [
  { id: ActiveTab.PERSONAL, label: "Dados Pessoais" },
  { id: ActiveTab.MEDICAL, label: "Histórico Médico" },
  { id: ActiveTab.PREFERENCES, label: "Preferências" },
];

interface UserProfileProps {
}

const UserProfile: React.FC<UserProfileProps> = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.PERSONAL);

  const [personalData, setPersonalData] = useState<PersonalData>({
    fullName: '', email: '', phone: '', cpf: '', birthDate: '', cep: '', address: '', city: '', state: ''
  });
  const [medicalHistory, setMedicalHistory] = useState<MedicalHistory>({
    bloodType: '', emergencyContact: '', allergies: '', medications: '', chronicConditions: '', medicalObservations: ''
  });
  const [preferences, setPreferences] = useState<PreferencesData>({
    preferredUnit: '', preferredTime: '', appointmentReminder: '', emailNotifications: false, whatsappNotifications: false, preferenceObservations: ''
  });

  const handleInputChange = useCallback(<T,>(
    setter: React.Dispatch<React.SetStateAction<T>>,
    field: keyof T,
    value: string | boolean
  ) => {
    setter(prev => ({ ...prev, [field]: value }));
  }, []);
  
  const handlePersonalDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    handleInputChange(setPersonalData, name as keyof PersonalData, value);
  };

  const handleMedicalHistoryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    handleInputChange(setMedicalHistory, name as keyof MedicalHistory, value);
  };
  
  const handlePreferencesChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    handleInputChange(setPreferences, name as keyof PreferencesData, isCheckbox ? (e.target as HTMLInputElement).checked : value);
  };

  const handleSubmit = (section: ActiveTab) => {
    // In a real app, you would send this data to a backend
    console.log(`Submitting ${section} data:`);
    if (section === ActiveTab.PERSONAL) console.log(personalData);
    if (section === ActiveTab.MEDICAL) console.log(medicalHistory);
    if (section === ActiveTab.PREFERENCES) console.log(preferences);
    alert(`${section.charAt(0).toUpperCase() + section.slice(1)} data saved (simulated)!`);
  };
  
  return (
    <>
      <Header/>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Meu Perfil</h1>
          <p className="text-gray-600 mt-2">Gerencie suas informações pessoais e preferências</p>
        </div>

        <div className="flex justify-center space-x-2 md:space-x-3 mb-10">
            {TABS_UI_CONFIG.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                        px-5 lg:px-6 py-2.5 font-semibold rounded-lg shadow-sm 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400
                        transition-colors duration-150
                        ${activeTab === tab.id
                            ? 'bg-sky-500 text-white'
                            : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                        }
                    `}
                >
                    {tab.label}
                </button>
            ))}
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl">
          {activeTab === ActiveTab.PERSONAL && (
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">Dados Pessoais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <InputField label="Nome Completo" id="fullName" name="fullName" value={personalData.fullName} onChange={handlePersonalDataChange} placeholder="Seu nome completo" />
                <InputField label="Email" id="email" name="email" type="email" value={personalData.email} onChange={handlePersonalDataChange} placeholder="nome@email.com" />
                <InputField label="Telefone" id="phone" name="phone" type="tel" value={personalData.phone} onChange={handlePersonalDataChange} placeholder="(99) 99999-9999" />
                <InputField label="CPF" id="cpf" name="cpf" value={personalData.cpf} onChange={handlePersonalDataChange} placeholder="000.000.000-00" />
                <InputField label="Data de Nascimento" id="birthDate" name="birthDate" type="date" value={personalData.birthDate} onChange={handlePersonalDataChange} />
                <InputField label="CEP" id="cep" name="cep" value={personalData.cep} onChange={handlePersonalDataChange} placeholder="00000-000" />
                <div className="md:col-span-2">
                  <InputField label="Endereço" id="address" name="address" value={personalData.address} onChange={handlePersonalDataChange} placeholder="Rua Tal, Quadra Tal" />
                </div>
                <InputField label="Cidade" id="city" name="city" value={personalData.city} onChange={handlePersonalDataChange} placeholder="Caxias" />
                <InputField label="Estado" id="state" name="state" value={personalData.state} onChange={handlePersonalDataChange} placeholder="Maranhão" />
              </div>
              <div className="mt-8 text-center">
                <button onClick={() => handleSubmit(ActiveTab.PERSONAL)} className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                  Editar Informações Pessoais
                </button>
              </div>
            </section>
          )}

          {activeTab === ActiveTab.MEDICAL && (
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">Histórico Médico</h2>
              <div className="space-y-4">
                <SelectField label="Tipo Sanguíneo" id="bloodType" name="bloodType" value={medicalHistory.bloodType} onChange={handleMedicalHistoryChange} options={BLOOD_TYPES} />
                <InputField label="Contato de Emergência" id="emergencyContact" name="emergencyContact" value={medicalHistory.emergencyContact} onChange={handleMedicalHistoryChange} placeholder="Nome - (99) 99999-9999" />
                <InputField label="Alergias" id="allergies" name="allergies" value={medicalHistory.allergies} onChange={handleMedicalHistoryChange} placeholder="Penicilina, etc." />
                <InputField label="Medicamentos em uso" id="medications" name="medications" value={medicalHistory.medications} onChange={handleMedicalHistoryChange} placeholder="Nenhum ou liste os medicamentos" />
                <InputField label="Condições Crônicas" id="chronicConditions" name="chronicConditions" value={medicalHistory.chronicConditions} onChange={handleMedicalHistoryChange} placeholder="Nenhuma ou liste as condições" />
                <TextareaField label="Observações Médicas" id="medicalObservations" name="medicalObservations" value={medicalHistory.medicalObservations} onChange={handleMedicalHistoryChange} placeholder="Sem observações" />
              </div>
              <div className="mt-8 text-center">
                <button onClick={() => handleSubmit(ActiveTab.MEDICAL)} className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                  Editar Informações Médicas
                </button>
              </div>
            </section>
          )}

          {activeTab === ActiveTab.PREFERENCES && (
             <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">Preferências de Atendimento</h2>
              <div className="space-y-4">
                <SelectField label="Unidade Preferida" id="preferredUnit" name="preferredUnit" value={preferences.preferredUnit} onChange={handlePreferencesChange} options={PREFERRED_UNITS} />
                <SelectField label="Horário Preferido" id="preferredTime" name="preferredTime" value={preferences.preferredTime} onChange={handlePreferencesChange} options={PREFERRED_TIMES} />
                <SelectField label="Lembrete de Consultas" id="appointmentReminder" name="appointmentReminder" value={preferences.appointmentReminder} onChange={handlePreferencesChange} options={REMINDER_OPTIONS} />
                
                <fieldset className="pt-2">
                  <legend className="text-sm font-medium text-gray-700 mb-1">Notificações</legend>
                  <div className="space-y-3">
                    <CheckboxField 
                      label="Notificações por e-mail"
                      id="emailNotifications"
                      name="emailNotifications"
                      checked={preferences.emailNotifications}
                      onChange={handlePreferencesChange}
                      description="Receber lembretes e confirmações por E-mail"
                    />
                     <CheckboxField 
                      label="Notificações por WhatsApp"
                      id="whatsappNotifications"
                      name="whatsappNotifications"
                      checked={preferences.whatsappNotifications}
                      onChange={handlePreferencesChange}
                      description="Receber lembretes e confirmações por WhatsApp"
                    />
                  </div>
                </fieldset>
                
                <TextareaField label="Observações de preferências" id="preferenceObservations" name="preferenceObservations" value={preferences.preferenceObservations} onChange={handlePreferencesChange} placeholder="Sem observações" />
              </div>
              <div className="mt-8 text-center">
                <button onClick={() => handleSubmit(ActiveTab.PREFERENCES)} className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                  Editar Preferências
                </button>
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default UserProfile;
