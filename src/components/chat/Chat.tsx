import * as React from "react";
import { TChatSchema, TUserState } from "../../validators/user.validator";
import { DiscordLogo } from "@phosphor-icons/react";
import { formatMessageTime } from "../../utils/modifyISOString";
import { getChatName } from "../../utils/getChatName";
import { useUser } from "../../hooks/useUser";
import { useChat } from "../../hooks/useChat";

interface IChatProps {
  chat: TChatSchema;
}

const Chat: React.FunctionComponent<IChatProps> = ({ chat }) => {
  const user = useUser((state) => state.user);
  const setSelectedChat = useChat((state) => state.setSelectedChat);
  return (
    <div
      onClick={() => setSelectedChat(chat)}
      className="px-3 py-2 rounded-md bg-[#2f3136] flex items-senter gap-x-3 cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out"
    >
      <div className="w-12 h-12 rounded-full bg-[#ed5555] flex items-center justify-center">
        <DiscordLogo size={24} weight="fill" color="white" />
      </div>

      <div className="flex flex-col gap-y-1 w-full">
        <p className="text-sm text-white font-semibold flex items-center justify-between w-full">
          <span>{getChatName(chat, user as TUserState)}</span>
          <span className="text-gray-500 font-normal">
            {formatMessageTime(
              chat.lastMessage ? chat.lastMessage.updatedAt : chat.createdAt
            )}
          </span>
        </p>
        <p className="text-sm font-semibold flex items-center gap-x-4 truncate text-nowrap">
          {chat.lastMessage?.content}
        </p>
      </div>
    </div>
  );
};

export default Chat;
