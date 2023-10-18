interface DateErrorMessageProps {
  message: string | undefined;
}

export default function DateErrorMessage({ message }: DateErrorMessageProps) {
  return <p className="-mt-2 text-red-600">{message}</p>;
}
