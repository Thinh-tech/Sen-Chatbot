
import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { Message, Role } from './types';
import { sendMessageToGemini } from './services/geminiService';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      role: 'model',
      text: 'Xin chào! Em tên là Sen, trợ lý AI của Festival Hoa - Kiểng Sa Đéc 2025. Sen có thể giúp gì cho bạn?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const botResponseText = await sendMessageToGemini(input.trim());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: botResponseText,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Failed to get response from Gemini:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: 'Hu hu, Sen đang lỗi. Vui lòng thử lại.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen font-sans bg-lotus-green-light">
      <Header />
      <main className="flex-1 overflow-y-auto p-4">
        <div className="container mx-auto">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
          {isLoading && (
            <ChatMessage
              key="loading"
              message={{ id: 'loading', role: 'model', text: '' }}
              isLoading={true}
            />
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>
      <ChatInput
        input={input}
        setInput={setInput}
        onSend={handleSend}
        isLoading={isLoading}
      />
    </div>
  );
};

export default App;
