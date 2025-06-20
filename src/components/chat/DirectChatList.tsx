import { Plus } from "@phosphor-icons/react";
import * as React from "react";
import { useAddFriendModal } from "../../hooks/useAddFriendModal";
import { useChatServices } from "../../hooks/useChatServices";
import Chat from "./Chat";
import { useChat } from "../../hooks/useChat";

interface IDirectChatListProps {}

const DirectChatList: React.FunctionComponent<IDirectChatListProps> = () => {
  const open = useAddFriendModal((state) => state.open);
  const chats = useChat((state) => state.chats);
  const { isLoading } = useChatServices().getAllDirectChatsQuery;

  return (
    <>
      <div className="flex items-center justify-between text-gray-500 font-semibold pb-1">
        <span className="text-sm uppercase">direct messages</span>
        <Plus
          size={16}
          className="text-white cursor-pointer hover:scale-90 transition-all duration-150 ease-in-out"
          onClick={() => open()}
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
    </>
  );
};

export default DirectChatList;
