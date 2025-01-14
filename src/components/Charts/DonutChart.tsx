import React, { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SalesDonutChart: React.FC = () => {
  const chartRef = useRef<any>(null);

  const data = {
    labels: ['Direct', 'Affiliate', 'Sponsored', 'E-mail'],
    datasets: [
      {
        data: [300.56, 135.18, 154.02, 48.96],
        backgroundColor: ['#000000', '#98E0A6', '#A3B5FF', '#C7EBFF'],
        hoverBackgroundColor: ['#333333', '#82D18F', '#8FA4FF', '#AEDDFF'],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          font: {
            size: 14,
          },
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: $${(value as unknown as number).toFixed(2)}`;
          },
        },
      },
    },
    cutout: '60%',
  };

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const { ctx, chartArea } = chart;
      const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);
      const percentage = ((data.datasets[0].data[0] / total) * 100).toFixed(1);

      if (chartArea) {
        ctx.save();
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#000000';
        ctx.fillText(`${percentage}%`, (chartArea.left + chartArea.right) / 2, (chartArea.top + chartArea.bottom) / 2);
        ctx.restore();
      }
    }
  });

  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Total Sales</h2>
      <Doughnut ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default SalesDonutChart;
