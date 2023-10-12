import { View } from "@react-pdf/renderer";
import TableBody from "./TableBody";
import { FormData } from "../form/formSchema";

type DetailsTableProps = Pick<
  FormData,
  "performanceDates" | "rehearsalDates" | "extraFields"
>;

export default function DetailsTable({
  performanceDates,
  rehearsalDates,
  extraFields,
}: DetailsTableProps) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <TableBody dates={rehearsalDates} header="Rehearsals" />
      <TableBody dates={performanceDates} header="Performances" />
      {extraFields &&
        extraFields.map((field) => {
          return (
            <TableBody
              dates={field.dates}
              header={field.description}
            ></TableBody>
          );
        })}
    </View>
  );
}
