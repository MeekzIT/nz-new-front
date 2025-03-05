import Image from "next/image";
import styles from "./ProjectDetails.module.css";
import DetailsBlock from "./components/DetailsBlock/DetailsBlock";
import { ProjectsService } from "@/shared/api/projectsService.api";

const ProjectDetailsPage = async ({ id }: { id: string }) => {
  const data = await ProjectsService.getProjectData(Number(id));

  return (
    <div className={styles.container}>
      <DetailsBlock data={data} />
    </div>
  );
};

export default ProjectDetailsPage;
