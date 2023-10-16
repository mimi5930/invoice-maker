import { Moon, Sun } from "../svg";

type DarkModeButtonProps = {
  prefersDarkMode: boolean;
  setPrefersDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DarkModeButton({
  prefersDarkMode,
  setPrefersDarkMode,
}: DarkModeButtonProps) {
  return (
    <button
      className="absolute right-0 m-5"
      onClick={() => {
        setPrefersDarkMode(!prefersDarkMode);
      }}
    >
      {prefersDarkMode ? <Moon /> : <Sun />}
    </button>
  );
}
