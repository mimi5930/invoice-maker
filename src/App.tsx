import { PDFViewer } from "@react-pdf/renderer";
import { Page, Text, View, Document } from "@react-pdf/renderer";

export default function App() {
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
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}
