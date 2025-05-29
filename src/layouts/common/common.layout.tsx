import * as React from "react";
import SideNav from "../../components/common/SideNav";
import UserControl from "../../components/common/UserControl";

interface ICommonLayoutProps {}

const CommonLayout: React.FunctionComponent<ICommonLayoutProps> = () => {
  return (
    <article className="bg-[#202225] h-screen overflow-hidden w-screen relative">
      <header className="w-full py-2 text-center text-white text-base uppercase">
        my cord
      </header>

      <UserControl />

      <div className="flex">
        <SideNav />
        <section className="border-t border-l rounded-tl-md border-[#40444b] h-screen w-full flex">
          {/* chats section */}
          <section className="rounded-tl-md h-screen w-[450px]"></section>
          {/* messages section */}
          <section className="w-full h-screen bg-[#2f3136]"></section>
        </section>
      </div>
    </article>
  );
};

export default CommonLayout;
