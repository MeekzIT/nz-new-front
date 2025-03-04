import axiosInstance from "./axios";

export const HomeSchemas = {
  homeSchemas: async (id: string) => {
    try {
      const response = await axiosInstance.get(`/schema`, {
        params: { id },
      });
      return response.data ?? [];
    } catch (error) {
      console.error("Ошибка при загрузке схемы:", error);
      return [];
    }
  },
};
