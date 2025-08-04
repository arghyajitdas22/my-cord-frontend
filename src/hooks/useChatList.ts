import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TChatSchema } from "../validators/user.validator";

interface IChatListStore {
  chats: TChatSchema[];
  setChats: (chats: TChatSchema[]) => void;
}

export const useChatList = create<IChatListStore>()(
  persist(
    (set) => ({
      chats: [],
      setChats: (chats) => set({ chats }),
    }),
    {
      name: "chats-storage",
    }
  )
);
