import { useCallback, useEffect } from 'react';
import useMenu from '../../store/useMenu';
import { isMenuItemActive } from '../../utils/BrowserUtils';
import { cn } from '../../utils/classUtils';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';

interface SideBarMenuProps {
  collapsed: boolean;
  label: string;
  icon: React.ReactElement;
  children?: Array<React.ReactElement | null> | React.ReactElement;
  RightComponent?: React.ReactElement;
}

const SideBarMenu = ({ collapsed, label, icon, children, RightComponent }: SideBarMenuProps) => {
  const { openItems, toggleItem, resetItems } = useMenu();

  const isOpen = !!openItems.find((item: string) => item === label);

  const childPaths = Array.isArray(children)
    ? children?.filter((child) => !!child)?.map((child) => child!.props.linkTo)
    : children?.props.linkTo;

  const isActive = isMenuItemActive(childPaths);

  const handleResetPopovers = useCallback(() => {
    if (collapsed) {
      resetItems();
    }
  }, [collapsed, resetItems]);

  useEffect(() => {
    handleResetPopovers();
  }, [handleResetPopovers]);

  return (
    <div>
      <div
        onClick={() => toggleItem(label)}
        className={cn(
          'flex flex-row items-center text-primary-light group z-0 rounded-xl cursor-pointer hover:bg--dark-22 hover:bg-regent-900',
          isOpen ? 'bg--dark-22' : 'hover:bg--dark-22',
          isOpen ? 'bg-primary-navy' : 'hover:bg-regent-900',
          collapsed ? 'justify-center' : 'justify-between',
          {
            'bg--dark-22': isActive,
            'bg-regent-900': isActive || isOpen,
          },
        )}
      >
        <div className="flex items-center text-sm text-primary-light">
          {isOpen ? (
            <MdKeyboardArrowDown className="text-gray-300 text-xl" />
          ) : (
            <MdKeyboardArrowRight className="text-gray-300 text-xl" />
          )}
          <span
            className={cn('group-hover:text-aqua', collapsed ? 'text-lg' : 'text-sm', {
              'text--primary-6': isActive,
              'text-aqua': isActive,
            })}
          >
            {icon}
          </span>
          {!collapsed && <span className="p-1 pl-2.5 text-base">{label}</span>}
        </div>
        {!collapsed && RightComponent}
      </div>

      {!collapsed && isOpen && children}
    </div>
  );
};

export default SideBarMenu;
