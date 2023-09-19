import { View, Text } from "@react-pdf/renderer";

export default function DetailsBody() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Text
        style={{
          width: "45%",
          textAlign: "center",
          borderRight: "1px solid black",
          borderBottom: "1px solid black",
          borderLeft: "1px solid black",
          padding: "2px",
        }}
      >
        Date
      </Text>
      <View style={{ width: "10%" }}></View>
      <Text
        style={{
          width: "45%",
          textAlign: "center",
          borderRight: "1px solid black",
          borderBottom: "1px solid black",
          borderLeft: "1px solid black",
          padding: "2px",
        }}
      >
        Date
      </Text>
    </View>
  );
}
