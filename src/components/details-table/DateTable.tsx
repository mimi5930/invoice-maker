import { View, Text } from "@react-pdf/renderer";
import { formatShortDate } from "../../utils/formatDate";

type DateTableProps = {
  dates: Date[];
  header: string;
  width: string;
};

export default function DateTable({ dates, header, width }: DateTableProps) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Text
        style={{
          width: width,
          textAlign: "center",
          border: "1px solid black",
          padding: "2px",
        }}
      >
        {header}
      </Text>
      {dates.map((date) => {
        return (
          <Text
            style={{
              width: width,
              borderRight: "1px solid black",
              borderBottom: "1px solid black",
              borderLeft: "1px solid black",
              padding: "2px",
            }}
          >
            {formatShortDate(date)}
          </Text>
        );
      })}
    </View>
  );
}
