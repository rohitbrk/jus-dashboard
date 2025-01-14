interface ActivityResponse {
  src: string;
  message: string;
  time: string;
}

const ActivityItems: ActivityResponse[] = [
  {
    src: 'assets/activities1.png',
    message: 'You have a bug that needs to be fixed.',
    time: 'Just Now',
  },
  {
    src: 'assets/activities2.png',
    message: 'Released a new version',
    time: '59 minutes ago',
  },
  {
    src: 'assets/activities3.png',
    message: 'Submitted a bug',
    time: '12 hours ago',
  },
  {
    src: 'assets/activities4.png',
    message: 'Modified A data in Page X',
    time: 'Today, 11:59 AM',
  },
  {
    src: 'assets/activities5.png',
    message: 'Deleted a page in Project X',
    time: 'Feb 2, 2023',
  },
];

const BarChartData = {
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

const DashboardStatsData = [
  {
    title: 'Customers',
    value: '3,781',
    change: '+11.01%',
    isPositive: true,
    backgroundColor: 'bg-blue-100',
  },
  {
    title: 'Orders',
    value: '1,219',
    change: '-0.03%',
    isPositive: false,
    backgroundColor: 'bg-gray-100',
  },
  {
    title: 'Revenue',
    value: '$695',
    change: '+15.03%',
    isPositive: true,
    backgroundColor: 'bg-gray-100',
  },
  {
    title: 'Growth',
    value: '30.1%',
    change: '+6.08%',
    isPositive: true,
    backgroundColor: 'bg-blue-50',
  },
];

export { ActivityItems, BarChartData, DashboardStatsData };
