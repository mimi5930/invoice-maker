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
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  function onSubmit(data: FormData) {
    console.log(errors);
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
              className="bg-[#0074d9] mr-4 mb-1 px-3 py-2 text-sm shadow-sm font-medium tracking-wider text-blue-100 rounded-full hover:shadow-2xl hover:bg-[#7EA6F0]"
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
        <h2 className="justify-self-center mt-3">Rates</h2>
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
                { shouldValidate: true }
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
                { shouldValidate: true }
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
