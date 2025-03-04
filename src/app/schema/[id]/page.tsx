import { Footer } from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import SchemaPage from "@/components/Schema/Schema";

// Убедитесь, что этот компонент корректно работает с асинхронными данными
export default async function ProjectsDetails({ params }: { params: any }) {
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
      <main style={{ flex: "1", textAlign: "center" }}>
        <SchemaPage id={id} />
      </main>
      <Footer />
    </div>
  );
}
