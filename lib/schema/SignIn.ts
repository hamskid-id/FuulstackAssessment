import * as z from "zod";

export const SignInSchema = z.object({
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
  email: z
    .string({
      required_error: "This field is required.",
    })
    .email({ message: "Email address is incorrect" }) // Added email validation
    .min(8, { message: "Email must be at least 8 characters." }),
  staySignedIn: z.boolean().default(false).optional(),
});
