import * as z from "zod";

export const IndividualStepTwoSchema = z
  .object({
    Pwd: z
      .string({
        required_error: "Password field is required.",
      })
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[\W_]/, {
        message: "Password must contain at least one special character",
      }),
    Cpwd: z
      .string({
        required_error: "Please confirm password.",
      })
      .min(8, { message: "Password must be at least 8 characters" }),
  })
  .refine((data) => data.Pwd === data.Cpwd, {
    path: ["Pwd"],
    message: "Passwords does not match",
  });
