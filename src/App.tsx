import { PDFViewer } from "@react-pdf/renderer";
import Invoice from "./components/document/Invoice";

export default function App() {
  const data = {
    name: "Test Name",
    date: new Date(),
    address: "lorem",
    city: "ipsum",
    phone: "000-000-0000",
    rehearsalRate: 80,
    performanceRate: 125,
    rehearsalDates: [
      new Date("9 / 13 / 2022"),
      new Date("3 / 24 / 2023"),
      new Date("3 / 31 / 2023"),
      new Date("8 / 20 / 2023"),
      new Date("9 / 10 / 2023"),
    ],
    performanceDates: [new Date("3 / 24 / 2023"), new Date("2 / 3 / 2023")],
  };

  return (
    <div className="h-screen bg-red-600">
      <PDFViewer className="h-3/4 w-screen">
        <Invoice data={data}></Invoice>
      </PDFViewer>
    </div>
  );
}
