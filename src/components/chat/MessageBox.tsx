import { Plus, Smiley } from "@phosphor-icons/react";
import * as React from "react";

interface IMessageBoxProps {}

const MessageBox: React.FunctionComponent<IMessageBoxProps> = () => {
  return (
    <div className="w-full bg-[#292b2f] p-4 flex items-center justify-around gap-x-4 border-t border-[#40444b]">
      <input
        type="text"
        placeholder="Message"
        className="border border-gray-500 rounded-xl p-2 placeholder:text-gray-300 w-full text-white focus:border-gray-500 focus:outline-0 focus:ring-0"
      />
      <Smiley
        size={28}
        color="white"
        className="cursor-pointer hover:scale-85 transition-all duration-150 ease-in-out"
      />
      <Plus
        size={28}
        color="white"
        className="cursor-pointer hover:scale-85 transition-all duration-150 ease-in-out"
      />
    </div>
  );
};

export default MessageBox;
