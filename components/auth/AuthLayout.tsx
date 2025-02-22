"use client";

import React from "react";
import { CustomToast } from "../shared/CustomToast";
import { ICustomToast } from "../shared/CustomToast";
import { Text } from "../shared/text";
import { FontSize } from "@/lib/constants";
import { Logo } from "../shared/BrandLogo";

interface IAuthLayoutProp extends ICustomToast {
  children: React.ReactNode;
  title?: string;
  subTitle?: string;
}

export const AuthLayout: React.FC<IAuthLayoutProp> = ({
  children,
  title,
  subTitle,
  toast = null,
  setToast,
}) => {
  return (
    <div className="gap-[25px] w-full m-auto flex flex-col items-center justify-center">
      <Logo />
      {toast && <CustomToast toast={toast} setToast={setToast} />}
      <div className="w-full flex flex-col md:p-[50px] p-[20px] bg-white">
        <div className="flex flex-col text-center items-center">
          {title && (
            <Text
              style={`mb-[7px] md:text-[30px] text-[25px] font-[400] leading-[35.16px]`}
            >
              {title}
            </Text>
          )}
          {subTitle && (
            <Text style={`mb-[35px] ${FontSize.md} leading-[21px] font-[400]`}>
              {subTitle}
            </Text>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
