import { View, Text } from "@react-pdf/renderer";

export default function DetailsHeader() {
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
          border: "1px solid black",
          padding: "2px",
        }}
      >
        Rehearsals
      </Text>
      <View style={{ width: "10%" }}></View>
      <Text
        style={{
          width: "45%",
          textAlign: "center",
          border: "1px solid black",
          padding: "2px",
        }}
      >
        Performances
      </Text>
    </View>
  );
}
