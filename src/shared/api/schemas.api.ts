import axiosInstance from "../utils/axios";

import { IAvailable, IFloor } from "./types/schemas";

export const HomeSchemas = {
  homeSchemas: async (id: string) => {
    try {
      const response = await axiosInstance.get<IFloor[]>(`/schema`, {
        params: { id },
      });
      return response.data ?? [];
    } catch (error) {
      console.error("Ошибка при загрузке схемы:", error);
      return [];
    }
  },
};

export const HomeAvailableSchemas = {
  schemaAvailableHome: async (): Promise<IAvailable[]> => {
    try {
      const response = await axiosInstance.get<IAvailable[]>(
        "/schema/available"
      );
      return response.data || [];
    } catch (error) {
      console.error("Ошибка при загрузке схемы:", error);
      return [];
    }
  },
};
