import axiosInstance from "./axios";

interface IAboutUsShort {
  id: number;
  textAm: string;
  textRu: string;
  textEn: string;
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
  createdAt: string | null;
  updatedAt: string | null;
}

export const AboutUsShort = {
  async getData(): Promise<IAboutUsShort[]> {
    const response = await axiosInstance.get(`/about-short`);

    return (response.data ?? []) as IAboutUsShort[];
  },
};
