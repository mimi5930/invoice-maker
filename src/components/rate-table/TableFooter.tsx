import { View, Text } from "@react-pdf/renderer";
import { FormData } from "../form/formSchema";

export default function TableFooter({
  rehearsalRate,
  rehearsalDates,
  performanceRate,
  performanceDates,
  extraFields,
}: Pick<
  FormData,
  | "performanceDates"
  | "rehearsalDates"
  | "rehearsalRate"
  | "performanceRate"
  | "extraFields"
>) {
  const sumExtraFields = extraFields?.reduce((acc, obj) => {
    return acc + obj.rate * obj.dates.length;
  }, 0);

  const total = sumExtraFields
    ? rehearsalRate * rehearsalDates.length +
      performanceRate * performanceDates.length +
      sumExtraFields
    : rehearsalRate * rehearsalDates.length +
      performanceRate * performanceDates.length;

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        borderLeft: "1px solid white",
        borderBottom: "1px solid white",
        borderRight: "1px solid black",
        fontFamily: "Times-Bold",
      }}
    >
      <View
        style={{
          width: "50%",
          borderRight: "1px solid black",
          padding: "2px",
        }}
      ></View>
      <Text
        style={{
          width: "25%",
          textAlign: "center",
          borderRight: "1px solid black",
          borderBottom: "1px solid black",
          padding: "2px",
          fontWeight: "bold",
        }}
      >
        TOTAL
      </Text>
      <Text
        style={{
          width: "25%",
          textAlign: "center",
          padding: "2px",
          borderBottom: "1px solid black",
          fontWeight: "bold",
        }}
      >
        {"$" + total.toLocaleString()}
      </Text>
    </View>
  );
}
