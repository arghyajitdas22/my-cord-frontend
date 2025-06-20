import {create} from "zustand";

interface AddServerModalState {
display: boolean;
  open: () => void;
  close: () => void;
}

export const useAddServerModal = create<AddServerModalState>((set) => ({
  display: false,
  open: () => set({ display: true }),
  close: () => set({ display: false }),
}));