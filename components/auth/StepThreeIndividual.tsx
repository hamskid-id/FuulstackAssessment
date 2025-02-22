"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { FormInputField } from "../shared/FormField";
import { Button } from "../ui/button";
import { FontSize } from "@/lib/constants";
import { CorporateStepThreeSchema } from "@/lib/schema/CorporateStepThree";
import { AuthLayout } from "./AuthLayout";
import { Text } from "../shared/text";

interface IStepThreeIndividual {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue = {
  code: "",
};

export const StepThreeIndividual: React.FC<IStepThreeIndividual> = ({
  setActiveStep,
}) => {
  const [toast, setToast] = useState<string | null>(
    null
  );

  const form = useForm<z.infer<typeof CorporateStepThreeSchema>>({
    resolver: zodResolver(CorporateStepThreeSchema),
    defaultValues: defaultValue,
  });

  function onSubmit(values: z.infer<typeof CorporateStepThreeSchema>) {
    console.log(values);
    setActiveStep((prev) => prev + 1);
  }

  return (
    <AuthLayout
      title="Account details"
      subTitle="Sign up for an account and start trading today"
      toast={toast}
      setToast={setToast}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`w-full items-center flex flex-col md:gap-[25px] gap-[10px]`}
        >
          <div className="w-full">
            <Text
              style={`${FontSize.sm} leading-[21px] font-[400]`}
            >{`Enter the 4-digit code that was sent to +23472639482 and 
            name@mymail.com`}</Text>
          </div>
          <FormInputField
            control={form.control}
            name={"code"}
            inputCategory="input"
            inputType="number"
            placeholder="Enter Code"
          />
          <div className="flex flex-col gap-4 w-full mb-[100px]">
            <Text
              style={`cursor-pointer text-[grey] text-center ${FontSize.sm} leading-[21px] font-[400]`}
            >
              Resend Code
            </Text>
          </div>
          <div className="flex justify-between items-center w-full">
            <Button
              type="button"
              onClick={() => setActiveStep((prev) => prev - 1)}
              className={`rounded-[2px] ${FontSize.sm} font-[600] mt-[20px] shadow-none text-center text-black bg-white w-[132px] h-[46px]`}
            >
              BACK
            </Button>
            <Button
              className={`rounded-[2px] ${FontSize.sm} font-[600] mt-[20px] shadow-none text-center text-thickred bg-white w-[132px] h-[46px]`}
            >
              NEXT STEP
            </Button>
          </div>
        </form>
      </Form>
    </AuthLayout>
  );
};
