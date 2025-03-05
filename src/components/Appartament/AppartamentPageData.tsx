"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AppartamentModal from "./AppartmentModal";
import CustomModal from "@/components/ui/Modal/Modal";
import { BidRequest, ContactUsService } from "@/shared/contact-us";
import styles from "./Modal.module.scss";

interface AppartementDatum {
  id: number;
  name: string;
  value: string;
  appartementId: number;
  createdAt: string | null;
  updatedAt: string | null;
}

export const AppartamentPageData = ({
  data,
  floorId,
  square_meter,
}: {
  data: AppartementDatum[];
  floorId: number;
  square_meter: string;
}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [openRet, setOpenRet] = useState(false);
  const [status, setStatus] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  console.log(data, "asdasd");

  const handleSubmitForm = (data: BidRequest) => {
    ContactUsService.Bit(data)
      .then((res) => {
        setOpen(false);
        setStatus(true);
        setOpenRet(true);
        console.log(t("form.success"), res);
      })
      .catch((err) => {
        setOpen(false);
        setStatus(false);
        setOpenRet(true);
        console.error(t("form.failed"), err);
      });
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        gap: "15px",
        padding: "50px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3>{t("appartament.floorId")}</h3>
        <h3>{floorId}</h3>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3>{t("appartament.square_meter")}</h3>
        <h3>{t("appartament.value", { value: square_meter })}</h3>
      </div>
      {data.map((i) => {
        return (
          <div
            key={i.id}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h2>{t(`appartament.${i.name}`)}</h2>
            <h3>{t("appartament.value", { value: i.value })}</h3>
          </div>
        );
      })}
      <button onClick={handleOpen} className={styles.button}>
        {t("appartament.order")}
      </button>
      <CustomModal
        open={openRet}
        setOpen={setOpenRet}
        title={t("modal.title")}
        description={t("modal.description")}
        status={status}
      />
      <AppartamentModal
        open={open}
        setOpen={setOpen}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
};
