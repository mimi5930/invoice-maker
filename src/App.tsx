import { PDFViewer } from "@react-pdf/renderer";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import DetailsHeader from "./components/details-table/DetailsHeader";
import DetailsBody from "./components/details-table/DetailsBody";
import RateTable from "./components/rate-table/RateTable";

type Data = {
  rehearsalRate: number;
  performanceRate: number;
  rehearsalDates: Date[];
  performanceDates: Date[];
};

export default function App() {
  const data: Data = {
    rehearsalRate: 80,
    performanceRate: 125,
    rehearsalDates: [
      new Date(9 / 13 / 2022),
      new Date(3 / 24 / 2023),
      new Date(3 / 31 / 2023),
      new Date(8 / 20 / 2023),
      new Date(9 / 10 / 2023),
    ],
    performanceDates: [new Date(3 / 24 / 2023)],
  };

  return (
    <div className="h-screen bg-red-600">
      <PDFViewer className="h-3/4 w-screen">
        <Document>
          <Page style={{ fontFamily: "Times-Roman", fontSize: "12px" }}>
            <View style={{ margin: "96px", gap: "24px" }}>
              <View id="title">
                <Text style={{ fontSize: "48px" }}>INVOICE</Text>
              </View>
              {/* Name and Date */}
              <View>
                <Text>Name, Last Name</Text>
                <Text>Date</Text>
              </View>
              {/* Contact info */}
              <View id="contact-info">
                <Text>Address</Text>
                <Text>City</Text>
                <Text>Phone</Text>
              </View>
              <RateTable
                rehearsalRate={data.rehearsalRate}
                rehearsalDates={data.rehearsalDates}
                performanceDates={data.performanceDates}
                performanceRate={data.performanceRate}
              />
              <View>
                <Text style={{ fontFamily: "Times-Bold" }}>Details:</Text>
              </View>
              <View>
                <DetailsHeader />
                <DetailsBody />
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}
