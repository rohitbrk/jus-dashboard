import BroadcastIcon from '../../svg/BroadcastIcon';
import BugIcon from '../../svg/BugIcon';
import PersonIcon from '../../svg/PersonIcon';

interface NotificationResponse {
  icon: React.ReactElement;
  message: string;
  time: string;
}

const items: NotificationResponse[] = [
  {
    icon: <BugIcon />,
    message: 'You have a bug that needs to be fixed.',
    time: 'Just Now',
  },
  {
    icon: <PersonIcon />,
    message: 'New user registered',
    time: '59 minutes ago',
  },
  {
    icon: <BugIcon />,
    message: 'You have a bug that needs to be fixed.',
    time: '12 hours ago',
  },
  {
    icon: <BroadcastIcon />,
    message: 'Andi Lane subscribed to you',
    time: 'Today, 11:59 AM',
  },
];

const NotificationsCard = () => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-2 mt-2">
          <div className="h-6 w-6 flex items-center justify-center">{item.icon}</div>
          <div className="flex flex-col gap-1">
            <p className="line-clamp-1 text-sm text-black">{item.message}</p>
            <p className="text-xs text-gray-500">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationsCard;
