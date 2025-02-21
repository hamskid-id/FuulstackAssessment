import * as z from "zod";

export const PasswordResetSchema = z.object({
  email: z
    .string({
      required_error: "This field is required.",
    })
    .email({ message: "Email address is incorrect" }) // Added email validation
    .min(8, { message: "Email must be at least 8 characters." }),
});
