import { create } from 'zustand';
import MenuService from '../services/MenuService';

type MenuState = {
  isCollapsed: boolean;
  openItems: string[];
  setIsCollapsed: (isCollapsed: boolean) => void;
  toggleItem: (id: string) => void;
  resetItems: () => void;
};

const useMenu = create<MenuState>((set) => ({
  isCollapsed: false,
  openItems: [],
  setIsCollapsed: (isCollapsed) => {
    MenuService.setOpen(!isCollapsed);
    set({ isCollapsed });
  },
  toggleItem: (id) => {
    set((state) => ({
      openItems: state.openItems.includes(id)
        ? state.openItems.filter((item) => item !== id)
        : [...state.openItems, id],
    }));
  },
  resetItems: () => set({ openItems: [] }),
}));

export default useMenu;
