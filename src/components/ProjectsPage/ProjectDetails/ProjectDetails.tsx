import Image from "next/image";
import styles from "./ProjectDetails.module.css";
import { ProjectsService } from "@/shared/projectsService";

const ProjectDetailsPage = async ({ id }: { id: string }) => {
  const data = await ProjectsService.getProjectData(Number(id));
  console.log(data, "data");

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.titleWrapper}>
          <p className={styles.title}>{data?.titleAm}</p>
          <div className={styles.description}>{data.textAm_1}</div>
        </div>

        <div className={styles.images}>
          <img
            src={data.image_11}
            alt="Main Image"
            className={styles.mainImage}
          />
          <img src={data.image_12} alt="Image 12" />
          <img src={data.image_13} alt="Image 13" />
          <img src={data.image_14} alt="Image 14" />
        </div>
      </div>

      <div className={styles.block}>
        <div className={styles.images}>
          <img
            src={data.image_21}
            alt="Main Image"
            className={styles.mainImage}
          />
          <img src={data.image_22} alt="Image 12" />
          <img src={data.image_23} alt="Image 13" />
          <img src={data.image_24} alt="Image 14" />
        </div>

        <div className={styles.titleWrapper}>
          <div className={styles.description}>{data.textAm_2}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
