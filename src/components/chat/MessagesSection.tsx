import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllMessages } from "../../services/user.service";
import { useChat } from "../../hooks/useSelectedChat";
import { useSocket } from "../../hooks/useSocket";
import { useChatServices } from "../../hooks/useChatServices";
import { ChatEventEnum } from "../../assets/data/data";
import MessageDisplayBox from "./MessageDisplayBox";
import { useMessages } from "../../hooks/useMessages";

interface IMessagesSectionProps {}

const MessagesSection: React.FunctionComponent<IMessagesSectionProps> = () => {
  const selectedChat = useChat((state) => state.selectedChat);
  const setMessages = useMessages((state) => state.setMessages);
  const messages = useMessages((state) => state.messages);
  const socket = useSocket((state) => state.socket);
  const { handleReceiveMessageEvent } = useChatServices();
  const { isLoading } = useQuery({
    queryKey: ["messages"],
    queryFn: () => getAllMessages(selectedChat?._id as string),
    select: (data) => {
      setMessages(data);
      return data;
    },
  });

  React.useEffect(() => {
    if (!socket) return;

    socket.on(ChatEventEnum.MESSAGE_RECEIVED_EVENT, handleReceiveMessageEvent);

    return () => {
      socket.off(
        ChatEventEnum.MESSAGE_RECEIVED_EVENT,
        handleReceiveMessageEvent
      );
    };
  }, [socket]);

  return (
    <div className="w-full h-[80vh] flex flex-col p-2 overflow-y-auto">
      {isLoading && <p className="text-xl text-white text-center">Loading..</p>}
      {!isLoading && messages.length === 0 && (
        <p className="text-xl text-white text-center">No Messages Yet!</p>
      )}
      {messages.map((message) => (
        <MessageDisplayBox key={message._id} message={message} />
      ))}
    </div>
  );
};

export default MessagesSection;
