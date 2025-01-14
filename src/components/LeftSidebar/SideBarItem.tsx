import React from 'react';
import { NavLink } from 'react-router-dom';
import { isMenuItemActive } from '../../utils/BrowserUtils';
import { cn } from '../../utils/classUtils';

export interface ZenSideBarItemProps {
  icon?: React.ReactElement;
  label?: string;
  linkTo?: string;
  collapsed?: boolean;
  exact?: boolean;
  hideActive?: boolean;
  target?: string;
  BadgeComponent?: React.ReactElement;
  isSubTab?: boolean;
  onClick?(): void;
  isExternal?: boolean;
  showNewBadge?: boolean;
  children?: React.ReactNode;
}

interface RenderLinkProps extends ZenSideBarItemProps {
  className?: string;
}

const RenderLink: React.FC<RenderLinkProps> = ({ isExternal, linkTo, target, onClick, ...props }) => {
  if (isExternal) {
    return (
      <a href={linkTo} target="_blank" rel="noreferrer" className={props.className}>
        {props.children}
      </a>
    );
  }

  return (
    <NavLink to={linkTo!} onClick={onClick} className={props.className} target={target}>
      {props.children}
    </NavLink>
  );
};

const ZenSidebarItem: React.FC<ZenSideBarItemProps> = ({
  icon,
  label,
  linkTo = '/',
  collapsed = false,
  exact = false,
  target,
  BadgeComponent,
  isSubTab = false,
  children,
  onClick,
  isExternal = false,
}) => {
  const isActive = isMenuItemActive(linkTo);

  const Children = children ? (
    children
  ) : (
    <div className="flex flex-row items-center">
      <span className={cn('items-center text-base')}>{label}</span>
      {BadgeComponent}
    </div>
  );

  return (
    <RenderLink
      {...{ isExternal, linkTo, exact, target, onClick }}
      className={cn('flex flex-row items-center justify-start group z-0 rounded-lg my-2 relative')}
    >
      {icon && (
        <span
          className={cn('h-4 w-4 flex items-center group-hover:text-gray-400', collapsed ? 'text-xl' : 'text-base', {
            'text-zen-primary-6': isActive,
            'text-black': isActive,
          })}
        >
          {icon}
        </span>
      )}
      {!collapsed && (
        <span className={cn('items-center flex flex-row text-base', isSubTab ? 'pl-7' : 'pl-2')}>{Children}</span>
      )}
    </RenderLink>
  );
};

export default ZenSidebarItem;
