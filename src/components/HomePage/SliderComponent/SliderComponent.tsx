import React from "react";
import { Offers } from "@/shared/offers";
import SliderComponent from "@/components/ui/Slider/Slider";
import styles from "./SliderComponent.module.scss";

const HomeSliderComponent = async () => {
  const data = await Offers.getData();
  console.log(data, "22222");

  return (
    <div className={styles.container}>
      <div className={styles.infoBlock}>
        <div className={styles.horizontalblock} />
        <div className={styles.textBlock}>
          <p className={styles.title}>Մենք առաջարկում ենք</p>
          <p className={styles.description}>
            քսաներկու վերգետնյա և չորս ստորգետնյա
            <br />
            հարկից բաղկացած համալիր է, որն ունի մի
            <br /> շարք հարմարություններ։ 
          </p>
        </div>
      </div>
      <SliderComponent data={data} />
    </div>
  );
};

export default HomeSliderComponent;
