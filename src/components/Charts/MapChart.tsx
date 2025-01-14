const data = [
  { id: 1, location: 'NewYork', revenue: '72K' },
  { id: 2, location: 'San Francisco', revenue: '39K' },
  { id: 3, location: 'NewYork', revenue: '25K' },
  { id: 4, location: 'NewYork', revenue: '61K' },
];
const MapChart = () => {
  return (
    <div className="mr-6">
      <div>
        <img src="assets/worldmap.png" />
      </div>
      {data.map((item, i) => (
        <div key={i}>
          <div className="flex justify-between">
            <span>{item.location}</span>
            <span>{item.revenue}</span>
          </div>
          <div className="h-[2px] w-12 bg-gray-300" />
        </div>
      ))}
    </div>
  );
};

export default MapChart;
