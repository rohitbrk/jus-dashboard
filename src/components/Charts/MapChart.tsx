const data = [
  { id: 1, location: 'NewYork', revenue: '72K' },
  { id: 2, location: 'San Francisco', revenue: '72K' },
  { id: 3, location: 'NewYork', revenue: '72K' },
  { id: 4, location: 'NewYork', revenue: '72K' },
];
const MapChart = () => {
  return (
    <div>
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
