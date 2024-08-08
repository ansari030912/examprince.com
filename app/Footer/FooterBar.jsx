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
              <div class="w-auto p-3 md:py-0 md:px-6">
                <a
                  class="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="#"
                >
                  Vendors & Certications
                </a>
              </div>
              <div class="w-auto p-3 md:py-0 md:px-6">
                <a
                  class="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="#"
                >
                  Video Courses
                </a>
              </div>
              <div class="w-auto p-3 md:py-0 md:px-6">
                <a
                  class="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="#"
                >
                  Unlimited Access
                </a>
              </div>
              <div class="w-auto p-3 md:py-0 md:px-6">
                <a
                  class="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="#"
                >
                  Privaacy Policy
                </a>
              </div>
              <div class="w-auto p-3 md:py-0 md:px-6">
                <a
                  class="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="#"
                >
                  Customer Support
                </a>
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
                  viewBox="0 0 256 256"
                >
                  <g fill="currentColor">
                    <path
                      d="M223.94 174.08A48.33 48.33 0 0 1 176 216A136 136 0 0 1 40 80a48.33 48.33 0 0 1 41.92-47.94a8 8 0 0 1 8.3 4.8l21.13 47.2a8 8 0 0 1-.66 7.53L89.32 117a7.93 7.93 0 0 0-.54 7.81c8.27 16.93 25.77 34.22 42.75 42.41a7.92 7.92 0 0 0 7.83-.59l25-21.3a8 8 0 0 1 7.59-.69l47.16 21.13a8 8 0 0 1 4.83 8.31"
                      opacity=".2"
                    />
                    <path d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8.12 8.12 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62M176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.61.61 0 0 0 0 .12l21 47l-20.67 24.74a6.13 6.13 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8.44 8.44 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208" />
                  </g>
                </svg>
                <p className="ml-1 text-gray-700 font-medium">+447380890921</p>
              </div>
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
