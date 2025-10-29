
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: 'lotus' | 'user' | 'send';
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'lotus':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M8.5 12.5C8.5 12.5 10 14.5 12 14.5C14 14.5 15.5 12.5 15.5 12.5C15.5 12.5 14 10.5 12 10.5C10 10.5 8.5 12.5 8.5 12.5" />
          <path d="M12 18L12 14.5" />
          <path d="M22 12C22 12 19 14.5 17 14.5C15 14.5 15.5 12.5 15.5 12.5" />
          <path d="M17 18L15.5 14.5" />
          <path d="M15.5 9.5C15.5 9.5 17 7.5 17 5.5C17 3.5 15.5 1.5 13.5 1.5C11.5 1.5 10 3.5 10 5.5C10 7.5 10.5 9.5 10.5 9.5" />
          <path d="M2 12C2 12 5 14.5 7 14.5C9 14.5 8.5 12.5 8.5 12.5" />
          <path d="M7 18L8.5 14.5" />
          <path d="M8.5 9.5C8.5 9.5 7 7.5 7 5.5C7 3.5 8.5 1.5 10.5 1.5C12.5 1.5 14 3.5 14 5.5C14 7.5 13.5 9.5 13.5 9.5" />
          <path d="M12 22L12 18" />
        </svg>
      );
    case 'user':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case 'send':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      );
    default:
      return null;
  }
};
