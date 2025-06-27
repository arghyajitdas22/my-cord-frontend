import { PaperPlaneTilt, Plus, Smiley } from "@phosphor-icons/react";
import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  messageBoxSchema,
  TMessageBoxSchema,
} from "../../validators/user.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useChat } from "../../hooks/useSelectedChat";
import { useChatServices } from "../../hooks/useChatServices";

interface IMessageBoxProps {}

const MessageBox: React.FunctionComponent<IMessageBoxProps> = () => {
  const selectedChat = useChat((state) => state.selectedChat);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid },
    reset,
  } = useForm<TMessageBoxSchema>({
    resolver: zodResolver(messageBoxSchema),
    mode: "onChange",
  });
  const { sendMessageMutation } = useChatServices();

  const handleSendMessage: SubmitHandler<TMessageBoxSchema> = (data) => {
    sendMessageMutation.mutate(
      { chatId: selectedChat?._id as string, content: data.content },
      {
        onSuccess: () => reset(),
      }
    );
  };

  return (
    <form
      className="w-full bg-[#292b2f] p-4 flex items-center justify-around gap-x-4 border-t border-[#40444b]"
      onSubmit={handleSubmit(handleSendMessage)}
    >
      <input
        type="text"
        id="content"
        placeholder="Message"
        className="border border-gray-500 rounded-xl p-2 placeholder:text-gray-300 w-full text-white focus:border-gray-500 focus:outline-0 focus:ring-0"
        {...register("content", {
          required: { value: true, message: "Provide content" },
          minLength: {
            value: 1,
            message: "Provide content",
          },
        })}
      />
      <Smiley
        size={28}
        color="white"
        className="cursor-pointer hover:scale-85 transition-all duration-150 ease-in-out"
      />
      <Plus
        size={28}
        color="white"
        className="cursor-pointer hover:scale-85 transition-all duration-150 ease-in-out"
      />
      <button type="submit" disabled={isSubmitting || !isValid}>
        <PaperPlaneTilt
          size={28}
          color="white"
          className="cursor-pointer hover:scale-85 transition-all duration-150 ease-in-out"
        />
      </button>
    </form>
  );
};

export default MessageBox;
