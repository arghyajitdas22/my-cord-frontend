import * as React from "react";

interface ICommonLayoutProps {}

const CommonLayout: React.FunctionComponent<ICommonLayoutProps> = () => {
  return (
    <article className="bg-[#202225] h-screen overflow-hidden w-screen">
      <header className="w-full py-2 text-center text-white text-base uppercase">
        my cord
      </header>
    </article>
  );
};

export default CommonLayout;
