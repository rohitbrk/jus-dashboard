import ActivitiesCard from '../Activities/ActivitiesCard';
import ContactsCard from '../Contacts/ContactsCard';
import NotificationsCard from '../Notifications/NotificationsCard';

const RightSideBar = () => {
  return (
    <div className="flex flex-col gap-6 h-screen w-[300px] p-4 border-l border-gray-200">
      <div>
        <p className="text-base font-semibold mb-4">Notifications</p>
        <NotificationsCard />
      </div>
      <div>
        <p className="text-base font-semibold my-4">Activities</p>
        <ActivitiesCard />
      </div>
      <div>
        <p className="text-base font-semibold my-4">Contacts</p>
        <ContactsCard />
      </div>
    </div>
  );
};

export default RightSideBar;
