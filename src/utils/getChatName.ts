import { TChatSchema, TUserState } from "../validators/user.validator";

export const getChatName = (chat: TChatSchema, user: TUserState) => {
  if (chat.isGroupChat) return chat.name;
  if (user) {
    return chat.participants.filter(
      (participant) => participant._id !== user._id
    )[0].displayName;
  }
  return chat.participants[0].displayName;
};
