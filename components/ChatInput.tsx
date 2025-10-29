
import React, { useRef, useEffect } from 'react';
import { Icon } from './Icon';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ input, setInput, onSend, isLoading }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [input]);
  
  const handleSendClick = () => {
    if (input.trim() && !isLoading) {
      onSend();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendClick();
    }
  };

  return (
    <footer className="sticky bottom-0 z-10 bg-gradient-to-t from-lotus-pink-light to-transparent py-4">
      <div className="container mx-auto px-4">
        <div className="relative bg-white/80 backdrop-blur-md rounded-xl shadow-md border border-gray-200/50">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Hỏi Sen về lễ hội..."
            disabled={isLoading}
            rows={1}
            className="w-full bg-transparent p-4 pr-16 text-gray-800 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-lotus-pink resize-none max-h-40 overflow-y-auto"
          />
          <button
            onClick={handleSendClick}
            disabled={isLoading || !input.trim()}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-lotus-pink flex items-center justify-center text-white transition-transform duration-200 hover:scale-110 disabled:bg-gray-300 disabled:hover:scale-100 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Icon name="send" className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </footer>
  );
};
