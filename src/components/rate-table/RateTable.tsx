import { View } from "@react-pdf/renderer";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

type DataProps = {
  rehearsalRate: number;
  performanceRate: number;
  rehearsalDates: Date[];
  performanceDates: Date[];
};

export default function RateTable(data: DataProps) {
  return (
    <View>
      <TableHeader />
      <TableBody
        quantity={data.rehearsalDates.length}
        description="Rehearsals"
        unitPrice={data.rehearsalRate}
      />
      <TableBody
        quantity={data.performanceDates.length}
        description="Performances"
        unitPrice={data.performanceRate}
      />
      <TableFooter
        rehearsalDates={data.rehearsalDates}
        rehearsalRate={data.rehearsalRate}
        performanceDates={data.performanceDates}
        performanceRate={data.performanceRate}
      />
    </View>
  );
}
