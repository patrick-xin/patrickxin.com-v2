import { create } from "zustand";

type State = {
  showTOC: boolean;
  toggle: () => void;
};

const useStore = create<State>((set) => ({
  showTOC: false,

  toggle: () => set((state) => ({ showTOC: !state.showTOC })),
}));
export default useStore;
