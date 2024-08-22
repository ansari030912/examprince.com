/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Base_URL } from "../URL's/Base_URL";
import { X_API_Key } from "../URL's/Api_X_Key";

const RefundPolicy = async () => {
  const bannerResponec = await fetch(`${Base_URL}/v1/banner`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const imageUrl = await bannerResponec.json();

  return (
    <>
      <section class="pt-6 px-6 bg-white">
        <Link href={imageUrl?.banner_link} className="flex justify-center mb-4">
          <img src={imageUrl?.banner_src} alt={imageUrl?.banner_website} />
        </Link>
      </section>
      <section
        className="py-16 md:py-24 bg-white"
        style={{
          backgroundImage: `url('/pattern-white.png')`,
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap lg:items-center mb-12 -mx-4">
            <div className="w-full md:w-5/12 px-4 mb-8 md:mb-0">
              <div className="mx-auto md:ml-0 max-w-max overflow-hidden rounded-lg">
                <img src="/table-work-computer-study-reading.jpg" alt="" />
              </div>
            </div>
            <div className="w-full md:w-7/12 px-4">
              <div className="inline-block py-1 px-3 mb-6 text-xs leading-5 text-green-500 font-medium uppercase bg-green-100 rounded-full shadow-sm">
                ExamPrince.com Refund Policy
              </div>
              <h2 className="mb-4 text-2xl md:text-3xl leading-tight text-gray-800 font-bold tracking-tighter">
                Important Information Regarding ExamPrince.com Refund Policy
              </h2>
              <p className="mb-8 md:mb-8 text-lg md:text-xl font-medium text-gray-500">
                At ExamPrince.com, we are committed to your success in IT
                certification exams by providing top-notch preparation
                materials. Our products are carefully designed and maintained to
                ensure your success.
              </p>
              <p className="mb-8 text-lg md:text-xl font-medium text-gray-500">
                Below are the terms and conditions for our refund policy. Please
                read them carefully.
              </p>

              <div class="flex items-center -mx-2">
                <div class="w-auto px-2">
                  <h4 class="txl-base md:2ext-lg font-bold text-gray-700">
                    Tech Professionals
                  </h4>
                  <p class="text-base md:text-lg text-gray-500">21 May 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-5/12 lg:w-4/12 xl:w-3/12 px-4 mb-8">
              <ul className="pb-6 mb-8 border-b border-gray-100">
                <li className="mb-2">
                  <span className="inline-block py-2 text-gray-600 hover:text-gray-700 font-bold">
                    Expertly Compiled Questions
                  </span>
                </li>
                <li className="mb-2">
                  <span className="inline-block py-2 text-gray-600 hover:text-gray-700 font-bold">
                    Up-to-Date Content
                  </span>
                </li>
                <li className="mb-2">
                  <span className="inline-block py-2 text-gray-600 hover:text-gray-700 font-bold">
                    Exceptional Customer Support
                  </span>
                </li>
                <li className="mb-2">
                  <span className="inline-block py-2 text-gray-600 hover:text-gray-700 font-bold">
                    Refund Policy Terms
                  </span>
                </li>
                <li className="mb-2">
                  <span className="inline-block py-2 text-gray-600 hover:text-gray-700 font-bold">
                    Final Rights of Explanation
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full md:flex-1 px-4">
              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Expertly Compiled Questions
              </h3>
              <p className="pb-6 text-lg text-gray-500 border-gray-100">
                Our Questions & Answers are prepared by senior IT professionals
                and experts with extensive experience in the field.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Up-to-Date Content
              </h3>
              <p className="mb-8 pb-10 text-lg text-gray-500 border-b border-gray-100">
                We continuously review and update our products based on the
                latest exam patterns. Our question pools are refreshed regularly
                to reflect changes in real exam questions, ensuring a 95%
                coverage of actual exam content.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Exceptional Customer Support
              </h3>
              <p className="mb-6 text-lg text-gray-500">
                Our dedicated support team offers 24/7 after-sale assistance to
                help you with any technical questions or issues you may
                encounter.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Refund Policy Terms
              </h3>
              <p className="mb-6 text-base md:text-lg text-gray-500">
                <ul className="list-disc mx-4 pl-5">
                  <li>
                    Refund claims must be made within 30 days of the purchase
                    date. Claims made after this period will not be entertained.
                  </li>
                  <li>
                    You must have studied the provided materials for at least 15
                    days before taking the exam.
                  </li>
                  <li>
                    Refunds are not applicable for exams that have been retired.
                  </li>
                  <li>
                    If the candidate&apos;s name differs from the account
                    holder&apos;s name, the refund policy is void.
                  </li>
                  <li>
                    The candidate’s email must match the email used for the
                    payment processor (e.g., Stripe, PayPal).
                  </li>
                  <li>
                    You must send your ExamPrince.com invoice number along with
                    a failed result PDF or screenshot to sales@examprince.com
                    within 7 days of receiving your exam result.
                  </li>
                  <li>
                    ExamPrince.com will not entertain claims for incorrect
                    products once they have been downloaded and installed.
                  </li>
                  <li>
                    Refund claims are not valid for orders older than 90 days
                    from the purchase date.
                  </li>
                  <li>
                    The refund policy does not apply to Unlimited Access
                    packages.
                  </li>
                  <li>
                    The refund policy is not applicable to training courses.
                  </li>
                </ul>
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Final Rights of Explanation
              </h3>
              <p className="mb-8 text-lg md:text-xl font-medium text-gray-500">
                ExamPrince.com reserves the right to the final interpretation of
                this refund policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundPolicy;
export async function generateMetadata() {
  return {
    title: `ExamPrince Refund Policy`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    alternates: {
      canonical: "https://examprince.com/refund-policy",
    },
  };
}
