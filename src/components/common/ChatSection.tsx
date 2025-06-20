import * as React from "react";
import { useServer } from "../../hooks/useServer";
import SereverChatList from "../chat/ServerChatList";
import DirectChatList from "../chat/DirectChatList";
import UserControl from "./UserControl";
import { useUser } from "../../hooks/useUser";
import { TUserState } from "../../validators/user.validator";
import { useSocket } from "../../hooks/useSocket";
import { ChatEventEnum } from "../../assets/data/data";
import { useChatServices } from "../../hooks/useChatServices";

interface IChatSectionProps {}

const ChatSection: React.FunctionComponent<IChatSectionProps> = () => {
  const serverId = useServer((state) => state.serverId);
  const user = useUser((state) => state.user);
  const socket = useSocket((state) => state.socket);
  const { handleNewChatCreation } = useChatServices();

  React.useEffect(() => {
    if (!socket) return;

    socket.on(ChatEventEnum.NEW_CHAT_EVENT, handleNewChatCreation);

    return () => {
      socket.off(ChatEventEnum.NEW_CHAT_EVENT, handleNewChatCreation);
    };
  }, [socket]);
  return (
    <section className="rounded-tl-md h-screen w-[400px] min-w-[400px] max-w-[400px] px-2 pt-2 pb-5 overflow-hidden">
      {/* based on dm or server */}
      {serverId ? <SereverChatList /> : <DirectChatList />}
      <UserControl showIcons={true} user={user as TUserState} />
    </section>
  );
};

export default ChatSection;
