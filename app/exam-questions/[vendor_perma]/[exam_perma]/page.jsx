import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import ArticleCard from "@/app/components/Cards/ArticleCard";
import CommentCard from "@/app/components/Cards/CommentCard";
import ExamAddToCart from "@/app/components/Cards/ExamAddToCart";
import ExamDetailCard from "@/app/components/Cards/ExamDetailCard";
import ExamFaqCard from "@/app/components/Cards/ExamFaqCard";
import HotExams from "@/app/components/IndexPages/HotExams";
import LogoBanner from "@/app/components/IndexPages/LogoBanner";
import Link from "next/link";

const page = async ({ params, searchParams }) => {
  const referral = searchParams?.ref || "";

  const releatedExams = await fetch(
    `${Base_URL}/v1/related_exams/${params?.vendor_perma}`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );
  const releatedData = await releatedExams.json();

  const examResponce = await fetch(
    `${Base_URL}/v1/exam/${params.exam_perma}?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );
  const examData = await examResponce.json();

  const response = await fetch(`${Base_URL}/v1/hot_exams`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });
  const data = await response.json();

  const bannerResponec = await fetch(`${Base_URL}/v1/banner`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });
  const imageUrl = await bannerResponec.json();

  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;

  return (
    <>
      <section className="pt-6 pb-6 px-6 bg-white">
        <Link href={imageUrl?.banner_link} className="flex justify-center mb-4">
          <img src={imageUrl?.banner_src} alt={imageUrl?.banner_website} />
        </Link>
      </section>
      <div className="md:block hidden">
        <ExamDetailCard />
      </div>
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
  const examResponce = await fetch(
    `${Base_URL}/v1/exam/${params.exam_perma}?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );
  const examData = await examResponce.json();

  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;

  // FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: examData?.exam_faqs?.map((faq) => ({
      "@type": "Question",
      name: faq.faq_q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.faq_a,
      },
    })),
  };

  // Product structured data
  const productStructuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: examData?.exam_title,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of ${examData?.exam_title} IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 4,
        bestRating: 5,
      },
      author: {
        "@type": "Person",
        name: "Fred Benson",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.4,
      reviewCount: randomReviewCount,
    },
  };

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
    other: {
      scripts: [
        {
          type: "application/ld+json",
          json: faqStructuredData,
        },
        {
          type: "application/ld+json",
          json: productStructuredData,
        },
      ],
    },
  };
}
