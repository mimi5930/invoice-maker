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

export default function RateTable({
  rehearsalDates,
  rehearsalRate,
  performanceDates,
  performanceRate,
}: DataProps) {
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
      <TableFooter
        rehearsalDates={rehearsalDates}
        rehearsalRate={rehearsalRate}
        performanceDates={performanceDates}
        performanceRate={performanceRate}
      />
    </View>
  );
}
