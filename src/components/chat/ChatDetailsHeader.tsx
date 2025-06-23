import { DiscordLogo, DotsThreeVertical } from "@phosphor-icons/react";
import * as React from "react";

interface IChatDetailsHeaderProps {}

const ChatDetailsHeader: React.FunctionComponent<
  IChatDetailsHeaderProps
> = () => {
  return (
    <div className="w-full bg-[#292b2f] px-3 py-2 flex items-center justify-between border-b border-[#40444b]">
      <div className="flex items-center gap-x-4">
        <div className="w-10 h-10 rounded-full bg-[#ed5555] flex items-center justify-center">
          <DiscordLogo size={20} weight="fill" color="white" />
        </div>
        <span className="text-white font-semibold">Chat Name</span>
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
