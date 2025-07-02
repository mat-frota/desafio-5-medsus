import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header/Header.tsx';
import Footer from '../../components/Footer/Footer.tsx';
import type { ChatMessage } from '../../types/types.ts';
import { HeartIconFilled, InformationCircleIcon, MedSusLogoIcon, PaperAirplaneIcon, PaperClipIcon } from '../../assets/constants-ChatPage.tsx';

interface ChatPageProps {
}

const ChatPage: React.FC<ChatPageProps> = () => {
  const [chatStarted, setChatStarted] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [initialInputValue, setInitialInputValue] = useState('');
  const chatAreaRef = useRef<HTMLDivElement>(null);

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  const handleStartChat = () => {
    if (initialInputValue.trim() === '') return;

    const userMessage: ChatMessage = {
      id: Date.now().toString() + '_user',
      text: initialInputValue,
      sender: 'user',
      timestamp: formatTime(new Date()),
    };
    
    const botWelcomeMessage1: ChatMessage = {
      id: Date.now().toString() + '_bot1',
      text: 'Olá! 👋 Seja bem-vindo ao atendimento rápido da MedSUS.',
      sender: 'bot',
      timestamp: formatTime(new Date()),
      dateLabel: messages.length === 0 ? 'Today' : undefined,
    };

    const botWelcomeMessage2: ChatMessage = {
      id: Date.now().toString() + '_bot2',
      text: 'Por favor, informe os dados abaixo para que possamos te ajudar:\n1. Nome completo.\n2. CPF ou Cartão SUS.\n3. Especialidade desejada: (dropdown ou texto).\n4. Cidade e unidade desejada (se houver).\n5. Preferência de horário (se houver).\n\n🔒 Seus dados são protegidos conforme a LGPD.',
      sender: 'bot',
      timestamp: formatTime(new Date()),
    };

    setMessages([botWelcomeMessage1, botWelcomeMessage2, userMessage]);
    setChatStarted(true);
    setInitialInputValue('');
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: formatTime(new Date()),
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setInputValue('');

    // Mock bot response
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: Date.now().toString() + '_bot_reply',
        text: 'Entendido. Como posso te ajudar com o agendamento?',
        sender: 'bot',
        timestamp: formatTime(new Date()),
      };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
  };

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const renderInitialScreen = () => (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-3xl flex flex-col items-center">
      <section className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Fale com a gente <span className="text-sky-600">agora mesmo</span>
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Estamos aqui para te ajudar com agendamentos rápidos, dúvidas ou informações.
        </p>
      </section>

      <div className="w-full bg-teal-500 text-white p-4 rounded-lg shadow-md mb-8 text-sm">
        <p>Antes de começar, tenha seus documentos em mãos para agilizar o processo (RG, CPF e cartão do SUS).</p>
      </div>

      <section className="w-full bg-emerald-50 p-8 rounded-xl shadow-xl text-center flex-grow flex flex-col justify-center items-center">
        <HeartIconFilled className="w-20 h-20 text-teal-500 mb-6" />
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Olá, Usuário!</h2>
        <p className="text-gray-600 mb-1">Seja bem-vindo ao atendimento rápido da MedSUS</p>
        <p className="text-xs text-gray-500 mb-8">Este atendimento é 100% online e seguro.</p>
        
        <div className="w-full max-w-md flex items-center space-x-3">
          <input
            type="text"
            value={initialInputValue}
            onChange={(e) => setInitialInputValue(e.target.value)}
            placeholder="Inicie o atendimento"
            aria-label="Inicie o atendimento"
            className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
            onKeyPress={(e) => e.key === 'Enter' && handleStartChat()}
          />
          <button
            onClick={handleStartChat}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors"
            aria-label="Enviar mensagem inicial"
          >
            Enviar
          </button>
        </div>
      </section>
    </main>
  );

  const renderChatInterface = () => (
    <main className="flex-grow container mx-auto px-2 sm:px-4 lg:px-6 py-8 max-w-2xl flex flex-col" style={{height: 'calc(100vh - 200px)'}}> {/* Adjust height as needed */}
      <div className="bg-white rounded-xl shadow-2xl flex flex-col h-full overflow-hidden">
        {/* Chat Header */}
        <div className="bg-sky-100 p-3 sm:p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center">
            <MedSusLogoIcon textColor="text-white" className="h-7"/> {/* Smaller logo with black text */}
            <span className="ml-2 text-sm font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Online</span>
          </div>
          <button aria-label="Informações do chat">
            <InformationCircleIcon className="w-6 h-6 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Messages Area */}
        <div ref={chatAreaRef} className="flex-grow p-4 sm:p-6 space-y-4 overflow-y-auto bg-slate-50">
          {messages.map((msg, index) => (
            <React.Fragment key={index}>
              {msg.dateLabel && (
                <div className="text-center my-3">
                  <span className="text-xs text-gray-500 bg-gray-200 px-3 py-1 rounded-full">{msg.dateLabel}</span>
                </div>
              )}
              <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-xl shadow ${
                    msg.sender === 'user' 
                      ? 'bg-blue-500 text-white rounded-br-none' 
                      : 'bg-sky-100 text-gray-800 rounded-bl-none'
                  }`}
                  aria-live={msg.sender === 'bot' ? 'polite' : undefined}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-blue-200 text-right' : 'text-gray-500 text-left'}`}>
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-white p-3 sm:p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button 
              className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Anexar arquivo"
            >
              <PaperClipIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite sua mensagem..."
              aria-label="Digite sua mensagem"
              className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white text-black"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 sm:px-5 rounded-lg shadow-md transition-colors flex items-center"
              aria-label="Enviar mensagem"
            >
              <span className="hidden sm:inline mr-2">Enviar</span>
              <PaperAirplaneIcon className="w-5 h-5 transform rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header/>
      {!chatStarted ? renderInitialScreen() : renderChatInterface()}
      <Footer />
    </div>
  );
};

export default ChatPage;
