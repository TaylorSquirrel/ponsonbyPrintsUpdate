
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-16">
      <div className="w-12 h-12 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="ml-4 text-gray-400">Loading Orders...</p>
    </div>
  );
};

export default LoadingSpinner;
