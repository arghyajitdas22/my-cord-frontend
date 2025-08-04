import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllChats, sendMessage } from "../services/user.service";
import { useChat } from "./useSelectedChat";
import { TChatSchema, TMessageSchema } from "../validators/user.validator";
import { useServer } from "./useServer";
import { useChatList } from "./useChatList";
import { useMessages } from "./useMessages";

export const useChatServices = () => {
  const serverId = useServer((state) => state.serverId);
  const setChats = useChatList((state) => state.setChats);
  const chats = useChatList((state) => state.chats);
  const selectedChat = useChat((state) => state.selectedChat);
  const setMessages = useMessages((state) => state.setMessages);
  const messages = useMessages((state) => state.messages);

  const getAllChatsQuery = useQuery({
    queryKey: ["direct-chats"],
    queryFn: () => getAllChats(serverId),
  });

  const handleNewChatCreation = (chat: TChatSchema) => {
    if (chat.isGroupChat && serverId !== chat.server) return;
    setChats([chat, ...chats]);
  };

  const handleReceiveMessageEvent = (message: TMessageSchema) => {
    console.log(messages);
    if (selectedChat?._id === message.chat) {
      setMessages([...messages, message]);
    }
  };

  const sendMessageMutation = useMutation({
    mutationFn: sendMessage,
    onSuccess: (data) => {
      setMessages([...messages, data]);
    },
  });

  return {
    getAllChatsQuery,
    handleNewChatCreation,
    handleReceiveMessageEvent,
    sendMessageMutation,
  };
};
