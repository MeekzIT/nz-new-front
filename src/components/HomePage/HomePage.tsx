import React from "react";
import styles from "./HomePage.module.css";
import AvailableApartaments from "./AvailableApartaments/AvailableApartaments";
import ContactUsHome from "./ContactUs/ContactUs";
import GoogleMap from "./Map/Map";
import AboutUs from "./AboutUs/AboutUs";
import AboutUsTitle from "./AboutUs/AboutTitle";
import HomeSliderComponent from "./SliderComponent/SliderComponent";
import HomeFirstSLider from "./HomeFirstSLider/HomeFirstSLider";

const HomePage = () => {
  return (
    <div className={styles.root}>
      <HomeFirstSLider />
      <div className={styles.AboutUsTitle}>
        <AboutUsTitle />
      </div>
      <AboutUs />
      <AvailableApartaments />
      <HomeSliderComponent />
      <GoogleMap />
      <ContactUsHome />
    </div>
  );
};

export default HomePage;
