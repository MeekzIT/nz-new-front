import Image from "next/image";
import styles from "./AboutUs.module.css";
import DetailsBlock from "../ProjectsPage/ProjectDetails/components/DetailsBlock/DetailsBlock";
import { AboutUsApi } from "@/shared/api/aboutUs.api";

const AboutUs = async () => {
  const data = await AboutUsApi.getAboutData();

  return (
    <div className={styles.container}>
      <DetailsBlock data={data[0]} />
    </div>
  );
};

export default AboutUs;
