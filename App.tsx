
import React, { useState, useEffect } from 'react';
import { Order } from './types';
import { fetchOrders } from './services/sheetService';
import Header from './components/Header';
import OrderFormButton from './components/OrderFormButton';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import StatusTable from './components/StatusTable';

const App: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedOrders = await fetchOrders();
        setOrders(fetchedOrders);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <div className="container mx-auto p-4 sm:p-6 md:p-8 max-w-5xl">
        <Header />
        <OrderFormButton />

        <main className="mt-8 bg-gray-800/50 rounded-xl shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
          {loading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          {!loading && !error && <StatusTable orders={orders} />}
        </main>
        
        <footer className="text-center mt-12 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ponsonby Prints. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
