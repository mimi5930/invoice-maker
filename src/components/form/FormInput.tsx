import { type UseFormRegister } from "react-hook-form";
import type { FormData } from "../../App";

type InputProps = {
  id: string;
  labelTitle: string;
  data: keyof FormData;
  type?: React.HTMLInputTypeAttribute;
  register: UseFormRegister<FormData>;
};

export default function FormInput({
  id,
  data,
  labelTitle,
  type = "text",
  register,
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
        className="h-7 rounded-md border border-[#e0e0e0] bg-white py-3 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-xl"
        id={id}
        type={type}
        {...register(data)}
      />
    </div>
  );
}
