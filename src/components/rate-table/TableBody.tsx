import { View, Text } from "@react-pdf/renderer";

type dataProp = {
  quantity: number;
  description: string;
  unitPrice: number;
};

export default function TableBody(data: dataProp) {
  const amount = data.quantity * data.unitPrice;

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        borderLeft: "1px solid black",
        borderBottom: "1px solid black",
        borderRight: "1px solid black",
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
        {data.quantity}
      </Text>
      <Text
        style={{
          width: "35%",
          borderRight: "1px solid black",
          padding: "2px",
        }}
      >
        {data.description}
      </Text>
      <Text
        style={{
          width: "25%",
          textAlign: "center",
          borderRight: "1px solid black",
          padding: "2px",
        }}
      >
        {data.unitPrice}
      </Text>
      <Text
        style={{
          width: "25%",
          textAlign: "center",
          padding: "2px",
        }}
      >
        {amount}
      </Text>
    </View>
  );
}
