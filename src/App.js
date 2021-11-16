import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import "./App.css";
// the hoc
function App() {
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <button onClick={() => changeLanguage("en")}>english</button>
      <button onClick={() => changeLanguage("de")}>russian</button>
      <h1>{t("title")}</h1>
      <h3>{t("part1")}</h3>
      <h3>{t("part2")}</h3>
      <a href='https://www.i18next.com/'>https://www.i18next.com/</a>
    </div>
  );
}
export default App;
