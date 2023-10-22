import { z } from "zod";

const extraFields = z.object({
  description: z.string().min(1, "Please enter a description"),
  dates: z
    .date({
      required_error: "Please select a date",
      invalid_type_error: "Please enter valid date(s)",
    })
    .array(),
  rate: z.coerce
    .number({ invalid_type_error: "Please enter a number" })
    .nonnegative({ message: "Must be a positive value" })
    .gte(0.01, "Please enter a rate"),
});

export const formSchema = z.object({
  title: z.string().min(1, "Please enter a title"),
  name: z.string().min(1, "Please enter a name"),
  date: z.date({
    required_error: "Select a date",
    invalid_type_error: "Please enter a valid date",
  }),
  address: z.string().min(1, "Please enter an address"),
  city: z.string().min(1, "Please enter a city"),
  state: z.string().min(1, "Please enter a state"),
  zip: z.string().min(1, "Please enter a zip code"),
  phone: z
    .string()
    .min(1, "Please enter a phone number")
    .regex(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
      "Please enter a valid phone number",
    ),
  rehearsalRate: z.coerce
    .number({
      required_error: "Please enter a rate",
      invalid_type_error: "Please enter a number",
    })
    .nonnegative({ message: "Must be a positive value" })
    .gte(0.01, "Please enter a rate"),
  performanceRate: z.coerce
    .number({
      invalid_type_error: "Please enter a number",
    })
    .nonnegative({ message: "Must be a positive value" })
    .gte(0.01, "Please enter a rate"),
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
  extraFields: extraFields.array().optional(),
});

export type FormData = z.infer<typeof formSchema>;
