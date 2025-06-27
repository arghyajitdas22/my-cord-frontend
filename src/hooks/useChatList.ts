import { create } from "zustand";
import { TChatSchema } from "../validators/user.validator";

interface IChatListStore {
  chats: TChatSchema[];
  setChats: (chats: TChatSchema[]) => void;
}

export const useChatList = create<IChatListStore>()((set) => ({
  chats: [],
  setChats: (chats) => set({ chats }),
}));
