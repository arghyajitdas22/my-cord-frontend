import * as React from "react";
import { NavLink } from "react-router";
import { DiscordLogo } from "@phosphor-icons/react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useAddServerModal } from "../../hooks/useAddServerModal";
interface ISideNavProps {}

const SideNav: React.FunctionComponent<ISideNavProps> = () => {

  const open = useAddServerModal((state) => state.open);
  return (
    <nav className="hidden md:flex md:flex-col gap-y-2.5 w-16 h-screen">
      {/* logged in user's dms with no dm selected */}
      <NavLink to={`/chat`} className="flex gap-x-2 items-center h-fit">
        {({ isActive }) =>
          isActive ? (
            <>
              <span className="h-full rounded-r-md w-1 bg-white"></span>
              <div className="w-10 h-10 rounded-lg bg-[#5865f2] flex items-center justify-center">
                <DiscordLogo size={28} weight="fill" color="white" />
              </div>
            </>
          ) : (
            <div className="w-12 h-12 rounded-lg bg-[#40444b] hover:bg-[#5865f2] transition-all duration-150 ease-in-out flex items-center justify-center mx-auto">
              <DiscordLogo size={28} weight="fill" color="white" />
            </div>
          )
        }
      </NavLink>
      <hr className="text-gray-400 mx-2 h-0.5" />
      {/* servers will have almost the same navlink component and wil be rendered from an array given by backend */}
      <hr className="text-gray-400 mx-2 h-0.5" />
      {/* add server button */}
      <div className="group w-10 h-10 rounded-lg bg-[#40444b] hover:bg-[#5865f2] active:bg-white transition-all duration-150 ease-in-out flex items-center justify-center mx-auto cursor-pointer">
  <AiFillPlusCircle className="text-white text-xl transition-colors duration-150 group-active:text-black" onClick={() => open()} />
</div>

    </nav>
  );
};

export default SideNav;
