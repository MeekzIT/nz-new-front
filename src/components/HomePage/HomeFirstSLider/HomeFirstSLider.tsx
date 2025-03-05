
import styles from "./HomeFirstSLider.module.css";
import { HomeFirstSlider } from "@/shared/api/schemas.api";
import FirstSLider from "./components/FirstSlider/FirstSlider";

const HomeFirstSLider = async () => {
  const data = await HomeFirstSlider.homeFirstSlider()

  return (
    <FirstSLider sliderData={data}/>
  );
};

export default HomeFirstSLider;

