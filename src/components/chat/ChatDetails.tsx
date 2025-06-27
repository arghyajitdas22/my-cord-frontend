import * as React from "react";
import ChatDetailsHeader from "./ChatDetailsHeader";
import MessageBox from "./MessageBox";
import MessagesSection from "./MessagesSection";
import { useChat } from "../../hooks/useSelectedChat";
import NoChatSelected from "./NoChatSelected";

interface IChatDetailsProps {}

const ChatDetails: React.FunctionComponent<IChatDetailsProps> = () => {
  const selectedChat = useChat((state) => state.selectedChat);
  return (
    <section className="w-full h-screen bg-[#2f3136]">
      {selectedChat ? (
        <>
          {/* chat details header */}
          <ChatDetailsHeader />
          {/* messages section */}
          <MessagesSection />
          {/* message box */}
          <MessageBox />
        </>
      ) : (
        <NoChatSelected />
      )}
    </section>
  );
};

export default ChatDetails;
