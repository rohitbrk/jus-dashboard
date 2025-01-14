import React from 'react';
import { cn } from '../../utils/classUtils';
import SideBarMenu from './SideBarMenu';
import SideBarItem from './SideBarItem';
import DashboardIcon from '../../svg/DashboardIcon';
import ECommerceIcon from '../../svg/ECommerceIcon';
import ProjectsIcon from '../../svg/ProjectsIcon';
import OnlineCoursesIcon from '../../svg/OnlineCoursesIcon';
import UserProfileIcon from '../../svg/UserProfileIcon';
import AccountIcon from '../../svg/AccountIcon';
import CorporateIcon from '../../svg/CorporateIcon';
import BlogIcon from '../../svg/BlogIcon';
import SocialIcon from '../../svg/SocialIcon';

interface SidebarProps {
  isCollapsed: boolean;
  toggleCollapse(str: boolean): void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleCollapse }) => {
  const toggleMenu = () => toggleCollapse(!isCollapsed);

  return (
    <div aria-label="mainMenu" className="h-screen border-r border-r-gray-400">
      <div
        className={cn('fixed left-0 top-0 bottom-0 right-0 lg:static z-50', {
          'hidden lg:block': isCollapsed,
        })}
      >
        <div
          className="absolute left-0 right-0 top-0 bottom-0 bg-primary-dark/30 lg:hidden"
          role="button"
          onClick={toggleMenu}
        />
        <div
          className={cn(
            'h-full-window flex flex-col justify-between scrollbar overflow-y-auto',
            isCollapsed ? 'w-20' : 'relative w-[196px] animate-slide-in-left lg:animate-none overflow-x-hidden',
          )}
        >
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div className="flex items-center gap-2">
              <img height={30} width={30} className="rounded-full" src="assets/profile.png" />
              <span>ByeWind</span>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-400">Favorites</span>
                <span className="text-gray-300">Recently</span>
              </div>
              <ul className="mt-4 list-disc ml-4 flex flex-col gap-2">
                <li>Overview</li>
                <li>Projects</li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="text-gray-400">Dashboard</p>

              <SideBarMenu label="Default" icon={<DashboardIcon />} collapsed={false} />
              <SideBarMenu label="eCommerce" icon={<ECommerceIcon />} collapsed={false} />
              <SideBarMenu label="Projects" icon={<ProjectsIcon />} collapsed={false} />
              <SideBarMenu label="OnlineCourses" icon={<OnlineCoursesIcon />} collapsed={false} />
            </div>
            <div className="mt-4">
              <p className="text-gray-400">Pages</p>
              <SideBarMenu collapsed={isCollapsed} label="User Profile" icon={<UserProfileIcon />}>
                <SideBarItem label="Applications" linkTo="/" isSubTab />
                <SideBarItem label="People" linkTo="/" isSubTab />
                <SideBarItem label="Teams" linkTo="/" isSubTab />
              </SideBarMenu>
              <SideBarMenu label="Account" icon={<AccountIcon />} collapsed={false} />
              <SideBarMenu label="Corporate" icon={<CorporateIcon />} collapsed={false} />
              <SideBarMenu label="Blog" icon={<BlogIcon />} collapsed={false} />
              <SideBarMenu label="Social" icon={<SocialIcon />} collapsed={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
