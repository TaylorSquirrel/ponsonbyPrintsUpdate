
import React from 'react';
import { Order } from '../types';

interface StatusTableProps {
  orders: Order[];
}

const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case 'Need payment':
      return 'bg-yellow-500/20 text-yellow-300 ring-yellow-500/30';
    case 'To print':
      return 'bg-blue-500/20 text-blue-300 ring-blue-500/30';
    case 'To deliver':
      return 'bg-purple-500/20 text-purple-300 ring-purple-500/30';
    case 'Done':
      return 'bg-green-500/20 text-green-300 ring-green-500/30';
    default:
      return 'bg-gray-500/20 text-gray-300 ring-gray-500/30';
  }
};

const StatusBadge: React.FC<{ status: string }> = ({ status }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ring-1 ring-inset ${getStatusBadgeClass(status)}`}>
    {status}
  </span>
);

const StatusTable: React.FC<StatusTableProps> = ({ orders }) => {
  if (orders.length === 0) {
    return (
      <div className="text-center py-16 px-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 className="mt-2 text-lg font-medium text-white">No orders found</h3>
        <p className="mt-1 text-sm text-gray-400">It looks like there are no active orders right now.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-800/60">
          <tr>
            <th scope="col" className="py-3.5 px-6 text-left text-sm font-semibold text-gray-300 tracking-wider">
              Name
            </th>
            <th scope="col" className="py-3.5 px-6 text-left text-sm font-semibold text-gray-300 tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {orders.map((order, index) => (
            <tr key={index} className="hover:bg-gray-700/50 transition-colors duration-200">
              <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-white">
                {order.name}
              </td>
              <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-300">
                <StatusBadge status={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatusTable;
