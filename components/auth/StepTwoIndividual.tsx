"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { FormInputField } from "../shared/FormField";
import { Button } from "../ui/button";
import { FontSize } from "@/lib/constants";
import { AuthLayout } from "./AuthLayout";
import { IndividualStepTwoSchema } from "@/lib/schema/individualStepTwo";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface IStepTwoIndividual {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue = {
  Pwd: "",
  Cpwd: "",
};

export const StepTwoIndividual: React.FC<IStepTwoIndividual> = ({
  setActiveStep,
}) => {
  const [toast, setToast] = useState<string | null>(null);
  const [phone, setPhone] = useState<string>("");

  const form = useForm<z.infer<typeof IndividualStepTwoSchema>>({
    resolver: zodResolver(IndividualStepTwoSchema),
    defaultValues: defaultValue,
  });

  function onSubmit(values: z.infer<typeof IndividualStepTwoSchema>) {
    console.log(values);
    if (phone === "") {
      setToast("Phone Number is required.");
    } else {
      setActiveStep((prev) => prev + 1);
    }
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
            name={"Pwd"}
            label={"Password"}
            inputCategory="input"
            placeholder="Enter Password"
          />
          <FormInputField
            control={form.control}
            name={"Cpwd"}
            label={"Confirm Password"}
            inputCategory="input"
            inputType="password"
            placeholder="Confirm Password"
          />
          <PhoneInput
            country={"ng"}
            value={phone}
            placeholder="Enter your phone number"
            onChange={(phoneVal) => setPhone(phoneVal)}
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
            buttonStyle={{
              borderRadius: "2px",
              height: "52px",
              width: "103px",
              background: "white",
              border: "1px solid #E8ECEF",
              position: "relative",
            }}
            inputStyle={{
              borderRadius: "2px",
              height: "52px",
              width: "100%",
              background: "white",
              border: "1px solid #E8ECEF",
            }}
            containerStyle={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row-reverse",
              gap: "10px",
            }}
          />
          <Button
            className={`rounded-[2px] ${FontSize.sm} font-[600] mt-[20px] shadow-none text-center text-thickred bg-white w-[132px] h-[46px]`}
          >
            VERIFY ACCOUNT
          </Button>
        </form>
      </Form>
    </AuthLayout>
  );
};
