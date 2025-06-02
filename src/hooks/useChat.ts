import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IChatStore {
  chatId: string | null;
  setChatId: (chatId: string) => void;
}

export const useChat = create<IChatStore>()(
  persist(
    (set) => ({
      chatId: null,
      setChatId: (chatId) => set({ chatId }),
    }),
    {
      name: "chat-storage",
    }
  )
);
