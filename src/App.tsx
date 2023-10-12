import "./app.css";
import Form from "./components/form/Form";

export default function App() {
  return (
    <body className="min-h-screen bg-gradient-to-b from-blue-300 via-green-200 to-yellow-300 dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-900 dark:to-black ">
      <h1 className="py-10 text-center text-5xl font-bold dark:text-slate-200">
        Invoice Maker
      </h1>
      <Form />
    </body>
  );
}
