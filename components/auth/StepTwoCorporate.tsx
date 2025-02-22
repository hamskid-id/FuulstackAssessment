"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { FormInputField } from "../shared/FormField";
import { Button } from "../ui/button";
import { FontSize } from "@/lib/constants";
import { CorporateStepTwoSchema } from "@/lib/schema/CorporateStepTwo";
import { AuthLayout } from "./AuthLayout";

interface IStepTwoCorporate {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue = {
  companyEmail: "",
  companyPwd: "",
  companyCpwd: "",
};

export const StepTwoCorporate: React.FC<IStepTwoCorporate> = ({
  setActiveStep,
}) => {
  const [toast, setToast] = useState<string | null>(null);

  const form = useForm<z.infer<typeof CorporateStepTwoSchema>>({
    resolver: zodResolver(CorporateStepTwoSchema),
    defaultValues: defaultValue,
  });

  function onSubmit(values: z.infer<typeof CorporateStepTwoSchema>) {
    console.log(values);
    setActiveStep((prev) => prev + 1);
  }

  return (
    <AuthLayout
      title="Register new Account"
      subTitle="Sign up for an account and start trading today"
      toast={toast}
      setToast={setToast}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`w-full items-center flex flex-col md:gap-[25px] gap-[10px]`}
        >
          <FormInputField
            control={form.control}
            name={"companyEmail"}
            label={"Company Email"}
            inputCategory="input"
            inputType="email"
            placeholder="Enter your Company Email"
          />
          <FormInputField
            control={form.control}
            name={"companyPwd"}
            label={"Password"}
            inputCategory="input"
            placeholder="Enter Password"
          />
          <FormInputField
            control={form.control}
            name={"companyCpwd"}
            label={"Confirm Password"}
            inputCategory="input"
            inputType="password"
            placeholder="Confirm Password"
          />

          <Button
            className={`rounded-[2px] ${FontSize.sm} font-[600] mt-[20px] shadow-none text-center text-thickred bg-white w-[132px] h-[46px]`}
          >
            NEXT STEP
          </Button>
        </form>
      </Form>
    </AuthLayout>
  );
};
