import React from "react";
import { useTranslation } from "react-i18next";

export default function Test() {
  const { t } = useTranslation("translation", {
    keyPrefix: "pages.Test",
  });

  return <div>{t("hello_reactJS")}</div>;
}
