import * as React from "react";
import { NavLink } from "react-router";
import { DiscordLogo, Plus } from "@phosphor-icons/react";
import { useUser } from "../../hooks/useUser";

interface ISideNavProps {}

const SideNav: React.FunctionComponent<ISideNavProps> = () => {
  const user = useUser((state) => state.user);
  return (
    <nav className="hidden md:flex md:flex-col gap-y-2.5 w-16 h-screen pt-3 bg-gray-900">
      {/* me */}
      <NavLink
        to={`channel/${user?._id}`}
        className="flex gap-x-2 items-center h-fit"
      >
        {({ isActive }) =>
          isActive ? (
            <>
              <span className="h-full rounded-r-md w-0.5 bg-white"></span>
              <div className="w-10 h-10 rounded-md bg-[#5865f2] flex items-center justify-center">
                <DiscordLogo size={28} weight="fill" color="white" />
              </div>
            </>
          ) : (
            <div className="w-12 h-12 rounded-md bg-[#5865f2] flex items-center justify-center mx-auto">
              <DiscordLogo size={28} weight="fill" color="white" />
            </div>
          )
        }
      </NavLink>
      <hr className="text-gray-400 mx-2 h-0.5" />
      {/* servers will have almost the same navlink component and wil be rendered from an array given by backend */}
      <hr className="text-gray-400 mx-2 h-0.5" />
      <Plus
        size={48}
        weight="fill"
        color="white"
        className="mx-auto rounded-md"
      />
    </nav>
  );
};

export default SideNav;
