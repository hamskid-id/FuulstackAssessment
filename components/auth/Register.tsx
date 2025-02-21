"use client";

import { useState } from "react";
import { ProgressSteps } from "../shared/ProgressSteps";
import { StepOneLayout, individualTab } from "./StepOneLayout";
import { StepThreeCorporate } from "./StepThreeCorporate";
import { StepTwoCorporate } from "./StepTwoCorporate";
import { StepFour } from "./StepFour";
import { StepTwoIndividual } from "./StepTwoIndividual";
import { StepThreeIndividual } from "./StepThreeIndividual";

export const Register: React.FC = () => {
  const totalSteps = 4;
  const [activeStep, setActiveStep] = useState(1);
  const [accountType, setAccountType] = useState(individualTab);
  const isIndividual = accountType === individualTab;
  return (
    <div className="bg-lightgreen flex flex-col items-center justify-center mx-auto my-[60px] md:w-[655px] w-full">
      {activeStep === 1 && (
        <StepOneLayout
          setActiveStep={setActiveStep}
          setAccountType={setAccountType}
        />
      )}
      {activeStep === 2 &&
        (isIndividual ? (
          <StepTwoIndividual setActiveStep={setActiveStep} />
        ) : (
          <StepTwoCorporate setActiveStep={setActiveStep} />
        ))}
      {activeStep === 3 &&
        (isIndividual ? (
          <StepThreeIndividual setActiveStep={setActiveStep} />
        ) : (
          <StepThreeCorporate setActiveStep={setActiveStep} />
        ))}
      {activeStep === totalSteps && <StepFour />}
      <ProgressSteps activeStep={activeStep} totalSteps={totalSteps} />
    </div>
  );
};
