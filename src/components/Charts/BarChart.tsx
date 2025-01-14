import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart: React.FC = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Actuals',
        data: [12, 15, 13, 20, 10, 14],
        backgroundColor: '#A8C5DA',
      },
      {
        label: 'Projections',
        data: [8, 7, 5, 10, 5, 4],
        backgroundColor: '#cfdfeb',
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Projections vs Actuals',
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        ticks: {
          callback: (value: number) => `${value}M`,
        },
      },
    },
  };

  return <Bar options={options as never} data={data} />;
};

export default BarChart;
