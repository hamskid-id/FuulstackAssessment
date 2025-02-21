"use client";
import { Text } from "../shared/text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StepOneIndividual } from "./StepOneIndividual";
import { useState } from "react";
import { FontSize } from "@/lib/constants";
import { StepOneCorporate } from "./StepOneCorporate";
import { AuthLayout } from "./AuthLayout";

interface IStepOneLayout {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  setAccountType: React.Dispatch<React.SetStateAction<string>>;
}

export const individualTab = "Individual";
export const corporateTab = "Corporate";
const tabTriggerStyle = `border min-w-[146px] ${FontSize.sm} h-[52px]  rounded-[2px] data-[state=active]:text-white data-[state=active]:bg-black`;

export const StepOneLayout: React.FC<IStepOneLayout> = ({
  setActiveStep,
  setAccountType,
}) => {
  const [toast, setToast] = useState<string | null>(null);
  return (
    <AuthLayout
      title="Register new Account"
      subTitle="Sign up for an account and start trading today"
      toast={toast}
      setToast={setToast}
    >
      <Text style={`text-start ${FontSize.sm} mb-[10px] font-[400]`}>
        Select the category that best describe you
      </Text>
      <div>
        <Tabs defaultValue={individualTab} className="w-full">
          <TabsList className="justify-start items-start flex w-full gap-3 mb-4 h-fit bg-white">
            <TabsTrigger
              onClick={() => setAccountType(individualTab)}
              value={individualTab}
              className={tabTriggerStyle}
            >
              {individualTab}
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setAccountType(corporateTab)}
              value={corporateTab}
              className={tabTriggerStyle}
            >
              {corporateTab}
            </TabsTrigger>
          </TabsList>
          <TabsContent value={individualTab}>
            <StepOneIndividual setActiveStep={setActiveStep} />
          </TabsContent>
          <TabsContent value={corporateTab}>
            <StepOneCorporate setActiveStep={setActiveStep} />
          </TabsContent>
        </Tabs>
      </div>
    </AuthLayout>
  );
};
