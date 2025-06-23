import * as React from "react";

interface INoChatSelectedProps {}

const NoChatSelected: React.FunctionComponent<INoChatSelectedProps> = () => {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <p className="text-white text-4xl">No Chat Selected</p>
    </div>
  );
};

export default NoChatSelected;
