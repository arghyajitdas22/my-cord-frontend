import { Plus } from "@phosphor-icons/react";
import * as React from "react";

interface IDirectChatListProps {}

const DirectChatList: React.FunctionComponent<IDirectChatListProps> = () => {
  return (
    <>
      <div className="flex items-center justify-between text-gray-500 pb-1">
        <span className="text-sm uppercase">direct messages</span>
        <Plus size={16} className="cursor-pointer" />
      </div>
      <hr className="text-gray-500" />
      <div className="h-[84vh] overflow-x-hidden overflow-y-auto pt-2"></div>
    </>
  );
};

export default DirectChatList;
