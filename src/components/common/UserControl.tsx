import {
  DiscordLogo,
  Microphone,
  SignOut,
  VideoCamera,
} from "@phosphor-icons/react";
import * as React from "react";
import { TUserState } from "../../validators/user.validator";

interface IUserControlProps {
  showIcons: boolean;
  user: TUserState;
}

const UserControl: React.FunctionComponent<IUserControlProps> = ({
  showIcons,
  user,
}) => {
  return (
    <div
      className={`px-3 py-2 rounded-md bg-[#2f3136] ${
        showIcons ? "flex items-center justify-between" : ""
      }`}
    >
      {/* icon display name and username */}
      <div className="flex items-center gap-x-4">
        <div className="w-10 h-10 rounded-full bg-[#ed5555] flex items-center justify-center">
          <DiscordLogo size={20} weight="fill" color="white" />
        </div>
        <div className="flex flex-col gap-y-1">
          <span className="text-sm text-white">{user?.displayName}</span>
          <span className="text-xs text-gray-300">{user?.username}</span>
        </div>
      </div>
      {/* user control of video, mic and logout */}
      {showIcons && (
        <div className="flex items-center gap-x-2 text-gray-500">
          {/* camera */}
          <button
            type="button"
            className="flex items-center justify-center p-2 rounded-sm hover:bg-[#4a4c51] transition-all duration-150 ease-in-out cursor-pointer"
          >
            <VideoCamera size={20} />
          </button>
          {/* mic */}
          <button
            type="button"
            className="flex items-center justify-center p-2 rounded-sm hover:bg-[#4a4c51] transition-all duration-150 ease-in-out cursor-pointer"
          >
            <Microphone size={20} />
          </button>
          {/* logout */}
          <button
            type="button"
            className="flex items-center justify-center p-2 rounded-sm hover:bg-[#4a4c51] transition-all duration-150 ease-in-out cursor-pointer"
          >
            <SignOut size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default UserControl;
