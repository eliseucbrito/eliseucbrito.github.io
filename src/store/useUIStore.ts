import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  lang: 'pt' | 'en';
  toggleLang: () => void;
  setLang: (lang: 'pt' | 'en') => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      lang: 'pt',
      toggleLang: () =>
        set((state) => ({ lang: state.lang === 'pt' ? 'en' : 'pt' })),
      setLang: (lang) => set({ lang }),
    }),
    {
      name: 'ui-storage',
    }
  )
);