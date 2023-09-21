import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { type Value } from "react-multi-date-picker";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "./components/document/Invoice";
import { z } from "zod";
import { createDateObjects } from "./utils/formatDate";

// TODO Add Zod input validation

export type FormData = {
  name?: string;
  date?: Date;
  address?: string;
  city?: string;
  phone?: string;
  rehearsalRate?: number;
  performanceRate?: number;
  rehearsalDates?: Date[];
  performanceDates?: Date[];
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
  const [formData, setFormData] = useState<FormData>({});
  const [title, setTitle] = useState<string>("");

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // TODO: Insert validation here
    if (!documentDate || !rehearsalDays || !performanceDays) {
      console.error("Dates needed");
      return;
    }

    const { date, rehearsalDateArr, performanceDateArr } = createDateObjects(
      documentDate,
      rehearsalDays,
      performanceDays
    );

    setFormData({
      ...formData,
      date: date,
      rehearsalDates: rehearsalDateArr,
      performanceDates: performanceDateArr,
    });
  }

  return (
    <div className="h-screen bg-blue-400">
      <h1 className="text-2xl text-center pt-2 font-bold">Invoice Maker</h1>
      <form className="m-5 mx-10" onSubmit={(e) => handleFormSubmit(e)}>
        <div className="mb-1 flex gap-1">
          <div>
            <label
              className="mb-1 block text-base font-medium text-[#07074D]"
              htmlFor="title"
            >
              Document Title
            </label>
            <input
              className="h-7 rounded-md border border-[#e0e0e0] bg-white py-3 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-xl"
              id="title"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-base font-medium text-[#07074D]"
            >
              Name
            </label>
            <input
              className="h-7 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-xl"
              id="name"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
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
        <div className="mb-1">
          <label
            className="mb-1 block text-base font-medium text-[#07074D]"
            htmlFor="address"
          >
            Address
          </label>
          <input
            id="address"
            type="text"
            className="h-7 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-xl"
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </div>
        <div className="mb-1">
          <label
            className="mb-1 block text-base font-medium text-[#07074D]"
            htmlFor="city"
          >
            City, State, Zip
          </label>
          <input
            id="city"
            type="text"
            className="h-7 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-xl"
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
        </div>
        <div>
          <label
            className="mb-1 block text-base font-medium text-[#07074D]"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            id="city"
            type="tel"
            className="h-7 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-xl"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
        <h2 className="text-center mt-3">Rates</h2>
        <div className="flex">
          <div>
            <label
              className="mb-1 block text-base font-medium text-[#07074D]"
              htmlFor="rehearsal-rate"
            >
              Rehearsals
            </label>
            <input
              id="rehearsal-rate"
              type="number"
              className="h-7 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-xl"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  rehearsalRate: Number(e.target.value),
                })
              }
            />
          </div>
          <div>
            <label
              className="mb-1 block text-base font-medium text-[#07074D]"
              htmlFor="performance-rate"
            >
              Performances
            </label>
            <input
              id="performance-rate"
              className="h-7 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-xl"
              type="number"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  performanceRate: Number(e.target.value),
                })
              }
            />
          </div>
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
