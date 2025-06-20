import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TUserState } from "../validators/user.validator";

interface IUserStore {
  user: TUserState | null;
  setUser: (user: TUserState) => void;
  logout: () => void;
}

export const useUser = create<IUserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: "user-storage",
    }
  )
);
