import * as React from "react";
import Modal from "../../layouts/common/modal.layout";
import { useAddFriendModal } from "../../hooks/useAddFriendModal";

interface IAddFriendModalProps {}

const AddFriendModal: React.FunctionComponent<IAddFriendModalProps> = () => {
  const display = useAddFriendModal((state) => state.display);
  const close = useAddFriendModal((state) => state.close);
  if (!display) return null;
  return (
    <Modal
      heading="Add Friend"
      subheading="Send friend request"
      onClose={close}
    >
      <p>add friend modal</p>
    </Modal>
  );
};

export default AddFriendModal;
