import { create } from "zustand";

type State = {
  // show search dialog
  showSearch: boolean;
  // Display Intro and pre defined questions
  showIntro: boolean;
  // wether to show the input box
  showInput: boolean;
  // loading border gradient when sending request
  loading: boolean;
  // show ai content
  showAiContent: boolean;
  toggleSearch: (showSearch: boolean) => void;
  toggleIntro: (showIntro: boolean) => void;
  toggleInput: (showInput: boolean) => void;
  setLoading: (loading: boolean) => void;
  toggleAiContent: (showInput: boolean) => void;
  reset: () => void;
};

export const useAIStore = create<State>((set) => ({
  showAiDialog: false,
  showSearch: false,
  showIntro: true,
  showInput: true,
  loading: false,
  showAiContent: false,
  toggleSearch: (showSearch: boolean) => set(() => ({ showSearch })),
  toggleIntro: (showIntro: boolean) => set(() => ({ showIntro })),
  toggleInput: (showInput: boolean) => set(() => ({ showInput })),
  setLoading: (loading: boolean) => set(() => ({ loading })),
  toggleAiContent: (showAiContent: boolean) => set(() => ({ showAiContent })),
  reset: () =>
    set(() => ({
      loading: false,
      showAiContent: false,
      showSearch: false,
      showIntro: true,
      showInput: true,
    })),
}));
