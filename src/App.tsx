import { useState } from "react";
import "./app.css";
import Form from "./components/form/Form";
import DarkModeButton from "./components/dark-mode-button";

export default function App() {
  const [prefersDarkMode, setPrefersDarkMode] = useState<boolean>(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  return (
    <div className={prefersDarkMode ? "dark" : undefined}>
      <div className="min-h-screen bg-gradient-to-b from-blue-300 via-green-200 to-yellow-300 dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-900 dark:to-black">
        <DarkModeButton
          prefersDarkMode={prefersDarkMode}
          setPrefersDarkMode={setPrefersDarkMode}
        ></DarkModeButton>
        <h1 className="py-10 text-center text-5xl font-bold dark:text-slate-200">
          Invoice Maker
        </h1>
        <Form />
      </div>
    </div>
  );
}
