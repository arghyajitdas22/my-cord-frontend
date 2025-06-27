import { DiscordLogo } from "@phosphor-icons/react";
import * as React from "react";
import { TMessageSchema } from "../../validators/user.validator";
import { formatMessageTime } from "../../utils/modifyISOString";

interface IMessageDisplayBoxProps {
  message: TMessageSchema;
}

const MessageDisplayBox: React.FunctionComponent<IMessageDisplayBoxProps> = ({
  message,
}) => {
  return (
    <div className="w-fit max-w-1/2 flex flex-col items-end gap-y-1">
      <div className="flex items center gap-x-2">
        <div className="w-5 h-5 rounded-full bg-[#ed5555] flex items-center justify-center">
          <DiscordLogo size={10} weight="fill" color="white" />
        </div>
        <span className="text-white font-semibold text-sm">
          {message.sender.displayName}
        </span>
        <span className="text-gray-500 text-xs p-1">
          {formatMessageTime(message.updatedAt)}
        </span>
      </div>

      <p className="border border-[#40444b] rounded-md p-1 text-white text-sm bg-[#292b2f] w-full break-words">
        {message.content}
      </p>
    </div>
  );
};

export default MessageDisplayBox;
