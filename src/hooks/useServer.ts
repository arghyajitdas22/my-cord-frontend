import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IServerStore {
  serverId: string | null;
  setServerId: (serverId: string) => void;
}

export const useServer = create<IServerStore>()(
  persist(
    (set) => ({
      serverId: null,
      setServerId: (serverId) => set({ serverId }),
    }),
    {
      name: "server-store",
    }
  )
);
