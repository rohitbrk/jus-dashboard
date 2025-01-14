interface ActivityResponse {
  src: string;
  message: string;
  time: string;
}

const items: ActivityResponse[] = [
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

const ActivitiesCard = () => {
  return (
    <div className="flex flex-col gap-1">
      {items.map((item, i) => (
        <div className="flex items-start gap-2 mt-2">
          <div className="flex flex-col gap-1 justify-center items-center">
            <img src={item.src} className="h-6 w-6 flex items-center justify-center rounded-full" />
            {i !== items.length - 1 && <div className="h-4 w-[1px] bg-gray-300" />}
          </div>
          <div className="flex flex-col gap-1">
            <p className="line-clamp-1 text-sm text-black">{item.message}</p>
            <p className="text-xs text-gray-500">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivitiesCard;
