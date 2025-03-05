import React from "react";
import styles from "./AboutUs.module.scss";
import { AboutUsShort } from "@/shared/about-us-short";
import AboutUsTitle from "./AboutTitle";

const AboutUs = async () => {
  const data = await AboutUsShort.getData();

  return (
    <div className={styles.root}>
      <div className={styles.aboutUsFirst}>
        <div className={styles.titleWrapper}>
          <div className={styles.description}>{data[0].textAm}</div>
        </div>
        <div className={styles.images}>
          <img
            src={data[0].image_1}
            alt="Main Image"
            className={styles.mainImage}
          />
          <div className={styles.smallImages}>
            <img src={data[0].image_2} alt="Image 12" />
            <img src={data[0].image_3} alt="Image 13" />
            <img src={data[0].image_4} alt="Image 14" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
