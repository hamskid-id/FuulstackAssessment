"use client";

import { cn } from "@/lib/utils";
import { Text } from "./text";
import { FontSize } from "@/lib/constants";

interface IProgressSteps {
  activeStep: number;
  totalSteps: number;
}

export const ProgressSteps: React.FC<IProgressSteps> = ({
  activeStep,
  totalSteps,
}) => {
  return (
    <div className="flex flex-col items-center mt-[30px] gap-[20px]">
      <Text style={`${FontSize.sm} text-start text-black`}>
        <span>{activeStep}</span>
        <span className="text-[grey]">{`/${totalSteps}`}</span>
      </Text>
      <div className="relative flex items-center w-full max-w-md">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="flex items-center w-full relative">
            {/* Progress Line */}
            {index !== 0 && (
              <div className="flex gap-0 left-0 top-1/2 h-[4px] md:w-[153px] w-[50px] bg-gray-300">
                <div
                  className={cn(
                    `h-full bg-light_grey transition-all duration-700 w-[153px]`,
                    activeStep >= index && "bg-thickred"
                  )}
                />
              </div>
            )}
            {/* Step Circle */}
            <div
              className={cn(
                `z-10 w-[12px] bg-light_grey border-lightgrey h-[12px] flex items-center justify-center rounded-full border-2 text-white text-sm transition-all duration-700`,
                activeStep > index && "bg-thickred border-thickred"
              )}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
