import * as React from "react";
import { DiscordLogo } from "@phosphor-icons/react";
import { TFriendRequest } from "../../validators/user.validator";
import { FriendRequestStatus } from "../../assets/data/data";
import { useFriendRequest } from "../../hooks/useFriendRequest";

interface IInvitationProps {
  invitation: TFriendRequest;
  handleStatusChange: () => void;
}

const Invitation: React.FunctionComponent<IInvitationProps> = ({
  invitation,
  handleStatusChange,
}) => {
  const { updateFriendRequestMutation } = useFriendRequest();

  const handleUpdateInvitationStatus = async (status: FriendRequestStatus) => {
    const data = { reqId: invitation._id, status };
    updateFriendRequestMutation.mutate(data, {
      onSettled: () => {
        handleStatusChange();
      },
    });
  };

  return (
    <div className="px-3 py-2 rounded-md bg-[#2f3136] flex items-senter gap-x-2">
      <div className="w-12 h-12 rounded-full bg-[#ed5555] flex items-center justify-center">
        <DiscordLogo size={24} weight="fill" color="white" />
      </div>

      <div className="flex flex-col gap-y-1">
        <p className="text-sm text-white font-semibold">
          {invitation.sender.username} sent you a friend request
        </p>
        <p className="text-sm font-semibold flex items-center gap-x-4">
          <button
            type="button"
            className="text-blue-500 cursor-pointer hover:scale-90 transition-all duration-150 ease-in-out"
            onClick={() =>
              handleUpdateInvitationStatus(FriendRequestStatus.ACCEPTED)
            }
          >
            Accept
          </button>
          <button
            type="button"
            className="text-red-500 cursor-pointer hover:scale-90 transition-all duration-150 ease-in-out"
            onClick={() =>
              handleUpdateInvitationStatus(FriendRequestStatus.REJECTED)
            }
          >
            Reject
          </button>
        </p>
      </div>
    </div>
  );
};

export default Invitation;
