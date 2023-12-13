import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import FormInput from "./FormInput";
import { formSchema, type FormData } from "./formSchema";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import Invoice from "../document/Invoice";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Down, Up } from "../svg";
import DateErrorMessage from "./DateErrorMessage";

const datePickerStyles: React.CSSProperties = {
  width: "100%",
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
};

export default function Form() {
  // react-hook-form hook
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    getValues,
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  // field array hook
  const { fields, append, remove } = useFieldArray({
    control,
    name: "extraFields",
  });

  // form component
  return (
    <form
      className="mx-[15%] mt-5 rounded bg-white p-3 shadow-lg dark:bg-gray-500 "
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <div className="mb-1 flex justify-between gap-3">
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
      <div className="w-1/2">
        <label
          htmlFor="documentDate"
          className="mb-1 block text-base font-medium text-[#07074D] dark:text-slate-200"
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
          style={datePickerStyles}
          format="MM/DD/YYYY"
        ></DatePicker>
        {errors.date && <DateErrorMessage message={errors.date?.message} />}
      </div>
      <FormInput
        id="address"
        labelTitle="Address"
        data="address"
        register={register}
        errors={errors}
      />
      <div className="my-1 flex gap-3">
        <FormInput
          id="city"
          labelTitle="City"
          data="city"
          register={register}
          errors={errors}
        />
        <FormInput
          id="state"
          labelTitle="State"
          data="state"
          register={register}
          errors={errors}
        />
        <FormInput
          id="zip"
          labelTitle="Zip"
          data="zip"
          register={register}
          errors={errors}
        />
      </div>
      <FormInput
        id="phone"
        labelTitle="Phone"
        data="phone"
        register={register}
        errors={errors}
      />
      <h2 className="my-3 text-base font-bold text-[#07074D] dark:text-slate-200">
        Rates:
      </h2>
      <div className="mb-1 flex justify-between gap-3">
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
      <h2 className="mb-1 block text-base font-medium text-[#07074D] dark:text-slate-200">
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
        style={datePickerStyles}
      ></DatePicker>
      {errors.rehearsalDates && (
        <DateErrorMessage message={errors.rehearsalDates?.message} />
      )}
      <h2 className="mb-1 block text-base font-medium text-[#07074D] dark:text-slate-200">
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
        style={datePickerStyles}
      ></DatePicker>
      {errors.performanceDates && (
        <DateErrorMessage message={errors.performanceDates?.message} />
      )}
      {fields.map((field, index) => {
        return (
          <div
            key={field.id}
            className="m-4 rounded border border-[#e0e0e0] p-4"
          >
            <h2 className="mb-3 text-base font-medium text-[#07074D] dark:text-slate-200">
              Additional Service
            </h2>
            <div className="w-full">
              <label
                className="mb-1 block text-base font-medium text-[#07074D] dark:text-slate-200"
                htmlFor="description"
              >
                Service Description:
              </label>
              <input
                className="h-7 w-full rounded-md border border-[#e0e0e0] bg-white py-3 pl-2 text-base outline-none focus:border-[#6A64F1] focus:shadow-xl"
                id="description"
                {...register(`extraFields.${index}.description`)}
              />
              {errors?.extraFields?.[index]?.description && (
                <DateErrorMessage
                  message={errors?.extraFields?.[index]?.description?.message}
                />
              )}
            </div>
            <h2 className="my-1 block text-base font-medium text-[#07074D] dark:text-slate-200">
              Service Dates
            </h2>
            <DatePicker
              multiple
              onChange={(dates) => {
                if (dates) {
                  setValue(
                    `extraFields.${index}.dates`,
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
              style={datePickerStyles}
            ></DatePicker>
            {errors?.extraFields?.[index]?.dates && (
              <DateErrorMessage
                message={errors?.extraFields?.[index]?.dates?.message}
              />
            )}
            <div className="w-full">
              <label
                className="mb-1 block text-base font-medium text-[#07074D] dark:text-slate-200"
                htmlFor="rate"
              >
                Service Rate
              </label>
              <input
                className="mb-1 h-7 w-full rounded-md border border-[#e0e0e0] bg-white py-3 pl-2 text-base outline-none focus:border-[#6A64F1] focus:shadow-xl"
                id="rate"
                type="number"
                {...register(`extraFields.${index}.rate`)}
              />
              {errors?.extraFields?.[index]?.rate && (
                <DateErrorMessage
                  message={errors?.extraFields?.[index]?.rate?.message}
                />
              )}
            </div>
            <button
              className="mb-2 flex align-middle text-xs text-[#07074D] hover:font-semibold dark:text-slate-200"
              onClick={() => {
                remove(index);
              }}
            >
              remove service
              <Up />
            </button>
          </div>
        );
      })}
      {/* button to add extra service */}
      <button
        className="mb-2 flex align-middle text-xs text-[#07074D] hover:font-semibold dark:text-slate-200"
        onClick={() => {
          append({ description: "", dates: [], rate: 0 });
        }}
      >
        add a service
        <Down />
      </button>
      <button
        type="submit"
        className="inline-block rounded bg-blue-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        Validate
      </button>
      {isValid && (
        <PDFDownloadLink
          document={<Invoice data={getValues()} />}
          fileName={getValues().title + ".pdf"}
        >
          <button
            type="button"
            className="ml-3 inline-block rounded bg-blue-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Download
          </button>
        </PDFDownloadLink>
      )}
    </form>
  );
}
