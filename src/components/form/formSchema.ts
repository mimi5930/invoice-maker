import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(1, "Please enter a title"),
  name: z.string().min(1, "Please enter a name"),
  date: z.date({
    required_error: "Select a date",
    invalid_type_error: "Please enter a valid date",
  }),
  address: z.string().min(1, "Please enter an address"),
  city: z.string().min(1, "Please enter a city"),
  phone: z
    .string()
    .min(1, "Please enter a phone number")
    .regex(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
      "Please enter a valid phone number"
    ),
  rehearsalRate: z.coerce
    .number({ invalid_type_error: "Please enter a number" })
    .nonnegative({ message: "Must be a positive value" }),
  performanceRate: z.coerce
    .number({ invalid_type_error: "Please enter a number" })
    .nonnegative({ message: "Must be a positive value" }),
  rehearsalDates: z
    .date({
      required_error: "Please select a date",
      invalid_type_error: "Please enter valid date(s)",
    })
    .array(),
  performanceDates: z
    .date({
      required_error: "Please select a date",
      invalid_type_error: "Please enter valid date(s)",
    })
    .array(),
});

export type FormData = z.infer<typeof formSchema>;