import * as z from "zod";

export const IndividualStepOneSchema = z.object({
  firstname: z
    .string({
      required_error: "This field is required.",
    })
    .min(2, { message: "First Name must be at least 2 characters." }),

  lastname: z
    .string({
      required_error: "Last Name field is required.",
    })
    .min(2, { message: "Last Name must be at least 2 characters." }),

  email: z
    .string({
      required_error: "This field is required.",
    })
    .email({ message: "Email address is incorrect" }) // Added email validation
    .min(8, { message: "Email must be at least 8 characters." }),
});
