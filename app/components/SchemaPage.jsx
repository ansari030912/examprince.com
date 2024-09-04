'use client'
import React from "react";

const SchemaPage = ({ examData }) => {
  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;
  return (
    <>
      {examData?.exam_faqs?.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
      )}

      {/* JSON-LD for Product */}
      {examData?.exam_title && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
      )}
    </>
  );
};

export default SchemaPage;
