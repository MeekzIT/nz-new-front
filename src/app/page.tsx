import HomePage from "@/components/HomePage/HomePage";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";

export default function ServerComponent() {
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
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
