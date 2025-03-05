import axios from "axios";

export interface ContactUsRequest {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

export interface BidRequest {
  firstName: string;
  lastName: string;
  phone: string;
}

export const ContactUsService = {
  async aboutUs(data: ContactUsRequest): Promise<any> {
    console.log("Sent Data:", data);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);

      return response.data;
    } catch (error) {
      console.error("Error:", error);

      throw error;
    }
  },

  async Bit(data: BidRequest): Promise<any> {
    console.log("Sent Data:", data);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/bid`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);

      return response.data;
    } catch (error) {
      console.error("Error:", error);

      throw error;
    }
  },
};
