import Image from "next/image";
import styles from "./AboutUs.module.css";
import { ProjectsService } from "@/shared/projectsService";
import DetailsBlock from "../ProjectsPage/ProjectDetails/components/DetailsBlock/DetailsBlock";
import { AboutUsApi } from "@/shared/about-us-short";

const AboutUs = async () => {
  const data = await AboutUsApi.getAboutData();

  console.log(data, "data");

  return (
    <div className={styles.container}>
      <DetailsBlock data={data[0]} />
    </div>
  );
};

export default AboutUs;
