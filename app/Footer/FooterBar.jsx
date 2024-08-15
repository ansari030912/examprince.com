/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const FooterBar = () => {
  return (
    <section class="bg-white overflow-hidden border border-t">
      <div class="container px-1 mx-auto">
        <div class="flex flex-wrap lg:items-center pt-12 pb-12 px-2 md:px-0 -mx-4">
          <div class="w-full md:w-3/4 px-4">
            <Link class="block mb-8 max-w-max" href="/">
              <img class="h-5" src="/img/examprince_dark_svg.svg" alt="" />
            </Link>
            <p class="mb-8 text-base md:text-lg text-justify text-gray-600 font-medium">
              <span
                style={{
                  color: "rgb(55, 65, 81)",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "medium",
                  textAlign: "justify",
                  backgroundColor: "rgb(252, 252, 252)",
                }}
              >
                ExamPrince does not provide real Microsoft exam questions.
                Similarly, ExamPrince does not supply real Amazon exam
                questions. The materials offered by ExamPrince lack real
                questions and answers of certification exams. The CFA Institute
                neither endorses nor assures the accuracy or quality of
                ExamPrince content. CFA® and Chartered Financial Analyst® are
                registered trademarks held by the CFA Institute.
              </span>
            </p>
            <div class="mb-12 md:mb-0 flex flex-wrap -mx-3 md:-mx-6">
              <div class="w-auto p-3 md:px-6 py-2">
                <Link
                  class="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="/exam-providers"
                >
                  Vendors & Certications
                </Link>
              </div>
              <div class="w-auto p-3 md:px-6 py-2">
                <Link
                  class="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="/video-courses"
                >
                  Video Courses
                </Link>
              </div>
              <div class="w-auto p-3 md:px-6 py-2">
                <Link
                  class="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="/unlimited-access"
                >
                  Unlimited Access
                </Link>
              </div>
              <div class="w-auto p-3 md:px-6 py-2">
                <Link
                  class="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="/privacy-policy"
                >
                  Privacy
                </Link>
              </div>
              <div class="w-auto p-3 md:px-6 py-2">
                <Link
                  class="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="/about"
                >
                  About
                </Link>
              </div>
              <div class="w-auto p-3 md:px-6 py-2">
                <Link
                  class="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="/terms-and-conditions"
                >
                  Terms & Conditions
                </Link>
              </div>
              <div class="w-auto p-3 md:px-6 py-2">
                <Link
                  class="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="/refund-policy"
                >
                  Refund Policy
                </Link>
              </div>
              <div class="w-auto p-3 md:px-6 py-2">
                <Link
                  class="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="/faq"
                >
                  FAQ&apos;s
                </Link>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/4 px-4">
            <div class="lg:pr-10 lg:ml-auto lg:max-w-max text-center">
              {/* <Link class="block mb-10" href="#"> */}
              <img src="/safe_checkout_optimized.png" alt="" />
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div class="border-b border-coolGray-100"></div>
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap items-center py-4 ">
          <div class="w-full md:w-1/2 mb-6 md:mb-0">
            <p class="text-gray-700 font-medium">
              © 2024 examprince.com - All Rights Reserved
            </p>
          </div>
          <div class="w-full md:w-1/2">
            <div class="flex flex-wrap md:justify-end -mx-5">
              <div class="px-5 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.7rem"
                  viewBox="0 0 36 36"
                >
                  <path
                    fill="currentColor"
                    d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-1.54 22H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0L32 9.21v17.5l-7.36-7.36l-1.41 1.41ZM5.31 8h25.07L17.84 20.47Z"
                    className="clr-i-outline clr-i-outline-path-1"
                  />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>
                <p className="ml-1 text-gray-700 font-medium">
                  sales@examprince.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBar;
