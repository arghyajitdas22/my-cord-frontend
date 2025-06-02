import * as React from "react";
import SideNav from "../../components/common/SideNav";
import ChatSection from "../../components/common/ChatSection";

interface ICommonLayoutProps {}

const CommonLayout: React.FunctionComponent<ICommonLayoutProps> = () => {
  return (
    <article className="bg-[#202225] h-screen overflow-hidden w-screen ">
      <header className="w-full py-2 text-center text-white text-base uppercase">
        my cord
      </header>

      <div className="flex">
        <SideNav />
        <section className="border-t border-l rounded-tl-md border-[#40444b] h-screen w-full flex">
          {/* chats section */}
          <ChatSection />
          {/* messages section */}
          <section className="w-full h-screen bg-[#2f3136]"></section>
        </section>
      </div>
    </article>
  );
};

export default CommonLayout;
