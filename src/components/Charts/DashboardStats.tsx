import React from 'react';
import { DashboardStatsData } from '../../data/data';

interface CardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  backgroundColor: string;
}

const StatCard: React.FC<CardProps> = ({ title, value, change, isPositive, backgroundColor }) => {
  return (
    <div
      className={`rounded-lg p-4 ${backgroundColor} shadow-md flex flex-col justify-between`}
      style={{ width: '200px', height: '120px' }}
    >
      <h4 className="text-sm font-medium text-gray-600">{title}</h4>
      <div className="flex items-end justify-between">
        <span className="text-3xl font-bold text-gray-800">{value}</span>
        <span className={`text-sm flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? '▲' : '▼'} {change}
        </span>
      </div>
    </div>
  );
};

const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      {DashboardStatsData.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats;
