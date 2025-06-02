import * as React from "react";
import { useServer } from "../../hooks/useServer";
import SereverChatList from "../chat/ServerChatList";
import DirectChatList from "../chat/DirectChatList";
import UserControl from "./UserControl";

interface IChatSectionProps {}

const ChatSection: React.FunctionComponent<IChatSectionProps> = () => {
  const serverId = useServer((state) => state.serverId);
  return (
    <section className="rounded-tl-md h-screen w-[400px] min-w-[400px] max-w-[400px] px-2 pt-2 pb-5 overflow-hidden">
      {/* based on dm or server */}
      {serverId ? <SereverChatList /> : <DirectChatList />}
      <UserControl />
    </section>
  );
};

export default ChatSection;
