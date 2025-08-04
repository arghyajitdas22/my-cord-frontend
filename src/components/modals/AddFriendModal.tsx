import * as React from "react";
import Modal from "../../layouts/common/modal.layout";
import { useAddFriendModal } from "../../hooks/useAddFriendModal";
import { TUserState } from "../../validators/user.validator";
import UserSearch from "../common/UserSearch";
import UserControl from "../common/UserControl";
import { useFriendRequest } from "../../hooks/useFriendRequest";

interface IAddFriendModalProps {}

const AddFriendModal: React.FunctionComponent<IAddFriendModalProps> = () => {
  const display = useAddFriendModal((state) => state.display);
  const close = useAddFriendModal((state) => state.close);
  const [selectedUser, setSelectedUser] = React.useState<TUserState | null>(
    null
  );
  const { sendFrienRequestMutation } = useFriendRequest();

  const onSelect = (user: TUserState) => {
    setSelectedUser(user);
  };

  const handleSendFriendRequest = () => {
    sendFrienRequestMutation.mutate(selectedUser?._id as string, {
      onSuccess: () => {
        setSelectedUser(null);
        close();
      },
    });
  };

  if (!display) return null;
  return (
    <Modal
      heading="Add Friend"
      subheading="Send friend request"
      onClose={close}
    >
      <div className="flex flex-col space-y-2 pt-2">
        {selectedUser ? (
          <UserControl showIcons={false} user={selectedUser} />
        ) : (
          <UserSearch
            onSelect={onSelect}
            inputStyles="w-full p-2 rounded-md border-2 border-gray-500 focus:border-[#b8a7ea] focus:outline-[#b8a7ea] focus:ring-[#b8a7ea] placeholder:text-gray-300 text-white"
          />
        )}
        <button
          type="button"
          className="w-full p-2 rounded-md text-white font-semibold text-sm text-center bg-[#b8a7ea] cursor-pointer"
          disabled={!selectedUser}
          onClick={handleSendFriendRequest}
        >
          Send Friend Request
        </button>
      </div>
    </Modal>
  );
};

export default AddFriendModal;
