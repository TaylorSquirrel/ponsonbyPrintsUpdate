
import React from 'react';

const OrderFormButton: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdoHfj0QRgsfI7EtPWoPc7K-YchPoPFjZar53TnVv0M6hGykg/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Place a New Order
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
  );
};

export default OrderFormButton;
