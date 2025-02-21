"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { FormInputField } from "../shared/FormField";
import { Button } from "../ui/button";
import { FontSize } from "@/lib/constants";
import { IndividualStepOneSchema } from "@/lib/schema/IndividualStepOneSchema";

interface IStepOneIndividual {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue = {
  firstname: "",
  lastname: "",
  email: "",
};

export const StepOneIndividual: React.FC<IStepOneIndividual> = ({setActiveStep}) => {
  const form = useForm<z.infer<typeof IndividualStepOneSchema>>({
    resolver: zodResolver(IndividualStepOneSchema),
    defaultValues: defaultValue,
  });

  function onSubmit(values: z.infer<typeof IndividualStepOneSchema>) {
    console.log(values);
    setActiveStep((prev) => prev+1)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`w-full items-center flex flex-col md:gap-[25px] gap-[10px]`}
      >
        <div className="w-full grid grid-cols-2 gap-[20px]">
          <FormInputField
            control={form.control}
            name={"firstname"}
            label={"Your First Name"}
            inputCategory="input"
            placeholder="Enter your First Name"
          />
          <FormInputField
            control={form.control}
            name={"lastname"}
            label={"Your Last Name"}
            inputCategory="input"
            placeholder="Enter your Last Name"
          />
        </div>
        <FormInputField
          control={form.control}
          name={"email"}
          label={"Your Email"}
          inputCategory="input"
          placeholder="no@sense.com"
        />

      <Button
        className={`rounded-[2px] ${FontSize.sm} font-[600] mt-[20px] shadow-none text-center text-thickred bg-white w-[132px] h-[46px]`}
      >
        NEXT STEP
      </Button>
      </form>
    </Form>
  );
};
