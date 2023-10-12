import { View, Text } from "@react-pdf/renderer";

type TableBodyProps = {
  dates: Date[];
  header: string;
};

export default function TableBody({ dates, header }: TableBodyProps) {
  // sort dates
  const sortedDates = dates.sort((a, b) => a.getTime() - b.getTime());

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        width: "45%",
        marginBottom: "24px",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          border: "1px solid black",
          padding: "2px",
        }}
      >
        {header}
      </Text>
      {sortedDates.map((date, index) => {
        return (
          <Text
            key={index}
            style={{
              borderRight: "1px solid black",
              borderBottom: "1px solid black",
              borderLeft: "1px solid black",
              padding: "2px",
            }}
          >
            {date.toLocaleDateString()}
          </Text>
        );
      })}
    </View>
  );
}
