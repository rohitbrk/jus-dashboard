import { ActivityItems } from '../../data/data';

const ActivitiesCard = () => {
  return (
    <div className="flex flex-col gap-1">
      {ActivityItems.map((item, i) => (
        <div key={i} className="flex items-start gap-2 mt-2">
          <div className="flex flex-col gap-1 justify-center items-center">
            <img src={item.src} className="h-6 w-6 flex items-center justify-center rounded-full" />
            {i !== ActivityItems.length - 1 && <div className="h-4 w-[1px] bg-gray-300" />}
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
