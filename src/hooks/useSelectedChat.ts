import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TChatSchema } from "../validators/user.validator";

interface IChatStore {
  selectedChat: TChatSchema | null;

  setSelectedChat: (chat: TChatSchema) => void;
}

export const useChat = create<IChatStore>()(
  persist(
    (set) => ({
      selectedChat: null,
      setSelectedChat: (chat) => set({ selectedChat: chat }),
    }),
    {
      name: "chat-storage",
    }
  )
);
