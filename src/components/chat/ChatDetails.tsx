import * as React from "react";
import ChatDetailsHeader from "./ChatDetailsHeader";
import MessageBox from "./MessageBox";
import MessagesSection from "./MessagesSection";
import { useChat } from "../../hooks/useChat";
import NoChatSelected from "./NoChatSelected";

interface IChatDetailsProps {}

const ChatDetails: React.FunctionComponent<IChatDetailsProps> = () => {
  const chatId = useChat((state) => state.chatId);
  return (
    <section className="w-full h-screen bg-[#2f3136]">
      {chatId ? (
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
