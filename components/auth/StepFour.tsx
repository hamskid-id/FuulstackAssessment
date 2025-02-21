"use client";
import React from "react";
import { FontSize } from "@/lib/constants";
import { AuthLayout } from "./AuthLayout";
import { Text } from "../shared/text";
import { Button } from "../ui/button";
import { CustomImage } from "../shared/CustomImage";
import successImg from "../../public/success.svg";
import { useRouter } from "nextjs-toploader/app";

export const StepFour: React.FC = () => {
  const router = useRouter();
  return (
    <AuthLayout>
      <div className="flex flex-col w-full items-center justify-center">
        <CustomImage src={successImg} style="mb-7 w-[273px] h-[273px]" />
        <Text style={`${FontSize.xl} mb-4 font-[400] leading-[35.16px]`}>
          Registration Complete
        </Text>
        <Text
          style={`mb-[20px] ${FontSize.sm} leading-[21px] font-[400] text-center`}
        >
          <h6>Dear [fName] Your registration is now complete.</h6>
          <h6>
            You May Proceed to your dashboard and start trading commodities.
          </h6>
        </Text>
        <Button
          onClick={() => router.push("/dashboard")}
          className={`rounded-[2px] ${FontSize.sm} font-[600] mt-[20px] shadow-none text-center text-thickred bg-white min-w-[132px] h-[46px]`}
        >
          GO TO DASHBOARD
        </Button>
      </div>
    </AuthLayout>
  );
};
