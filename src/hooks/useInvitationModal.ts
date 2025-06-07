import { create } from "zustand";

interface IInvitationModalStore {
  display: boolean;
  open: () => void;
  close: () => void;
}

export const useInvitationModal = create<IInvitationModalStore>()((set) => ({
  display: false,
  open: () => set({ display: true }),
  close: () => set({ display: false }),
}));
