
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import OrdersView from './components/OrdersView';
import PlaceOrderView from './components/PlaceOrderView';

export type View = 'home' | 'orders' | 'placeOrder';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  const renderView = () => {
    switch (view) {
      case 'orders':
        return <OrdersView onBack={() => setView('home')} />;
      case 'placeOrder':
        return <PlaceOrderView onBack={() => setView('home')} />;
      case 'home':
      default:
        return <Home onNavigate={(newView) => setView(newView)} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <div className="container mx-auto p-4 sm:p-6 md:p-8 max-w-5xl">
        <Header />
        
        {renderView()}
        
        <footer className="text-center mt-12 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ponsonby Prints. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
