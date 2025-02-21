"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { FormInputField } from "../shared/FormField";
import { Button } from "../ui/button";
import { FontSize } from "@/lib/constants";
import { PasswordResetSchema } from "@/lib/schema/PasswordResetSchema";
import { AuthLayout } from "./AuthLayout";
import { Text } from "../shared/text";
import { useRouter } from "next/navigation";

const defaultValue = {
  email: "",
};

export const PasswordReset: React.FC = () => {
  const [toast, setToast] = useState<string | null>(
    "An error occured Please try again"
  );

  const router = useRouter();

  const form = useForm<z.infer<typeof PasswordResetSchema>>({
    resolver: zodResolver(PasswordResetSchema),
    defaultValues: defaultValue,
  });

  function onSubmit(values: z.infer<typeof PasswordResetSchema>) {
    console.log(values);
  }

  return (
    <div className="mx-auto my-[60px] md:w-[655px] w-full">
      <AuthLayout
        title="Password Reset"
        subTitle="Reset your password to continue trading on ComX"
        toast={toast}
        setToast={setToast}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={`w-full items-center flex flex-col md:gap-[15px] gap-[10px]`}
          >
            <div className="w-full">
              <Text
                style={`${FontSize.md} leading-[21px] font-[400]`}
              >{`Enter the Email Address you registered with`}</Text>
            </div>
            <FormInputField
              control={form.control}
              name={"code"}
              inputCategory="input"
              inputType="text"
              placeholder="Enter your email"
            />
            <div className="w-full mb-[100px] mt-[10px]">
              <Text
                style={`cursor-pointer text-[grey] ${FontSize.md} leading-[21px] font-[400] text-center`}
              >
                Note that you’ll be sent an OTP to the email address provided
              </Text>
            </div>
            <div className="flex justify-between items-center w-full">
              <Button
                type="button"
                onClick={() => router.push("/auth/signin")}
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
    </div>
  );
};
