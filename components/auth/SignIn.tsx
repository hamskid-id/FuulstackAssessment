"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem
} from "@/components/ui/form";
import { FormInputField } from "../shared/FormField";
import { Button } from "../ui/button";
import { FontSize } from "@/lib/constants";
import { AuthLayout } from "./AuthLayout";
import { SignInSchema } from "@/lib/schema/SignIn";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";

const defaultValue = {
  Pwd: "",
  email: "",
  staySignedIn: false,
};

export const SignIn: React.FC = () => {
  const [customToast, setcustomToast] = useState<string | null>(null);
  const router = useRouter();
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: defaultValue,
  });

  function onSubmit(values: z.infer<typeof SignInSchema>) {
    console.log(values);
    toast.success("Authentication SuccessFull!");
  }

  return (
    <div className="mx-auto my-[60px] md:w-[655px] w-full">
      <AuthLayout
        title="Sign in to ComX"
        subTitle="Enter your login credentials below."
        toast={customToast}
        setToast={setcustomToast}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={`w-full items-center flex flex-col md:gap-[25px] gap-[10px]`}
          >
            <FormInputField
              control={form.control}
              name={"email"}
              label={"Your Email"}
              inputCategory="input"
              placeholder="no@sense.com"
            />
            <FormInputField
              control={form.control}
              name={"Pwd"}
              label={"Your Password"}
              inputCategory="input"
              placeholder="Enter Password"
            />
            <div className="flex justify-between items-center w-full">
              <FormField
                control={form.control}
                name="staySignedIn"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3 ">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className={`${FontSize.md} font-[400] !mt-0`}>
                      Stay Signed In
                    </div>
                  </FormItem>
                )}
              />
              <Link
                href="/auth/reset-password"
                className={`${FontSize.md} text-thickred font-[400]`}
              >
                Forget your password?
              </Link>
            </div>
            <div className="flex flex-col gap-[5px] w-full">
              <Button
                className={`rounded-[2px] ${FontSize.sm} font-[600] mt-[30px] shadow-none text-center text-white w-full h-[46px] bg-thickgreen`}
              >
                Sign in
              </Button>
              <Button
                type="button"
                onClick={() => router.back()}
                className={`rounded-[2px] ${FontSize.sm} font-[600] mt-[30px] shadow-none text-center text-black w-full h-[46px] bg-lightgreen`}
              >
                Back
              </Button>
            </div>
          </form>
        </Form>
      </AuthLayout>
    </div>
  );
};
