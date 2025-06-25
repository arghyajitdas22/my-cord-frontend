import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TChatSchema } from "../validators/user.validator";

interface IChatStore {
  selectedChat: TChatSchema | null;
  chats: TChatSchema[];
  setSelectedChat: (chat: TChatSchema) => void;
  setChats: (chats: TChatSchema[]) => void;
}

export const useChat = create<IChatStore>()(
  persist(
    (set) => ({
      selectedChat: null,
      chats: [],
      setSelectedChat: (chat) => set({ selectedChat: chat }),
      setChats: (chats) => set({ chats }),
    }),
    {
      name: "chat-storage",
    }
  )
);
