import { View } from "@react-pdf/renderer";
import TableBody from "./TableBody";

type DetailsTableProps = {
  performanceDates: Date[];
  rehearsalDates: Date[];
};

export default function DetailsTable({
  performanceDates,
  rehearsalDates,
}: DetailsTableProps) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <TableBody dates={rehearsalDates} header="Rehearsals" width="45%" />
      <TableBody dates={performanceDates} header="Performances" width="45%" />
    </View>
  );
}
