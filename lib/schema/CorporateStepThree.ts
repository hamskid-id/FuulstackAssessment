import * as z from "zod";

export const CorporateStepThreeSchema = z.object({
  code: z
    .string({
      required_error: "Code field is required.",
    })
    .min(4, { message: "code must be at least 2 characters." }),
});
