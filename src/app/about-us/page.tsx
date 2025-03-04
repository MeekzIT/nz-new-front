import { Footer } from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import React from "react";

const AboutUsPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main style={{ flex: "1", textAlign: "center" }}>about us</main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
