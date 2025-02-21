import * as z from "zod";

export const CorporateStepTwoSchema = z
  .object({
    companyEmail: z
      .string({
        required_error: "This field is required.",
      })
      .email({ message: "Please enter a valid email address." }) // Added email validation
      .min(8, { message: "Email must be at least 8 characters." }),
    companyPwd: z
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
    companyCpwd: z
      .string({
        required_error: "Please confirm password.",
      })
      .min(8, { message: "Password must be at least 8 characters" }),
  })
  .refine((data) => data.companyPwd === data.companyCpwd, {
    path: ["companyPwd"],
    message: "Passwords does not match",
  });
