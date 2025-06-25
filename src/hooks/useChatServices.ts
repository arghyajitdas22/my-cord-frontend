import { useQuery } from "@tanstack/react-query";
import { getAllChats } from "../services/user.service";
import { useChat } from "./useChat";
import { TChatSchema, TMessageSchema } from "../validators/user.validator";
import { useServer } from "./useServer";

export const useChatServices = () => {
  const setChats = useChat((state) => state.setChats);
  const serverId = useServer((state) => state.serverId);
  const chats = useChat((state) => state.chats);
  const selectedChat = useChat((state) => state.selectedChat);
  const setMessages = useChat((state) => state.setMessages);
  const messages = useChat((state) => state.messages);

  const getAllChatsQuery = useQuery({
    queryKey: ["direct-chats"],
    queryFn: () => getAllChats(serverId),
    select: (data) => {
      setChats(data);
      return data;
    },
  });

  const handleNewChatCreation = (chat: TChatSchema) => {
    if (chat.isGroupChat && serverId !== chat.server) return;
    setChats([chat, ...chats]);
  };

  const handleReceiveMessageEvent = (message: TMessageSchema) => {
    if (selectedChat?._id === message.chat) {
      setMessages([...messages, message]);
    }
  };

  return { getAllChatsQuery, handleNewChatCreation, handleReceiveMessageEvent };
};
