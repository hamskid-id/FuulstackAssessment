import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { FontSize } from "@/lib/constants";

export interface IFormField {
  control: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  name: string;
  labelStyle?: string;
  label?: React.ReactNode | string;
  inputCategory: "input" | "select" | "textArea";
  value?: string;
  handleValueChange?: (e: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
  inputStyle?: string;
  inputType?: string;
  placeholder?: string;
  readOnly?: boolean;
  // required?: boolean;
  selectList?: string[];
}

export const FormInputField = ({
  control,
  name,
  labelStyle,
  label,
  inputCategory,
  inputType,
  readOnly = false,
  value,
  handleValueChange,
  inputStyle,
  placeholder,
  selectList,
}: IFormField) => {
  const inputCnStyle = cn(
    `h-[52px] rounded-[2px] border w-full`,
    inputStyle
  );

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          {label && (
            <FormLabel className={`${labelStyle} ${FontSize.sm} font-[300] leading-[16.41px]`}>
              {label} 
            </FormLabel>
          )}
          {inputCategory === "input" && (
            <FormControl>
              {handleValueChange ? (
                <Input
                  defaultValue={value}
                  readOnly={readOnly}
                  type={inputType || "text"}
                  className={inputCnStyle}
                  placeholder={placeholder && placeholder}
                  onChange={handleValueChange}
                />
              ) : (
                <Input
                  readOnly={readOnly}
                  type={inputType || "text"}
                  className={inputCnStyle}
                  placeholder={placeholder}
                  {...field}
                />
              )}
            </FormControl>
          )}
          {inputCategory === "textArea" && (
            <FormControl>
              <Textarea
                readOnly={readOnly}
                className={inputCnStyle}
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
          )}
          {inputCategory === "select" && (
            <div className="relative mb-2">
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={readOnly}
              >
                <FormControl>
                  <SelectTrigger className={inputCnStyle}>
                    <SelectValue
                      placeholder={placeholder}
                      className="flex items-center"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {selectList !== undefined &&
                    selectList.map((item, index) => (
                      <SelectItem value={item} key={index}>
                        {item}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
