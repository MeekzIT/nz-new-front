import { Footer } from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";

export default function Projects() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main style={{ flex: "1", textAlign: "center" }}>ProjectsPage</main>
      <Footer />
    </div>
  );
}
