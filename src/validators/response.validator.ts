import { z } from "zod";

import { userStateSchema } from "./user.validator";

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

export type ApiResponse<T> = z.infer<typeof responseSchema> & { data: T };

export type ErrorResponse = z.infer<typeof errorResponseSchema>;

export type TRegisterUserData = z.infer<typeof registerUserResponseSchema>;
