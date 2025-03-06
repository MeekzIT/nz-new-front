import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import ProjectDetailsPags from "@/components/ProjectsPage/ProjectDetails/ProjectDetails";

export default async function ProjectsDetails({ params }: any) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  return (
    <div
    >
      <Header />
      <ProjectDetailsPags id={id} />
      <Footer />
    </div>
  );
}
