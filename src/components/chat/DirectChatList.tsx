import { Plus } from "@phosphor-icons/react";
import * as React from "react";
import { useAddFriendModal } from "../../hooks/useAddFriendModal";

interface IDirectChatListProps {}

const DirectChatList: React.FunctionComponent<IDirectChatListProps> = () => {
  const open = useAddFriendModal((state) => state.open);
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
      <div className="h-[84vh] overflow-x-hidden overflow-y-auto pt-2"></div>
    </>
  );
};

export default DirectChatList;
