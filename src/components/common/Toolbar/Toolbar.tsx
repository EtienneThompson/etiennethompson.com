import { useEffect, useState } from "react";
import { Toggle } from "../Toggle";
import "./Toolbar.scss";

export const Toolbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const toggleTheme = () => {
    document.documentElement.className =
      document.documentElement.className === "theme-light"
        ? "theme-dark"
        : "theme-light";
  };

  return (
    <div className="toolbar-container">
      <p className={"" + (windowWidth > 550 ? "name" : "mobile-name") + ""}>
        Etienne Thompson
      </p>
      {/* Theme change toggle */}
      <Toggle action={toggleTheme} />
      {/* Put the label after because both have the float right attribute */}
      <p className="toggle-label">Theme: </p>
    </div>
  );
};
