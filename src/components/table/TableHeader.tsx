import { View, Text } from "@react-pdf/renderer";

export default function TableHeader() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        border: "1px solid black",
      }}
    >
      <Text
        style={{
          width: "15%",
          textAlign: "center",
          borderRight: "1px solid black",
        }}
      >
        QTY
      </Text>
      <Text
        style={{
          width: "35%",
          textAlign: "center",
          borderRight: "1px solid black",
        }}
      >
        Description
      </Text>
      <Text
        style={{
          width: "25%",
          textAlign: "center",
          borderRight: "1px solid black",
        }}
      >
        Unit Price
      </Text>
      <Text style={{ width: "25%", textAlign: "center" }}>Amount</Text>
    </View>
  );
}
