
import React from 'react';
import QualityInfo from './QualityInfo';
import BackButton from './BackButton';

interface PlaceOrderViewProps {
  onBack: () => void;
}

const PlaceOrderView: React.FC<PlaceOrderViewProps> = ({ onBack }) => {
  return (
    <div>
        <BackButton onClick={onBack} />
        <main className="bg-gray-800/50 rounded-xl shadow-2xl ring-1 ring-white/10 backdrop-blur-sm p-8 text-center">
            <h2 className="text-3xl font-bold text-white">Ready to Print?</h2>
            <p className="mt-2 text-gray-400 max-w-xl mx-auto">Click the button below to be taken to our secure order form. Fill out the details, and we'll get started on your masterpiece.</p>
            <div className="mt-8">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdoHfj0QRgsfI7EtPWoPc7K-YchPoPFjZar53TnVv0M6hGykg/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    Go to Order Form
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </main>
        <QualityInfo />
    </div>
  );
};

export default PlaceOrderView;
