
import React from 'react';
import { Message } from '../types';
import { Icon } from './Icon';

interface ChatMessageProps {
  message: Message;
  isLoading?: boolean;
}

const LoadingDots: React.FC = () => (
  <div className="flex items-center space-x-1">
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
  </div>
);

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isLoading = false }) => {
  const isModel = message.role === 'model';

  if (isModel) {
    return (
      <div className="flex items-end gap-2.5 my-4 animate-fade-in-up">
        <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
          <Icon name="lotus" className="text-lotus-pink-dark w-6 h-6" />
        </div>
        <div className="bg-white rounded-xl rounded-bl-none p-3.5 shadow-sm max-w-md lg:max-w-lg break-words">
          {isLoading ? <LoadingDots /> : <p className="text-gray-700 whitespace-pre-wrap">{message.text}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-end items-end gap-2.5 my-4 animate-fade-in-up">
      <div className="bg-lotus-green-dark rounded-xl rounded-br-none p-3.5 shadow-sm max-w-md lg:max-w-lg break-words">
        <p className="text-white whitespace-pre-wrap">{message.text}</p>
      </div>
      <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
        <Icon name="user" className="text-lotus-green-dark w-6 h-6" />
      </div>
    </div>
  );
};
