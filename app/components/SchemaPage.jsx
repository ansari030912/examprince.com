import React, { useEffect } from 'react';

const SchemaPage = ({ examData }) => {
  useEffect(() => {
    // Dynamically inject the FAQ schema into the document head
    if (examData?.exam_faqs?.length > 0) {
      const faqSchema = {
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

      const scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.text = JSON.stringify(faqSchema);
      document.head.appendChild(scriptTag);

      // Cleanup: Remove the script when the component unmounts or data changes
      return () => {
        document.head.removeChild(scriptTag);
      };
    }
  }, [examData?.exam_faqs]);

  useEffect(() => {
    // Dynamically inject the Product schema into the document head
    if (examData?.exam_title) {
      const productSchema = {
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
          reviewCount: Math.floor(Math.random() * (999 - 700 + 1)) + 700,
        },
      };

      const scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.text = JSON.stringify(productSchema);
      document.head.appendChild(scriptTag);

      // Cleanup: Remove the script when the component unmounts or data changes
      return () => {
        document.head.removeChild(scriptTag);
      };
    }
  }, [examData?.exam_title]);

  return (
    <div>
      {/* Render other UI components here if needed */}
    </div>
  );
};

export default SchemaPage;
