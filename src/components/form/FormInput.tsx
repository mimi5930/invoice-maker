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
    <div>
      <label
        className="mb-1 block text-base font-medium text-[#07074D]"
        htmlFor={id}
      >
        {labelTitle}
      </label>
      <input
        className="h-7 rounded-md border border-[#e0e0e0] bg-white pl-2 py-3 text-base  outline-none focus:border-[#6A64F1] focus:shadow-xl"
        id={id}
        type={type}
        {...register(data)}
      />
      {errors[data] && <p className="text-red-600">{errors[data]?.message}</p>}
    </div>
  );
}
