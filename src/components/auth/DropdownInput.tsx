import { CaretDown, CaretUp } from "@phosphor-icons/react";
import * as React from "react";

interface IDropdownInputProps {
  placeholder: string;
  options: string[];
}

const DropdownInput: React.FunctionComponent<IDropdownInputProps> = ({
  placeholder,
  options,
}) => {
  const [value, setValue] = React.useState<string>(placeholder);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div className="relative w-full cursor-pointer bg-black text-white">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full rounded-sm  border-none p-2.5 flex items-center justify-between"
      >
        <span>{value}</span>
        {isOpen ? <CaretUp size={12} /> : <CaretDown size={12} />}
      </div>
      {isOpen && (
        <div className="w-full rounded-sm py-1 flex flex-col h-[200px] z-10 overflow-y-scroll absolute bg-black">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setValue(option);
                setIsOpen(false);
              }}
              className={`w-full py-1.5 pl-2 ${
                value === option ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownInput;
