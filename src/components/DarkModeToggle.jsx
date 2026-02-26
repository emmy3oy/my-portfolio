import { useState } from "react";

function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-outline-light ms-3"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}

export default DarkModeToggle;