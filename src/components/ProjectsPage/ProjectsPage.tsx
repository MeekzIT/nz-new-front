import React from "react";
import styles from "./ProjectsPage.module.css";

import SliderComponent from "@/components/ui/Slider/Slider";
import AvailableApartaments from "../HomePage/AvailableApartaments/AvailableApartaments";
import { ProjectsService } from "@/shared/projectsService";

const ProjectsPage = async () => {
  const data = await ProjectsService.getAllProjectsData();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoBlock}>
          <div className={styles.horizontalblock} />
          <div className={styles.textBlock}>
            <p className={styles.title}>Մեր նախագծերը</p>
            <p className={styles.description}>
              քսաներկու վերգետնյա և չորս ստորգետնյա <br />
              հարկից բաղկացած համալիր է, որն ունի մի շարք <br />
              հարմարություններ։
            </p>
          </div>
        </div>
        <SliderComponent data={data} />
      </div>
      <AvailableApartaments />
    </>
  );
};

export default ProjectsPage;
