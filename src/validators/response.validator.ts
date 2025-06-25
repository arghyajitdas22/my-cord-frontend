import { z } from "zod";

import {
  chatSchema,
  friendRequestSchema,
  messageSchema,
  userStateSchema,
} from "./user.validator";

export const responseSchema = z.object({
  statusCode: z.number().int(),
  message: z.string(),
  data: z.record(z.unknown()),
  success: z.boolean(),
});

export const errorResponseSchema = z
  .object({
    statusCode: z.number().int(),
    message: z.string(),
  })
  .passthrough();

export const registerUserResponseSchema = responseSchema.extend({
  data: z.object({
    accessToken: z.string(),
    user: userStateSchema,
  }),
});

export const searchUserResponseSchema = responseSchema.extend({
  data: z.object({
    users: z.array(userStateSchema),
    totalUsers: z.number(),
    totalPages: z.number(),
    currentPage: z.number(),
  }),
});

export const allInvitationsResponseSchema = responseSchema.extend({
  data: z.array(friendRequestSchema),
});

export const chatResponseSchema = responseSchema.extend({
  data: chatSchema,
});

export const allChatsResponseScahema = responseSchema.extend({
  data: z.array(chatSchema),
});

export const allMessagesResponseSchema = responseSchema.extend({
  data: z.array(messageSchema),
});

export const messageResponseSchema = responseSchema.extend({
  data: messageSchema,
});

export type ApiResponse<T> = z.infer<typeof responseSchema> & { data: T };

export type ErrorResponse = z.infer<typeof errorResponseSchema>;

export type TRegisterUserData = z.infer<typeof registerUserResponseSchema>;

export type TFriendRequestSocketPayloadSchema = z.infer<
  typeof friendRequestSchema
>;
