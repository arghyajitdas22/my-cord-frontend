import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TChatSchema } from "../validators/user.validator";

interface IChatStore {
  chatId: string | null;
  chats: TChatSchema[];
  setChatId: (chatId: string) => void;
  setChats: (chats: TChatSchema[]) => void;
}

export const useChat = create<IChatStore>()(
  persist(
    (set) => ({
      chatId: null,
      chats: [],
      setChatId: (chatId) => set({ chatId }),
      setChats: (chats) => set({ chats }),
    }),
    {
      name: "chat-storage",
    }
  )
);
