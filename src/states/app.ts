import { create } from "zustand";

interface AppState {
  isCreating: boolean;
  setIsCreating: (isCreating: boolean) => void;
}

const useAppStore = create<AppState>((set) => ({
  isCreating: false,
  setIsCreating: (isCreating: boolean) => set({ isCreating }),
}));

export default useAppStore;
