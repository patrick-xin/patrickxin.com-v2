import { create } from "zustand";

type State = {
  showTOC: boolean;
  toggle: () => void;
};

export const useTOCStore = create<State>((set) => ({
  showTOC: false,
  toggle: () => set((state) => ({ showTOC: !state.showTOC })),
}));
