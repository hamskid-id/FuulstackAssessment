"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { FormInputField } from "../shared/FormField";
import { Button } from "../ui/button";
import { FontSize } from "@/lib/constants";
import { CorporateStepOneSchema } from "@/lib/schema/CorporateStepOne";

interface IStepOneCorporate {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue = {
  companyname: "",
  typeOfBusiness: "",
  dateOfIncorporation: new Date(),
};

export const StepOneCorporate: React.FC<IStepOneCorporate> = ({
  setActiveStep,
}) => {
  const form = useForm<z.infer<typeof CorporateStepOneSchema>>({
    resolver: zodResolver(CorporateStepOneSchema),
    defaultValues: defaultValue,
  });

  function onSubmit(values: z.infer<typeof CorporateStepOneSchema>) {
    console.log(values);
    setActiveStep((prev) => prev+1);
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
            name={"companyname"}
            label={"Company Name"}
            inputCategory="input"
            placeholder="Enter your Comapny Name"
          />
          <FormInputField
            control={form.control}
            name={"typeOfBusiness"}
            label={"Type Of Business"}
            inputCategory="select"
            selectList={["type1", "type2"]}
            placeholder="Select Type Of Business"
          />
        </div>
        <FormInputField
          control={form.control}
          name={"dateOfIncorporation"}
          label={"Date Of Incorporation"}
          inputCategory="input"
          inputType="date"
          placeholder="Select Date"
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
