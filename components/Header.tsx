
import React from 'react';
import { Icon } from './Icon';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-lotus-pink to-lotus-green rounded-full flex items-center justify-center">
          <Icon name="lotus" className="text-white w-7 h-7" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-800">Sen AI</h1>
          <p className="text-sm text-gray-500">Festival Hoa - Kiểng Sa Đéc lần 2, 2025</p>
        </div>
      </div>
    </header>
  );
};
