export const isSmScreen = () => window.innerWidth <= 768;

export const isMenuItemActive = (paths: string[] | string): boolean => {
  const isActive = Array.isArray(paths)
    ? paths.some((path) => window.location.pathname.startsWith(path))
    : window.location.pathname.startsWith(paths);

  return isActive;
};
