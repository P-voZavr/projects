import { useState, useEffect } from "react";
import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";
import "./style.css";

function BtnDarkMode() {
  const [DarkMode, SetDarkMode] = useState("dark");
  function ToggleDarkMode() {
    if (DarkMode === "light") {
      SetDarkMode("dark");
    } else {
      SetDarkMode("light");
    }
  }
  useEffect(() => {
    if (DarkMode === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("trans");
      document
        .querySelector(".dark-mode-btn")
        .classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("trans");
      document
        .querySelector(".dark-mode-btn")
        .classList.remove("dark-mode-btn--active");
    }
  }, [DarkMode]);
  return (
    <button className="dark-mode-btn" onClick={ToggleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}
export default BtnDarkMode;
