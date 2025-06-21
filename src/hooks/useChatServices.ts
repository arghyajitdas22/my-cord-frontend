import { useQuery } from "@tanstack/react-query";
import { getAllDirectChats } from "../services/user.service";
import { useChat } from "./useChat";
import { TChatSchema } from "../validators/user.validator";
import { useServer } from "./useServer";

export const useChatServices = () => {
  const setChats = useChat((state) => state.setChats);
  const serverId = useServer((state) => state.serverId);
  const chats = useChat((state) => state.chats);

  const getAllDirectChatsQuery = useQuery({
    queryKey: ["direct-chats"],
    queryFn: getAllDirectChats,
    select: (data) => {
      setChats(data);
      return data;
    },
  });

  const handleNewChatCreation = (chat: TChatSchema) => {
    if (chat.isGroupChat && serverId !== chat.server) return;
    setChats([chat, ...chats]);
  };

  return { getAllDirectChatsQuery, handleNewChatCreation };
};
