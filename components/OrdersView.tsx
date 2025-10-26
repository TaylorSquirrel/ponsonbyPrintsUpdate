
import React, { useState, useEffect } from 'react';
import { Order } from '../types';
import { fetchOrders } from '../services/sheetService';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import StatusTable from './StatusTable';
import BackButton from './BackButton';

interface OrdersViewProps {
  onBack: () => void;
}

const OrdersView: React.FC<OrdersViewProps> = ({ onBack }) => {
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
    <div>
        <BackButton onClick={onBack} />
        <main className="bg-gray-800/50 rounded-xl shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
          {loading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          {!loading && !error && <StatusTable orders={orders} />}
        </main>
    </div>
  );
};

export default OrdersView;
