"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { HomeFirstSliderTypes } from "@/shared/api/homeFirstSliderTypes";
import Image from "next/image";
import styles from "./FirstSlider.module.css";
import clsx from "clsx";

const FirstSlider = ({ sliderData }: { sliderData: HomeFirstSliderTypes[] }) => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop
        direction="vertical"
        className={clsx(styles.swiper, styles.verticalSlider) }
        style={{
          gap:"0 !important"
        }}
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide} style={{
            height:"528px !important"
          }}>
            <img
              src={slide.image}
              alt={slide.titleEn}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <h2 className={styles.title}>{slide.titleAm}</h2>
              <p className={styles.subtitle}>{slide.subTitleAm}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className={styles.ctaContainer}>
        <Image
          src="/assets/images/CTAButton.png"
          alt="CTA Button"
          width={100}
          height={100}
          className={styles.ctaButton}
        />
      </div>
    </div>
  );
};

export default FirstSlider;