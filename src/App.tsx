import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const toggleLocales = useCallback(
    (locale: string) => {
      i18n.changeLanguage(locale);
    },
    [i18n]
  );

  return (
    <div className="App">
      <button onClick={() => toggleLocales("en-US")} title="영어로 바꾸기">
        en
      </button>
      <button onClick={() => toggleLocales("ko-KR")} title="한글로 바꾸기">
        ko
      </button>
      {t("test")}
    </div>
  );
}

export default App;
