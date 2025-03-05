import React from "react";
import styles from "./ProjectsPage.module.css";

import SliderComponent from "@/components/ui/Slider/Slider";
import AvailableApartaments from "../HomePage/AvailableApartaments/AvailableApartaments";
import InfoBlock from "./components/InfoBlock/InfoBlock";
import { ProjectsService } from "@/shared/api/projectsService.api";

const ProjectsPage = async () => {
  const data = await ProjectsService.getAllProjectsData();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoBlock}>
          <div className={styles.horizontalblock} />
          <InfoBlock />
        </div>
        <SliderComponent data={data} />
      </div>
      <AvailableApartaments />
    </>
  );
};

export default ProjectsPage;
