import { Document, Page, View, Text } from "@react-pdf/renderer";
import RateTable from "../rate-table/RateTable";
import DetailsTable from "../details-table/DetailsTable";
import { formatDate } from "../../utils/formatDate";

type Data = {
  name: string;
  date: Date;
  address: string;
  city: string;
  phone: string;
  rehearsalRate: number;
  performanceRate: number;
  rehearsalDates: Date[];
  performanceDates: Date[];
};

type InvoiceProps = {
  data: Data;
};

export default function Invoice({ data }: InvoiceProps) {
  const {
    name,
    date,
    address,
    city,
    phone,
    rehearsalRate,
    performanceRate,
    rehearsalDates,
    performanceDates,
  } = data;
  return (
    <Document>
      <Page style={{ fontFamily: "Times-Roman", fontSize: "12px" }}>
        <View style={{ margin: "96px", gap: "24px" }}>
          <View id="title">
            <Text style={{ fontSize: "48px" }}>INVOICE</Text>
          </View>
          {/* Name and Date */}
          <View>
            <Text>{name}</Text>
            <Text>{formatDate(date)}</Text>
          </View>
          {/* Contact info */}
          <View id="contact-info">
            <Text>{address}</Text>
            <Text>{city}</Text>
            <Text>{phone}</Text>
          </View>
          <RateTable
            rehearsalRate={rehearsalRate}
            rehearsalDates={rehearsalDates}
            performanceDates={performanceDates}
            performanceRate={performanceRate}
          />
          <View>
            <Text style={{ fontFamily: "Times-Bold" }}>Details:</Text>
          </View>

          <DetailsTable
            rehearsalDates={rehearsalDates}
            performanceDates={performanceDates}
          ></DetailsTable>
        </View>
      </Page>
    </Document>
  );
}
