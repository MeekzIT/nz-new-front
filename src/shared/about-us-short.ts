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

interface IAbout {
  id: number;
  name: string;
  description: string;
  titleAm: string;
  titleRu: string;
  titleEn: string;
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

export const AboutUsApi = {
  async getData(): Promise<IAboutUsShort[]> {
    const response = await axiosInstance.get(`/about-short`);

    return (response.data ?? []) as IAboutUsShort[];
  },
  async getAboutData(): Promise<IAbout[]> {
    const response = await axiosInstance.get(`/about-us`);

    return (response.data ?? []) as IAbout[];
  },
};
