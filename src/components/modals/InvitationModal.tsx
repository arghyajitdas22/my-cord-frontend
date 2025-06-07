import * as React from "react";
import Modal from "../../layouts/common/modal.layout";
import { useInvitationModal } from "../../hooks/useInvitationModal";
import Invitation from "../common/Invitation";

interface IInvitationModalProps {}

const InvitationModal: React.FunctionComponent<IInvitationModalProps> = () => {
  const close = useInvitationModal((state) => state.close);
  const display = useInvitationModal((state) => state.display);
  if (!display) return null;
  return (
    <Modal heading="Invitation Modal" onClose={close}>
      <div className="rounded-md border-gray-500 border w-full h-fit max-h-[200px] p-2 mt-2 overflow-y-auto overflow-x-hidden">
        <Invitation />
      </div>
    </Modal>
  );
};

export default InvitationModal;
