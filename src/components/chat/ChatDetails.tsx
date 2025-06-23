import * as React from "react";
import ChatDetailsHeader from "./ChatDetailsHeader";
import MessageBox from "./MessageBox";
import MessagesSection from "./MessagesSection";

interface IChatDetailsProps {}

const ChatDetails: React.FunctionComponent<IChatDetailsProps> = () => {
  return (
    <section className="w-full h-screen bg-[#2f3136]">
      {/* chat details header */}
      <ChatDetailsHeader />
      {/* messages section */}
      <MessagesSection />
      {/* message box */}
      <MessageBox />
    </section>
  );
};

export default ChatDetails;
