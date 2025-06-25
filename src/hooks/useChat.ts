import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TChatSchema, TMessageSchema } from "../validators/user.validator";

interface IChatStore {
  selectedChat: TChatSchema | null;
  chats: TChatSchema[];
  messages: TMessageSchema[];
  setSelectedChat: (chat: TChatSchema) => void;
  setChats: (chats: TChatSchema[]) => void;
  setMessages: (message: TMessageSchema[]) => void;
}

export const useChat = create<IChatStore>()(
  persist(
    (set) => ({
      selectedChat: null,
      chats: [],
      messages: [],
      setSelectedChat: (chat) => set({ selectedChat: chat }),
      setChats: (chats) => set({ chats }),
      setMessages: (messages) => set({ messages }),
    }),
    {
      name: "chat-storage",
    }
  )
);
