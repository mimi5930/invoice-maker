import { View, Text } from "@react-pdf/renderer";

export default function TableHeader() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        border: "1px solid black",
      }}
    >
      <Text
        style={{
          width: "15%",
          textAlign: "center",
          borderRight: "1px solid black",
          padding: "2px",
        }}
      >
        QTY
      </Text>
      <Text
        style={{
          width: "35%",
          textAlign: "center",
          borderRight: "1px solid black",
          padding: "2px",
        }}
      >
        Description
      </Text>
      <Text
        style={{
          width: "25%",
          textAlign: "center",
          borderRight: "1px solid black",
          padding: "2px",
        }}
      >
        Unit Price
      </Text>
      <Text style={{ width: "25%", textAlign: "center", padding: "2px" }}>
        Amount
      </Text>
    </View>
  );
}
