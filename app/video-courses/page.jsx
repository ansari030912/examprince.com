import AllVideoCourses from "../components/Cards/AllVideoCourses";
import HotExams from "../components/IndexPages/HotExams";

export async function generateMetadata() {
  return {
    title: `Updated Certificates Exam Question and Answers by Tech Professionals`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://examprince.com/video-courses`,
        },
      ],
    },
  };
}

const page = ({ searchParams }) => {
  const referral = searchParams?.ref || "";
  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;
  return (
    <>
      <AllVideoCourses referral={referral} />
      <HotExams />
    </>
  );
};

export default page;
