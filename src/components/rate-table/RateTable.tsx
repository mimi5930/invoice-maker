import { View } from "@react-pdf/renderer";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import type { FormData } from "../form/formSchema";

type RateTableProps = Pick<
  FormData,
  | "rehearsalRate"
  | "performanceRate"
  | "rehearsalDates"
  | "performanceDates"
  | "extraFields"
>;

export default function RateTable({
  rehearsalDates,
  rehearsalRate,
  performanceDates,
  performanceRate,
  extraFields,
}: RateTableProps) {
  return (
    <View>
      <TableHeader />
      <TableBody
        quantity={rehearsalDates.length}
        description="Rehearsals"
        unitPrice={rehearsalRate}
      />
      <TableBody
        quantity={performanceDates.length}
        description="Performances"
        unitPrice={performanceRate}
      />
      {extraFields &&
        extraFields.map((field, index) => {
          return (
            <TableBody
              key={index}
              quantity={field.dates.length}
              description={field.description}
              unitPrice={field.rate}
            ></TableBody>
          );
        })}
      <TableFooter
        rehearsalDates={rehearsalDates}
        rehearsalRate={rehearsalRate}
        performanceDates={performanceDates}
        performanceRate={performanceRate}
        extraFields={extraFields}
      />
    </View>
  );
}
