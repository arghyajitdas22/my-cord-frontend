import * as React from "react";

interface IMeProps {}

const Me: React.FunctionComponent<IMeProps> = () => {
  return (
    <section className="w-full h-screen overflow-hidden flex text-white">
      {/* list of players */}
      <section className="w-[300px] border-r border-black bg-gray-800 h-screen">
        <div className="h-12 border-b border-black p-2.5">
          <h1 className="uppercase text-sm">direct messages</h1>
        </div>
      </section>
      {/* chat section */}
      <section className="w-full h-screen bg-gray-700">
        <div className="h-12 border-b border-black p-2.5">
          <h2>chat name</h2>
        </div>
      </section>
    </section>
  );
};

export default Me;
