import * as z from "zod";

export const CorporateStepOneSchema = z.object({
  companyname: z
    .string({
      required_error: "This field is required.",
    })
    .min(2, { message: "company Name must be at least 2 characters." }),

  typeOfBusiness: z
    .string({
      required_error: "This field is required.",
    })
    .min(2, { message: "Type of Business must be at least 2 characters." }),

  dateOfIncorporation: z.coerce.date(),
});
