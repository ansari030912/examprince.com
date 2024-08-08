/* eslint-disable @next/next/no-img-element */
import AllVendorsCard from "../components/Cards/AllVendorsCard";

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
          url: `https://examprince.com/exam-providers`,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Exam Providers",
            description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
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
          }),
        }}
      />
      <section class="pt-6 pb-6 px-6 bg-white">
        <div className="flex justify-center mb-4">
          <img src="/MEGASALE DA-min.png" alt="" />
        </div>
      </section>
      <div className="m-auto container">
        <AllVendorsCard />
      </div>
    </>
  );
};

export default page;
