import * as React from "react";
import { useServer } from "../../hooks/useServer";
import UserControl from "../common/UserControl";
import { useUser } from "../../hooks/useUser";
import { TUserState } from "../../validators/user.validator";
import { useSocket } from "../../hooks/useSocket";
import { ChatEventEnum } from "../../assets/data/data";
import { useChatServices } from "../../hooks/useChatServices";
import { useAddFriendModal } from "../../hooks/useAddFriendModal";
import { Plus } from "@phosphor-icons/react";
import Chat from "./Chat";
import { useChatList } from "../../hooks/useChatList";

interface IChatListSectionProps {}

const ChatListSection: React.FunctionComponent<IChatListSectionProps> = () => {
  const serverId = useServer((state) => state.serverId);
  const user = useUser((state) => state.user);
  const socket = useSocket((state) => state.socket);
  const chats = useChatList((state) => state.chats);
  const setChats = useChatList((state) => state.setChats);
  const { handleNewChatCreation } = useChatServices();
  const openAddFriendModal = useAddFriendModal((state) => state.open);
  const { isLoading, isSuccess, data } = useChatServices().getAllChatsQuery;

  React.useEffect(() => {
    if (!socket) return;

    socket.on(ChatEventEnum.NEW_CHAT_EVENT, handleNewChatCreation);

    return () => {
      socket.off(ChatEventEnum.NEW_CHAT_EVENT, handleNewChatCreation);
    };
  }, [socket]);

  React.useEffect(() => {
    if (isSuccess) {
      setChats(data);
    }
  }, [isSuccess, data]);

  return (
    <section className="rounded-tl-md h-screen w-[400px] min-w-[400px] max-w-[400px] px-2 pt-2 pb-5 overflow-hidden">
      {/* based on dm or server */}
      <div className="flex items-center justify-between text-gray-500 font-semibold pb-1">
        <span className="text-sm uppercase">
          {serverId ? "direct chats" : "group chats"}
        </span>
        <Plus
          size={16}
          className="text-white cursor-pointer hover:scale-90 transition-all duration-150 ease-in-out"
          // --TODO: create a create group modal and open if server id is not null else open add friend modal
          onClick={() => openAddFriendModal()}
        />
      </div>
      <hr className="text-gray-500" />
      <div className="h-[84vh] overflow-x-hidden overflow-y-auto pt-2 flex flex-col gap-y-2">
        {isLoading && (
          <p className="text-center text-white text-sm">Loading..</p>
        )}
        {!isLoading && chats?.length === 0 && (
          <p className="text-center text-white text-sm">No Chats Available!</p>
        )}
        {!isLoading &&
          chats?.map((chat) => <Chat key={chat._id} chat={chat} />)}
      </div>
      <UserControl showIcons={true} user={user as TUserState} />
    </section>
  );
};

export default ChatListSection;
