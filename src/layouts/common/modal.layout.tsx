import { X } from "@phosphor-icons/react";
import * as React from "react";

interface IModalProps {
  heading: string;
  subheading?: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FunctionComponent<IModalProps> = (props) => {
  return (
    <article className="h-screen w-screen overflow-hidden bg-black/30 absolute top-0 left-0 z-30 flex items-center justify-center">
      <section className="w-[500px] min-w-[500px] max-w-[500px] bg-[#1e2124] rounded-md p-3 h-[200px] relative">
        <X
          size={16}
          className="absolute top-2 right-2 cursor-pointer"
          onClick={props.onClose}
          color="white"
        />
        <p className="text-white text-xl text-center whitespace-nowrap">
          {props.heading}
        </p>
        {props.subheading && (
          <p className="text-gray-500 text-base text-center">
            {props.subheading}
          </p>
        )}
        {props.children}
      </section>
    </article>
  );
};

export default Modal;
