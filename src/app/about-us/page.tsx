import AboutUs from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";

const AboutUsPage = ({ data }: { data: { message: string } }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main style={{ flex: "1", textAlign: "center" }}>
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
