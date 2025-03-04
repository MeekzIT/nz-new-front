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

interface ApiResponse {
  floor: number;
  count: number;
}

export const HomeAvailableSchemas = {
  schemaAvailableHome: async (): Promise<ApiResponse[]> => {
    try {
      const response = await axiosInstance.get<ApiResponse[]>(
        "/schema/available"
      );
      return response.data || [];
    } catch (error) {
      console.error("Ошибка при загрузке схемы:", error);
      return [];
    }
  },
};
