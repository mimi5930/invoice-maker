import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "./components/document/Invoice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormInput from "./components/form/FormInput";
import { formSchema, type FormData } from "./components/form/formSchema";

export default function App() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    getValues,
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  return (
    <div className="h-screen bg-blue-400">
      <h1 className="pt-2 text-center text-2xl font-bold">Invoice Maker</h1>
      <form
        className="m-5 mx-[15%] border border-solid border-black"
        onSubmit={handleSubmit((data) => {
          console.log("success!", data);
        })}
      >
        <div className="mb-1 flex justify-between gap-1">
          <FormInput
            id="title"
            labelTitle="Document Title"
            data="title"
            register={register}
            errors={errors}
          />
          <FormInput
            id="name"
            labelTitle="Name"
            data="name"
            register={register}
            errors={errors}
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
            onChange={(dates) => {
              if (dates) {
                setValue("date", new Date(dates.toString()), {
                  shouldValidate: true,
                });
              }
            }}
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
              className="mb-1 mr-4 rounded-full bg-[#0074d9] px-3 py-2 text-sm font-medium tracking-wider text-blue-100 shadow-sm hover:bg-[#7EA6F0] hover:shadow-2xl"
              onClick={() => {
                setValue("date", new Date());
              }}
            >
              Today
            </button>
          </DatePicker>
        </div>
        <FormInput
          id="address"
          labelTitle="Address"
          data="address"
          register={register}
          errors={errors}
        />
        <FormInput
          id="city"
          labelTitle="City, State, Zip"
          data="city"
          register={register}
          errors={errors}
        />
        <FormInput
          id="phone"
          labelTitle="Phone"
          data="phone"
          register={register}
          errors={errors}
        />
        <h2 className="mt-3 justify-self-center">Rates</h2>
        <div className="flex">
          <FormInput
            id="rehearsal-rate"
            labelTitle="Rehearsals"
            type="number"
            data="rehearsalRate"
            register={register}
            errors={errors}
          />
          <FormInput
            id="performance-rate"
            labelTitle="Performances"
            type="number"
            data="performanceRate"
            register={register}
            errors={errors}
          />
        </div>
        <h2 className="mb-1 block text-base font-medium text-[#07074D]">
          Rehearsal Dates
        </h2>
        <DatePicker
          multiple
          onChange={(dates) => {
            if (dates) {
              setValue(
                "rehearsalDates",
                dates
                  .toString()
                  .split(",")
                  .map((currentDate) => {
                    return new Date(currentDate);
                  }),
                { shouldValidate: true },
              );
            }
          }}
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
          onChange={(dates) => {
            if (dates) {
              setValue(
                "performanceDates",
                dates
                  .toString()
                  .split(",")
                  .map((currentDate) => {
                    return new Date(currentDate);
                  }),
                { shouldValidate: true },
              );
            }
          }}
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
            paddingRight: "1.5rem",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            outline: "none",
            marginBottom: ".5rem",
          }}
        ></DatePicker>
        <button
          className="mr-2 rounded-full bg-[#0074d9] px-3 py-2 text-sm font-medium tracking-wider text-blue-100 shadow-sm hover:bg-[#7EA6F0] hover:shadow-2xl"
          type="submit"
          disabled={!isValid}
        >
          Validate
        </button>
      </form>
      {isValid && (
        <PDFDownloadLink
          document={<Invoice data={getValues()} />}
          fileName={getValues().title + ".pdf"}
        >
          <button
            className="inline-block rounded bg-blue-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            /* className="mr-2 mt-2 rounded-full bg-[#0074d9] px-3 py-2 text-sm font-medium tracking-wider text-blue-100 shadow-sm hover:bg-[#7EA6F0] hover:shadow-2xl"> */
          >
            Download
          </button>
        </PDFDownloadLink>
      )}
    </div>
  );
}
