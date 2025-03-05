"use client";

import React from "react";
import { useTranslation } from "next-i18next";

const AboutUsTitle = () => {
  const { t } = useTranslation();

  return <h3>{t("home.about")}</h3>;
};

export default AboutUsTitle;
