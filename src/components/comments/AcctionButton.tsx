import React from 'react';

interface AcctionButtonProps {
  acction: string;
  onClick: () => void;
  colorClass?: string;
  className?: string;
}

const AcctionButton: React.FC<AcctionButtonProps> = ({ acction, onClick, colorClass = 'bg-blue-600 hover:bg-blue-700', className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 mt-4 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-50 ${colorClass} ${className}`}
    >
      {acction}
    </button>
  );
};

export default AcctionButton;