import { create } from "zustand";
import { TMessageSchema } from "../validators/user.validator";

interface IMessagesStore {
  messages: TMessageSchema[];
  setMessages: (message: TMessageSchema[]) => void;
}

export const useMessages = create<IMessagesStore>()((set) => ({
  messages: [],
  setMessages: (messages) => set({ messages }),
}));
