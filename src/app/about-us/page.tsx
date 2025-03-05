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
        <h1>About Us</h1>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
