import AllTeExams from "../components/Cards/AllTeExams";

const page = () => {
  return <AllTeExams />;
};

export default page;
export async function generateMetadata() {
  return {
    title: `ExamPrince A Test Engine Exams`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    alternates: {
      canonical: "https://examprince.com/all-te-exams-list",
    },
  };
}
