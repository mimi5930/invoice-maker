import { View } from "@react-pdf/renderer";
import DateTable from "./DateTable";

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
      <DateTable dates={rehearsalDates} header="Rehearsals" width="45%" />
      <DateTable dates={performanceDates} header="Performances" width="45%" />
    </View>
  );
}
