import { useAddServerModal } from "../../hooks/useAddServerModal";
import * as React from "react";
import Modal from "../../layouts/common/modal.layout";
import { Camera } from "@phosphor-icons/react";

interface AddServerModalProps {}

const AddServerModal: React.FC<AddServerModalProps> = () => {
  const display = useAddServerModal((state) => state.display);
  const close = useAddServerModal((state) => state.close);

  const [serverName, setServerName] = React.useState<string>("");
  const [serverIcon, setServerIcon] = React.useState<File | null>(null);
  if (!display) return null;
  return (
    <Modal
      heading="Create Your Own Server"
      subheading="Give your new server a personality with a name and an icon. You can always change it later."
      onClose={close}
    >
      <div className="flex flex-col space-y-2 pt-2 justify-center items-center">
        <label
          htmlFor="upload-input"
          className="w-25 h-25 rounded-full border-2 border-dashed border-gray-400 flex flex-col items-center justify-center cursor-pointer text-gray-400 hover:border-[#b8a7ea] hover:text-[#b8a7ea] transition"
        >
          <Camera size={24} />
          <span className="text-sm font-medium mt-1">UPLOAD</span>
        </label>

        {/* Hidden File Input */}
        <input
          id="upload-input"
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setServerIcon(e.target.files[0]);
            }
          }}
          className="hidden"
        />
        {/* <input
                    type="file"
                    placeholder="Add Server Icon"
                    accept="image/*"
                    onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                            setServerIcon(e.target.files[0]);
                        }
                    }}
                    className="w-25 h-25 p-2 rounded-full border-2 border-dashed border-gray-500 focus:border-[#b8a7ea] focus:outline-[#b8a7ea] focus:ring-[#b8a7ea] text-white"
                /> */}
        <h5 className="text-white font-bold text-left">Server's Name</h5>
        <input
          type="text"
          placeholder="Server Name"
          value={serverName}
          onChange={(e) => setServerName(e.target.value.trim())}
          className="w-full p-2 rounded-md border-2 border-gray-500 focus:border-[#b8a7ea] focus:outline-[#b8a7ea] focus:ring-[#b8a7ea] placeholder:text-gray-300 text-white"
        />

        <button
          type="button"
          className="w-full p-2 rounded-md text-white font-semibold text-sm text-center bg-[#b8a7ea]"
          disabled={!serverName || !serverIcon}
          onClick={() => {
            close();
          }}
        >
          Create Server
        </button>
      </div>
    </Modal>
  );
};

export default AddServerModal;
