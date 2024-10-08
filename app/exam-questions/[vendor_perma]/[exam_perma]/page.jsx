/* eslint-disable @next/next/no-img-element */
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import ArticleCard from "@/app/components/Cards/ArticleCard";
import CommentCard from "@/app/components/Cards/CommentCard";
import ExamAddToCart from "@/app/components/Cards/ExamAddToCart";
import ExamDetailCard from "@/app/components/Cards/ExamDetailCard";
import ExamFaqCard from "@/app/components/Cards/ExamFaqCard";
import HotExams from "@/app/components/IndexPages/HotExams";
import LogoBanner from "@/app/components/IndexPages/LogoBanner";
import SchemaPage from "@/app/components/SchemaPage";
import Link from "next/link";

const page = async ({ params, searchParams }) => {
  const referral = searchParams?.ref || "";

  const [relatedExamsRes, examResponse, hotExamsRes, bannerResponse] =
    await Promise.all([
      fetch(`${Base_URL}/v1/related_exams/${params?.vendor_perma}`, {
        headers: { "x-api-key": X_API_Key },
      }),
      fetch(`${Base_URL}/v1/exam/${params.exam_perma}?coupon=MEGASALE-30`, {
        headers: { "x-api-key": X_API_Key },
      }),
      fetch(`${Base_URL}/v1/hot_exams`, {
        headers: { "x-api-key": X_API_Key },
      }),
      fetch(`${Base_URL}/v1/banner`, {
        headers: { "x-api-key": X_API_Key },
      }),
    ]);

  if (
    !relatedExamsRes.ok ||
    !examResponse.ok ||
    !hotExamsRes.ok ||
    !bannerResponse.ok
  ) {
    console.error("Error fetching data");
    return <div>Error loading the page. Please try again later.</div>;
  }

  const relatedExams = await relatedExamsRes.json();
  const examData = await examResponse.json();
  const hotExamsData = await hotExamsRes.json();
  const bannerData = await bannerResponse.json();

  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;

  return (
    <>
      {/* Only one instance of JSON-LD schema for FAQ */}

      <section className="pt-6 pb-6 px-6 bg-white">
        <Link
          href={bannerData?.banner_link}
          className="flex justify-center mb-4"
        >
          <img src={bannerData?.banner_src} alt={bannerData?.banner_website} />
        </Link>
      </section>

      <div className="md:block hidden">
        <ExamDetailCard />
      </div>
      <SchemaPage examData={examData} />
      <ExamAddToCart examData={examData} />
      <HotExams />
      <LogoBanner />
      <ArticleCard examData={examData} />
      <ExamFaqCard examData={examData} />
      <CommentCard examData={examData} />
    </>
  );
};

export default page;

export async function generateMetadata({ params }) {
  const examResponse = await fetch(
    `${Base_URL}/v1/exam/${params.exam_perma}?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );

  if (!examResponse.ok) {
    console.error("Error fetching metadata");
    return {
      title: "Exam Question and Answers by Tech Professionals",
      description: "Failed to load certification data.",
      robots: {
        index: false,
      },
    };
  }

  const examData = await examResponse.json();

  return {
    title: `Updated ${examData.exam_title} Exam Question and Answers by Tech Professionals`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of ${examData.exam_title} IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024 and become certified professional.`,
    robots: {
      index: examData.index_tag ? examData.index_tag : false,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://examprince.com/exam-questions/${params.vendor_perma}/${params.exam_perma}`,
        },
      ],
    },
  };
}
