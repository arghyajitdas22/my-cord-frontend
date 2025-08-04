import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TMessageSchema } from "../validators/user.validator";

interface IMessagesStore {
  messages: TMessageSchema[];
  setMessages: (message: TMessageSchema[]) => void;
}

export const useMessages = create<IMessagesStore>()(
  persist(
    (set) => ({
      messages: [],
      setMessages: (messages) => set({ messages }),
    }),
    {
      name: "messages-storage",
    }
  )
);
