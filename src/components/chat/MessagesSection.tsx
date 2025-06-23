import * as React from "react";
import MessageDisplayBox from "./MessageDisplayBox";

interface IMessagesSectionProps {}

const MessagesSection: React.FunctionComponent<IMessagesSectionProps> = () => {
  return (
    <div className="w-full h-[80vh] flex flex-col p-2">
      <MessageDisplayBox />
    </div>
  );
};

export default MessagesSection;
