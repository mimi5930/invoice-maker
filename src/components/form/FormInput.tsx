import { FieldErrors, type UseFormRegister } from "react-hook-form";
import type { FormData } from "./formSchema";
import { twMerge } from "tailwind-merge";

type InputProps = {
  id: string;
  labelTitle: string;
  data: keyof FormData;
  type?: React.HTMLInputTypeAttribute;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  labelClassName?: string;
  inputClassName?: string;
  parentClassName?: string;
};

export default function FormInput({
  id,
  data,
  labelTitle,
  type = "text",
  register,
  errors,
  labelClassName,
  inputClassName,
  parentClassName,
}: InputProps) {
  return (
    <div className={twMerge(parentClassName, "w-full")}>
      <label
        className={twMerge(
          "mb-1 block text-base font-medium text-[#07074D]",
          labelClassName,
        )}
        htmlFor={id}
      >
        {labelTitle}
      </label>
      <input
        className={twMerge(
          "h-7 w-full rounded-md border border-[#e0e0e0] bg-white py-3 pl-2 text-base outline-none focus:border-[#6A64F1] focus:shadow-xl",
          inputClassName,
        )}
        id={id}
        type={type}
        {...register(data)}
      />
      {errors[data] && <p className="text-red-600">{errors[data]?.message}</p>}
    </div>
  );
}
