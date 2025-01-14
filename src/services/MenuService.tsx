import { YesNoType } from '../types';

export default class MenuService {
  static readonly MENU_SERVICE_KEY = 'MENU_STATUS';

  static setOpen(value: boolean) {
    return window.localStorage.setItem(MenuService.MENU_SERVICE_KEY, value ? YesNoType.YES : YesNoType.NO);
  }

  static clear() {
    return window.localStorage.removeItem(MenuService.MENU_SERVICE_KEY);
  }

  static isMenuCollapsed(): boolean {
    const status = window.localStorage.getItem(MenuService.MENU_SERVICE_KEY);
    return status === YesNoType.NO;
  }
}
