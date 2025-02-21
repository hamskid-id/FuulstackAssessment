import { FontSize } from "@/lib/constants";
import { Text } from "./text";
import { X } from "lucide-react";

export interface ICustomToast {
  toast?: string | null;
  setToast?: React.Dispatch<React.SetStateAction<string | null>>;
}

export const CustomToast: React.FC<ICustomToast> = ({ toast, setToast }) => (
  <div>
    <div
      className={` ${FontSize.sm} flex justify-between items-center w-full rounded-[10px] border border-thickred bg-lightred p-[20px] text-thickred text-[16px] font-[500] leading-[18.75px] min-w-[419px] border-thickred`}
    >
      <Text style="text-start">{toast}</Text>
      <X
        onClick={() => setToast && setToast(null)}
        className="cursor-pointer"
      />
    </div>
  </div>
);
