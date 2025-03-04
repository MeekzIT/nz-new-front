import { Footer } from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";

export default async function ProjectsDetails({ params }: any) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main style={{ flex: "1", textAlign: "center" }}>shechema {id}</main>
      <Footer />
    </div>
  );
}
