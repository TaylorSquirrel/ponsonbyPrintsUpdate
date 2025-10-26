
import React from 'react';
import QualityInfo from './QualityInfo';
import { View } from '../App';

interface HomeProps {
  onNavigate: (view: Exclude<View, 'home'>) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div>
        <div className="text-center mt-8 p-8 bg-gray-800/50 rounded-xl shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white">Welcome</h2>
            <p className="mt-2 text-gray-400">Manage your print orders or place a new one.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <button
                    onClick={() => onNavigate('placeOrder')}
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    Place an Order
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </button>
                <button
                    onClick={() => onNavigate('orders')}
                    className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-300 bg-gray-700 hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    View Current Orders
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </button>
            </div>
        </div>
        <QualityInfo />
    </div>
  );
};

export default Home;
