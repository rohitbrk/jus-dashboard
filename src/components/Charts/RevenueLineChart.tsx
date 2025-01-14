import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const RevenueLineChart: React.FC = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Current Week',
        data: [10, 15, 13, 18, 20, 25],
        borderColor: '#000000',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: 'Previous Week',
        data: [12, 10, 17, 19, 23, 28],
        borderColor: '#A3B5FF',
        borderWidth: 2,
        borderDash: [5, 5],
        pointRadius: 0,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw || 0;
            return `$${(value as unknown as number).toFixed(2)}M`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            size: 12,
          },
          callback: (value) => `${value}M`,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Revenue</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default RevenueLineChart;
