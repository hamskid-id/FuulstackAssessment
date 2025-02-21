"use client";

import React from "react";
import { Text } from "../shared/text";
import { FontSize } from "@/lib/constants";
import { Logo } from "../shared/Logo";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "nextjs-toploader/app";

interface IAuthCardProp {
  title: string;
  subTitle: string;
  clickFunc: () => void;
  authType: string;
}

const AuthCard: React.FC<IAuthCardProp> = ({
  title,
  subTitle,
  clickFunc,
  authType,
}) => (
  <div className="w-full flex flex-col md:p-[50px] p-[20px] bg-white">
    <div className="flex flex-col text-center items-center">
      <Text style={`mb-[7px] text-[30px] font-[400] leading-[35.16px]`}>
        {title}
      </Text>
      <Text style={`mb-[35px] ${FontSize.md} leading-[21px] font-[400]`}>
        {subTitle}
      </Text>
    </div>
    <Button
      onClick={clickFunc}
      className={cn(
        `rounded-[2px] ${FontSize.md} font-[600] mt-[30px] shadow-none text-center text-white w-full h-[46px] bg-black`,
        authType === "Sign in" && "bg-thickgreen"
      )}
    >
      {authType}
    </Button>
  </div>
);

export const AuthHomeScreen: React.FC = () => {
  const router = useRouter();
  return (
    <div className="bg-lightgreen flex flex-col items-center justify-center mx-auto my-[60px] md:w-[655px] w-full">
      <Logo />
      <div className="flex flex-col w-full mt-[30px] gap-[60px]">
        <AuthCard
          title={"Sign in to ComX"}
          subTitle={"Welcome to ComX"}
          clickFunc={() => router.push("/auth/signin")}
          authType={"Sign in"}
        />
        <AuthCard
          title={"Create an Account"}
          subTitle={"Join the family"}
          clickFunc={() => router.push("/auth/signup")}
          authType={"Register"}
        />
      </div>
    </div>
  );
};
