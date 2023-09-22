import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { type Value } from "react-multi-date-picker";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "./components/document/Invoice";
import { z } from "zod";
import { createDateObjects } from "./utils/formatDate";
import { Form, useForm } from "react-hook-form";
import FormInput from "./components/form/FormInput";

// TODO Add Zod input validation

export type FormData = {
  title: string;
  name: string;
  date: Date;
  address: string;
  city: string;
  phone: string;
  rehearsalRate: number;
  performanceRate: number;
  rehearsalDates: Date[];
  performanceDates: Date[];
};

const formSchema = z.object({
  name: z.string().min(1),
  date: z.date(),
  address: z.string().min(1),
  city: z.string().min(1),
  phone: z.string().min(1),
  rehearsalRate: z.number(),
  performanceRate: z.number(),
  rehearsalDates: z.date().array().nonempty(),
  performanceDates: z.date().array().nonempty(),
});

export default function App() {
  const [documentDate, setDocumentDate] = useState<Value>(new Date());
  const [rehearsalDays, setRehearsalDays] = useState<Value>([]);
  const [performanceDays, setPerformanceDays] = useState<Value>([]);
  const { register, handleSubmit, setValue } = useForm<FormData>();

  function onSubmit(data: FormData) {
    if (!documentDate || !rehearsalDays || !performanceDays) {
      return;
    }
    const { date, rehearsalDateArr, performanceDateArr } = createDateObjects(
      documentDate,
      rehearsalDays,
      performanceDays
    );
    setValue("date", date, { shouldValidate: true });
    setValue("rehearsalDates", rehearsalDateArr, { shouldValidate: true });
    setValue("performanceDates", performanceDateArr, { shouldValidate: true });
    console.log(data);
  }

  return (
    <div className="h-screen bg-blue-400">
      <h1 className="text-2xl text-center pt-2 font-bold">Invoice Maker</h1>
      <form className="m-5 mx-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1 flex gap-1">
          <FormInput
            id="title"
            labelTitle="Document Title"
            data="title"
            register={register}
          />
          <FormInput
            id="name"
            labelTitle="Name"
            data="name"
            register={register}
          />
        </div>
        <div>
          <label
            htmlFor="documentDate"
            className="mb-1 block text-base font-medium text-[#07074D]"
          >
            Date
          </label>
          <DatePicker
            id="documentDate"
            value={documentDate}
            onChange={setDocumentDate}
            style={{
              minWidth: "50%",
              height: "1.75rem",
              borderRadius: "0.375rem",
              borderWidth: "1px",
              borderColor: "rgb(224 224 224)",
              backgroundColor: "white",
              paddingTop: "0.75rem",
              paddingBottom: "0.75rem",
              fontSize: "1rem",
              lineHeight: "1.5rem",
              outline: "none",
              marginBottom: ".5rem",
            }}
            format="MM/DD/YYYY"
          >
            <button
              className="bg-[#0074d9] mr-4 mb-1 px-3 py-2 text-sm shadow-sm font-medium tracking-wider text-blue-100 rounded-full hover:shadow-2xl hover:bg-[#7EA6F0]"
              onClick={() => setDocumentDate(new DateObject())}
            >
              Today
            </button>
            <button
              className="bg-[#0074d9] mr-2 px-3 py-2 text-sm shadow-sm font-medium tracking-wider text-blue-100 rounded-full hover:shadow-2xl hover:bg-[#7EA6F0]"
              onClick={() => setDocumentDate(null)}
            >
              Reset
            </button>
          </DatePicker>
        </div>
        <FormInput
          id="address"
          labelTitle="Address"
          data="address"
          register={register}
        />
        <FormInput
          id="city"
          labelTitle="City, State, Zip"
          data="city"
          register={register}
        />
        <FormInput
          id="phone"
          labelTitle="Phone"
          data="phone"
          register={register}
        />
        <h2 className="justify-self-center mt-3">Rates</h2>
        <div className="flex">
          <FormInput
            id="rehearsal-rate"
            labelTitle="Rehearsals"
            type="number"
            data="rehearsalRate"
            register={register}
          />
          <FormInput
            id="performance-rate"
            labelTitle="Performances"
            type="number"
            data="performanceRate"
            register={register}
          />
        </div>
        <h2 className="mb-1 block text-base font-medium text-[#07074D]">
          Rehearsal Dates
        </h2>
        <DatePicker
          multiple
          value={rehearsalDays}
          onChange={setRehearsalDays}
          plugins={[<DatePanel />]}
          format="MM/DD/YYYY"
          style={{
            width: "50%",
            height: "1.75rem",
            borderRadius: "0.375rem",
            borderWidth: "1px",
            borderColor: "rgb(224 224 224)",
            backgroundColor: "white",
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            outline: "none",
            marginBottom: ".5rem",
          }}
        ></DatePicker>
        <h2 className="mb-1 block text-base font-medium text-[#07074D]">
          Performance Dates
        </h2>
        <DatePicker
          multiple
          value={performanceDays}
          onChange={setPerformanceDays}
          plugins={[<DatePanel />]}
          format="MM/DD/YYYY"
          style={{
            width: "50vw",
            height: "1.75rem",
            borderRadius: "0.375rem",
            borderWidth: "1px",
            borderColor: "rgb(224 224 224)",
            backgroundColor: "white",
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            outline: "none",
            marginBottom: ".5rem",
          }}
        ></DatePicker>
        <button
          className="bg-[#0074d9] mr-2 px-3 py-2 text-sm shadow-sm font-medium tracking-wider text-blue-100 rounded-full hover:shadow-2xl hover:bg-[#7EA6F0]"
          type="submit"
        >
          Submit
        </button>
      </form>

      <div>
        {/* <PDFDownloadLink
          document={<Invoice data={formData} />}
          fileName={title + ".pdf"}
        >
          <Button>Download</Button>
        </PDFDownloadLink> */}
      </div>
    </div>
  );
}
