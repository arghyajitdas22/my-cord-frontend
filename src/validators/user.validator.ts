import { z } from "zod";

export const monthMap: Record<string, number> = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
};

export const registerFormUserSchema = z.object({
  email: z
    .string({ required_error: "Please provide an email" })
    .email()
    .toLowerCase()
    .trim()
    .regex(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      {
        message: "Please provide a valid email address",
      }
    ),
  displayName: z
    .string({ required_error: "Please provide a display name" })
    .min(1, { message: "Please provide a display name" })
    .trim(),
  username: z
    .string({ required_error: "Please provide a username" })
    .min(1, { message: "Please provide a username" })
    .max(20)
    .trim(),
  password: z
    .string({ required_error: "Please provide a password" })
    .min(6)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      {
        message:
          "Password must contain at least 6 characters, including one uppercase letter, one lowercase letter, one number and one special character",
      }
    ),
  month: z.enum([
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
  ]),
  day: z.number().int().min(1).max(31),
  year: z.number().min(1873).max(new Date().getFullYear()),
});

export const registerUserSchema = z.object({
  email: z
    .string({ required_error: "Please provide an email" })
    .email()
    .toLowerCase()
    .trim()
    .regex(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      {
        message: "Please provide a valid email address",
      }
    ),
  displayName: z
    .string({ required_error: "Please provide a display name" })
    .trim(),
  username: z
    .string({ required_error: "Please provide a username" })
    .max(20)
    .trim(),
  password: z
    .string({ required_error: "Please provide a password" })
    .min(6)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      {
        message:
          "Password must contain at least 6 characters, including one uppercase letter, one lowercase letter, one number and one special character",
      }
    ),
  dateOfBirth: z.object({
    day: z.number().min(1).max(31, "Invalid day"),
    month: z.union([
      z.number().min(1).max(12, "Invalid month"),
      z
        .enum([
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
        ])
        .transform((m) => monthMap[m.toLowerCase()]),
    ]),
    year: z.number().max(new Date().getFullYear(), "Invalid year"),
  }),
});

export const loginUserSchema = z.object({
  email: z
    .string({ required_error: "Please provide an email" })
    .email()
    .toLowerCase()
    .trim()
    .regex(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      {
        message: "Please provide a valid email address",
      }
    ),
  password: z
    .string({ required_error: "Please provide a password" })
    .min(6)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      {
        message:
          "Password must contain at least 6 characters, including one uppercase letter, one lowercase letter, one number and one special character",
      }
    ),
});

export const userStateSchema = z
  .object({
    _id: z.string(),
    email: z.string().email(),
    displayName: z.string(),
    username: z.string(),
    accessToken: z.string().optional(),
  })
  .passthrough();

export const friendRequestSchema = z.object({
  _id: z.string(),
  receiver: z.string(),
  status: z.enum(["pending", "accepted", "rejected"]),
  sender: userStateSchema,
});

export const messageSchema = z.object({
  _id: z.string(),
  sender: userStateSchema,
  chat: z.string(),
  content: z.string(),
  attachments: z
    .array(
      z.object({
        url: z.string(),
      })
    )
    .optional(),
  isEdited: z.boolean(),
  isDeleted: z.boolean(),
  createdAt: z.string().datetime({ offset: true }),
  updatedAt: z.string().datetime({ offset: true }),
});

export const chatSchema = z.object({
  _id: z.string(),
  name: z.string(),
  isGroupChat: z.boolean(),
  lastMessage: messageSchema.optional(),
  participants: z.array(userStateSchema),
  server: z.string().optional(),
  createdAt: z.string().datetime({ offset: true }),
  updatedAt: z.string().datetime({ offset: true }),
});

export type TUserState = z.infer<typeof userStateSchema>;

export type TUSerStorage = {
  state: {
    user: TUserState;
  };
};

export type TFriendRequest = z.infer<typeof friendRequestSchema>;

export type TMessageSchema = z.infer<typeof messageSchema>;

export type TChatSchema = z.infer<typeof chatSchema>;
