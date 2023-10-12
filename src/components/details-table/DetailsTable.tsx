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
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginBottom: "12px",
        }}
      >
        <TableBody dates={rehearsalDates} header="Rehearsals" />
        <TableBody dates={performanceDates} header="Performances" />
      </View>
      {extraFields &&
        extraFields.map((field, index) => {
          return (
            <View style={{ marginBottom: "12px", width: "50%" }} key={index}>
              <TableBody
                dates={field.dates}
                header={field.description}
              ></TableBody>
            </View>
          );
        })}
    </>
  );
}
