import * as React from "react";
import SideNav from "../../components/common/SideNav";
import ChatSection from "../../components/common/ChatSection";
import AddFriendModal from "../../components/modals/AddFriendModal";
import { Notification } from "@phosphor-icons/react";
import InvitationModal from "../../components/modals/InvitationModal";
import { useInvitationModal } from "../../hooks/useInvitationModal";

interface ICommonLayoutProps {}

const CommonLayout: React.FunctionComponent<ICommonLayoutProps> = () => {
  const open = useInvitationModal((state) => state.open);
  return (
    <>
      <AddFriendModal />
      <InvitationModal />
      <article className="bg-[#202225] h-screen overflow-hidden w-screen ">
        <header className="w-full py-2 text-center text-white text-base uppercase relative flex items-center justify-center">
          my cord
          <Notification
            size={24}
            className="absolute right-8 cursor-pointer hover:scale-90 transition-all duration-150 ease-in-out"
            onClick={() => open()}
          />
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
    </>
  );
};

export default CommonLayout;
