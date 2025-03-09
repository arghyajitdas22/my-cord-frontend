import { z } from "zod";

const registerFormUserSchema = z.object({
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

const loginUserSchema = z.object({
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

export { registerFormUserSchema, loginUserSchema };
