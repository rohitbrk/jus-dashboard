import { BsCommand } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import TogglePanelIcon from '../../svg/TogglePanel';
import StarIcon from '../../svg/StarIcon';
import DarkModeIcon from '../../svg/DarkMode';
import HistoryIcon from '../../svg/HistoryIcon';
import NotificationsIcon from '../../svg/NotificationsIcon';

const Header = () => {
  return (
    <div className="flex-grow flex justify-between items-center p-5 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2">
        <div className="flex justify-center items-center">
          <TogglePanelIcon />
        </div>
        <div className="flex justify-center items-center">
          <StarIcon />
        </div>
        <nav className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:text-gray-800 dark:hover:text-gray-200">
            Dashboards
          </a>
          <span>/</span>
          <a href="#" className="text-gray-800 dark:hover:text-gray-200">
            Default
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative w-40 dark:bg-gray-100 rounded-lg">
          <div className="absolute inset-y-0 left-2 flex items-center">
            <CiSearch />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full py-1 pl-8 pr-8 bg-gray-100 rounded-lg text-sm text-gray-700 dark:text-gray-200 outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
          />
          <div className="absolute inset-y-0 right-2 flex items-center">
            <BsCommand />
            {'/'}
          </div>
        </div>
        <button className="flex justify-center items-center" onClick={() => undefined}>
          <DarkModeIcon />
        </button>
        <button className="flex justify-center items-center">
          <HistoryIcon />
        </button>
        <button className="flex justify-center items-center">
          <NotificationsIcon />
        </button>
        <button className="flex justify-center items-center">
          <TogglePanelIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
