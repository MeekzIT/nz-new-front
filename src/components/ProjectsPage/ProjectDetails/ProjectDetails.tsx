import Image from "next/image";
import styles from "./ProjectDetails.module.css";
import { ProjectsService } from "@/shared/projectsService";
import DetailsBlock from "./components/DetailsBlock/DetailsBlock";

const ProjectDetailsPage = async ({ id }: { id: string }) => {
  const data = await ProjectsService.getProjectData(Number(id));
  console.log(data, "data");

  return (
    <div className={styles.container}>
      <DetailsBlock data={data} />
    </div>
  );
};

export default ProjectDetailsPage;
