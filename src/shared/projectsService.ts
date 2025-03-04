import axiosInstance from "./axios";

interface ProjectData {
  id: number;
  name: string;
  description: string;
  titleAm: string;
  textAm_1: string;
  image_11: string;
  image_12: string;
  image_13: string;
  image_14: string;
  textAm_2: string;
  image_21: string;
  image_22: string;
  image_23: string;
  image_24: string;
}

export const ProjectsService = {
  async getAllProjectsData(): Promise<ProjectData[]> {
    try {
      const response = await axiosInstance.get("/projects");
      return response.data ?? [];
    } catch (error) {
      console.error("Ошибка при загрузке проектов:", error);
      return [];
    }
  },

  async getProjectData(id: number): Promise<ProjectData> {
    try {
      const response = await axiosInstance.get(`/projects/${id}`);
      return response.data ?? {};
    } catch (error) {
      console.error(`Ошибка при загрузке проекта с id ${id}:`, error);
      return null;
    }
  },
};
