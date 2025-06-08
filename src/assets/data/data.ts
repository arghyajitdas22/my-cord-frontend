const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const day = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const generateYears = () => {
  const years: number[] = [];
  for (let year = 2022; year >= 1873; year--) {
    years.push(year);
  }
  return years;
};

const ChatEventEnum = Object.freeze({
  // ? once user is ready to go
  CONNECTED_EVENT: "connected",
  // ? when user gets disconnected
  DISCONNECT_EVENT: "disconnect",
  // ? when user joins a socket room
  JOIN_CHAT_EVENT: "joinChat",
  // ? when participant gets removed from group, chat gets deleted or leaves a group
  LEAVE_CHAT_EVENT: "leaveChat",
  // ? when admin updates a group name
  UPDATE_GROUP_NAME_EVENT: "updateGroupName",
  // ? when new message is received
  MESSAGE_RECEIVED_EVENT: "messageReceived",
  // ? when there is new one on one chat, new group chat or user gets added in the group
  NEW_CHAT_EVENT: "newChat",
  // ? when there is an error in socket
  SOCKET_ERROR_EVENT: "socketError",
  // ? when participant stops typing
  STOP_TYPING_EVENT: "stopTyping",
  // ? when participant starts typing
  TYPING_EVENT: "typing",
  // ? when message is deleted
  MESSAGE_DELETE_EVENT: "messageDeleted",
  // ? when user sends friend request
  FRIEND_REQUEST_SENT_EVENT: "frindRequestSent",
  // ? when user accepts friend request
  FRIEND_REQUEST_ACCEPTED_EVENT: "frindRequestAccepted",
  // ? when user sends rejected request
  FRIEND_REQUEST_REJECTED_EVENT: "frindRequestRejected",
});

const AvailableChatEvents = Object.values(ChatEventEnum);

enum FriendRequestStatus {
  PENDING = "pending",
  ACCEPTED = "accepted",
  REJECTED = "rejected",
}

export {
  months,
  day,
  generateYears,
  ChatEventEnum,
  AvailableChatEvents,
  FriendRequestStatus,
};
