import { DiscordLogo, DotsThreeVertical } from "@phosphor-icons/react";
import * as React from "react";
import { useChat } from "../../hooks/useChat";
import { useUser } from "../../hooks/useUser";
import { getChatName } from "../../utils/getChatName";
import { TChatSchema, TUserState } from "../../validators/user.validator";

interface IChatDetailsHeaderProps {}

const ChatDetailsHeader: React.FunctionComponent<
  IChatDetailsHeaderProps
> = () => {
  const selectedChat = useChat((state) => state.selectedChat);
  const user = useUser((state) => state.user);
  return (
    <div className="w-full bg-[#292b2f] px-3 py-2 flex items-center justify-between border-b border-[#40444b]">
      <div className="flex items-center gap-x-4">
        <div className="w-10 h-10 rounded-full bg-[#ed5555] flex items-center justify-center">
          <DiscordLogo size={20} weight="fill" color="white" />
        </div>
        <span className="text-white font-semibold">
          {getChatName(selectedChat as TChatSchema, user as TUserState)}
        </span>
      </div>

      <DotsThreeVertical
        size={28}
        color="white"
        className="cursor-pointer hover:scale-85 transition-all duration-150 ease-in-out"
      />
    </div>
  );
};

export default ChatDetailsHeader;
