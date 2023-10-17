import { z } from "zod";

const extraFields = z.object({
  description: z.string().nonempty("Please enter a description"),
  dates: z
    .date({
      required_error: "Please select a date",
      invalid_type_error: "Please enter valid date(s)",
    })
    .array(),
  rate: z.coerce
    .number({ invalid_type_error: "Please enter a number" })
    .nonnegative({ message: "Must be a positive value" }),
});

export const formSchema = z.object({
  title: z.string().nonempty("Please enter a title"),
  name: z.string().nonempty("Please enter a name"),
  date: z.date({
    required_error: "Select a date",
    invalid_type_error: "Please enter a valid date",
  }),
  address: z.string().nonempty("Please enter an address"),
  city: z.string().nonempty("Please enter a city"),
  state: z.string().nonempty("Please enter a state"),
  zip: z.string().nonempty("Please enter a zip code"),
  phone: z
    .string()
    .nonempty("Please enter a phone number")
    .regex(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
      "Please enter a valid phone number",
    ),
  rehearsalRate: z.coerce
    .number({
      required_error: "Please enter a rate",
      invalid_type_error: "Please enter a number",
    })
    .nonnegative({ message: "Must be a positive value" }),
  performanceRate: z.coerce
    .number({
      invalid_type_error: "Please enter a number",
    })
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
  extraFields: extraFields.array().optional(),
});

export type FormData = z.infer<typeof formSchema>;
