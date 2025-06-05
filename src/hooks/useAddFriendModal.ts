import { create } from "zustand";

interface IAddFriendModalStore {
  display: boolean;
  open: () => void;
  close: () => void;
}

export const useAddFriendModal = create<IAddFriendModalStore>()((set) => ({
  display: true,
  open: () => set({ display: true }),
  close: () => set({ display: false }),
}));
