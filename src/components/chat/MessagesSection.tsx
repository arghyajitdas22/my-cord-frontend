import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllMessages } from "../../services/user.service";
import { useChat } from "../../hooks/useChat";
import { useSocket } from "../../hooks/useSocket";
import { useChatServices } from "../../hooks/useChatServices";
import { ChatEventEnum } from "../../assets/data/data";

interface IMessagesSectionProps {}

const MessagesSection: React.FunctionComponent<IMessagesSectionProps> = () => {
  const selectedChat = useChat((state) => state.selectedChat);
  const setMessages = useChat((state) => state.setMessages);
  const messages = useChat((state) => state.messages);
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
    <div className="w-full h-[80vh] flex flex-col p-2">
      {isLoading && <p className="text-xl text-white text-center">Loading..</p>}
      {messages.length === 0 ? (
        <p className="text-xl text-white text-center">No Messages Yet!</p>
      ) : (
        <p className="text-xl text-white text-center">{messages.length}</p>
      )}
    </div>
  );
};

export default MessagesSection;
