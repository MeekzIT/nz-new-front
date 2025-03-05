import axiosInstance from "./axios";

interface ApiResponse {
  data?: Appartement;
}

export interface AppartementDatum {
  id: number;
  name: string;
  value: string;
  appartementId: number;
  createdAt: string | null;
  updatedAt: string | null;
}

interface Appartement {
  id: number;
  in_stock: boolean;
  price: string;
  floorId: number;
  room_count: string;
  square_meter: string;
  image_black_white: string;
  image_design: string;
  coordinates: string;
  createdAt: string | null;
  updatedAt: string | null;
  AppartementData: AppartementDatum[];
}

export const SingleAppartament = {
  async getSingle(id: string): Promise<Appartement> {
    const response = await axiosInstance.get(`/schema/single/${id}`);

    return (response.data ?? []) as Appartement;
  },
};
