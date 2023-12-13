import { FieldErrors, type UseFormRegister } from "react-hook-form";
import type { FormData } from "./formSchema";

type InputProps = {
  id: string;
  labelTitle: string;
  data: keyof FormData;
  type?: React.HTMLInputTypeAttribute;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

export default function FormInput({
  id,
  data,
  labelTitle,
  type = "text",
  register,
  errors,
}: InputProps) {
  return (
    <div className="w-full">
      <label
        className="mb-1 block text-base font-medium text-[#07074D] dark:text-slate-200"
        htmlFor={id}
      >
        {labelTitle}
      </label>
      <input
        className="h-7 w-full rounded-md border border-blue-400 bg-white py-3 pl-2 text-base outline-none focus:border-[#6A64F1] focus:shadow-xl dark:border-[#e0e0e0]"
        id={id}
        type={type}
        {...register(data)}
      />
      {errors[data] && (
        <p className="text-red-600 dark:text-red-300">
          {errors[data]?.message}
        </p>
      )}
    </div>
  );
}
