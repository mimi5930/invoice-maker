import { Document, Page, View, Text } from "@react-pdf/renderer";
import RateTable from "../rate-table/RateTable";
import DetailsTable from "../details-table/DetailsTable";
import { formatDate } from "../../utils/formatDate";
import { formatPhoneNumber } from "../../utils/formatPhone";
import type { FormData } from "../form/formSchema";

type InvoiceProps = {
  data: FormData;
};

export default function Invoice({ data }: InvoiceProps) {
  const {
    name,
    date,
    address,
    city,
    state,
    zip,
    phone,
    rehearsalRate,
    performanceRate,
    rehearsalDates,
    performanceDates,
    extraFields,
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
            <Text>{`${city}, ${state}, ${zip}`}</Text>
            <Text>{formatPhoneNumber(phone)}</Text>
          </View>
          <RateTable
            rehearsalRate={rehearsalRate}
            rehearsalDates={rehearsalDates}
            performanceDates={performanceDates}
            performanceRate={performanceRate}
            extraFields={extraFields}
          />
          <View>
            <Text style={{ fontFamily: "Times-Bold" }}>Details:</Text>
          </View>
          <DetailsTable
            rehearsalDates={rehearsalDates}
            performanceDates={performanceDates}
            extraFields={extraFields}
          ></DetailsTable>
        </View>
      </Page>
    </Document>
  );
}
