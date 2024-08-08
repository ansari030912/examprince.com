/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import moment from "moment";
import Link from "next/link";
import AddToCart from "./AddToCart";
import ExamDetailCard from "./ExamDetailCard";
import ExamStats from "./ExamStats";
const ExamAddToCart = ({ examData }) => {
  return (
    <>
      <section class="pt-6 pb-6 px-6 bg-white">
        <div className="container mx-auto">
          <div class="flex flex-wrap -m-4 mb-20">
            <div class="w-full lg:w-4/12 p-12">
              <div class="flex items-end gap-2">
                <span
                  style={{ display: "flex", justifyContent: "center" }}
                  class="group flex-1"
                >
                  <div
                    class="relative xl:hidden overflow-hidden rounded-xl flex flex-col justify-center transition duration-200"
                    style={{
                      height: "300px",
                      width: "300px",
                    }}
                  >
                    <img
                      style={{ width: "300px", height: "300px" }}
                      class="absolute inset-0 rounded-xl transform group-hover:scale-105 transition duration-200"
                      src="/package-small-min_optimized.png"
                      alt=""
                    />
                  </div>
                  <div
                    class="relative hidden xl:inline-flex overflow-hidden rounded-xl flex-col justify-center transition duration-200"
                    style={{
                      height: "300px",
                      width: "420px",
                    }}
                  >
                    <img
                      style={{ width: "420px", height: "300px" }}
                      class="absolute inset-0 rounded-xl transform group-hover:scale-105 transition duration-200"
                      src="/package-small-min_optimized.png"
                      alt=""
                    />
                  </div>
                </span>
              </div>
            </div>
            <div class="w-full lg:w-8/12 p-4">
              <div class="p-5 md:p-10">
                <h2 class="font-heading font-bold text-gray-600 uppercase text-3xl mb-2 max-w-2xl">
                  {examData.exam_title}
                </h2>
                <p class="text-gray-500 text-base font-bold max-w-2xl mb-2">
                  Everything you need to prepare, learn & pass your
                  certification exam easily. 90 days free updates. First attempt
                  100% success.
                </p>
                <hr className="mb-4" style={{ border: "2px solid #F5F6FA" }} />
                <p class="text-gray-500 text-base font-semibold max-w-xl">
                  Last Update :{" "}
                  {moment(examData?.exam_update_date).format("LL")}
                </p>
                <p class="text-gray-500 text-base font-semibold  max-w-xl">
                  Latest Question & Answers : {examData.exam_questions}
                </p>
                <p class="text-gray-500 text-base font-semibold  max-w-xl">
                  Exam Question Provider :{" "}
                  <Link href={`/exam-provider/${examData?.exam_vendor_perma}`}>
                    <span
                      style={{
                        color: "#0da8e5",
                        cursor: "pointer",
                      }}
                      className="hover:underline"
                    >
                      {examData?.exam_vendor_title}
                    </span>
                  </Link>
                </p>
                <p class="text-gray-500 text-base font-semibold mb-6 max-w-xl">
                  Certification Exam Name :{" "}
                  <span
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {examData?.exam_certs?.map((item, i) => (
                      <Link
                        key={i}
                        className="hover:underline text-sky-500"
                        href={`/vendor-exam-questions/${examData?.exam_vendor_perma}/${item?.cert_perma}`}
                      >
                        {item.cert_title},{"  "}
                      </Link>
                    ))}
                  </span>
                </p>
                <div class="flex flex-wrap items-center gap-2 ">
                  <div class="flex gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M10.8586 4.71245C11.2178 3.60688 12.7819 3.60688 13.1412 4.71245L14.4246 8.66261C14.5853 9.15703 15.046 9.49179 15.5659 9.49179H19.7193C20.8818 9.49179 21.3651 10.9793 20.4247 11.6626L17.0645 14.1039C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3957C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.296C12.2846 17.9905 11.7151 17.9905 11.2945 18.296L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3957L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.1039L3.57508 11.6626C2.63463 10.9793 3.11796 9.49179 4.28043 9.49179H8.43387C8.95374 9.49179 9.41448 9.15703 9.57513 8.66261L10.8586 4.71245Z"
                        fill="#FFB11A"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M10.8586 4.71245C11.2178 3.60688 12.7819 3.60688 13.1412 4.71245L14.4246 8.66261C14.5853 9.15703 15.046 9.49179 15.5659 9.49179H19.7193C20.8818 9.49179 21.3651 10.9793 20.4247 11.6626L17.0645 14.1039C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3957C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.296C12.2846 17.9905 11.7151 17.9905 11.2945 18.296L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3957L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.1039L3.57508 11.6626C2.63463 10.9793 3.11796 9.49179 4.28043 9.49179H8.43387C8.95374 9.49179 9.41448 9.15703 9.57513 8.66261L10.8586 4.71245Z"
                        fill="#FFB11A"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M10.8586 4.71245C11.2178 3.60688 12.7819 3.60688 13.1412 4.71245L14.4246 8.66261C14.5853 9.15703 15.046 9.49179 15.5659 9.49179H19.7193C20.8818 9.49179 21.3651 10.9793 20.4247 11.6626L17.0645 14.1039C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3957C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.296C12.2846 17.9905 11.7151 17.9905 11.2945 18.296L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3957L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.1039L3.57508 11.6626C2.63463 10.9793 3.11796 9.49179 4.28043 9.49179H8.43387C8.95374 9.49179 9.41448 9.15703 9.57513 8.66261L10.8586 4.71245Z"
                        fill="#FFB11A"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M10.8586 4.71245C11.2178 3.60688 12.7819 3.60688 13.1412 4.71245L14.4246 8.66261C14.5853 9.15703 15.046 9.49179 15.5659 9.49179H19.7193C20.8818 9.49179 21.3651 10.9793 20.4247 11.6626L17.0645 14.1039C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3957C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.296C12.2846 17.9905 11.7151 17.9905 11.2945 18.296L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3957L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.1039L3.57508 11.6626C2.63463 10.9793 3.11796 9.49179 4.28043 9.49179H8.43387C8.95374 9.49179 9.41448 9.15703 9.57513 8.66261L10.8586 4.71245Z"
                        fill="#FFB11A"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M10.8586 4.71245C11.2178 3.60688 12.7819 3.60688 13.1412 4.71245L14.4246 8.66261C14.5853 9.15703 15.046 9.49179 15.5659 9.49179H19.7193C20.8818 9.49179 21.3651 10.9793 20.4247 11.6626L17.0645 14.1039C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3957C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.296C12.2846 17.9905 11.7151 17.9905 11.2945 18.296L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3957L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.1039L3.57508 11.6626C2.63463 10.9793 3.11796 9.49179 4.28043 9.49179H8.43387C8.95374 9.49179 9.41448 9.15703 9.57513 8.66261L10.8586 4.71245Z"
                        fill="#FFB11A"
                      ></path>
                    </svg>
                  </div>
                  <span class="text-sm font-bold text-gray-600">
                    5.0 (7.932 reviews)
                  </span>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <ExamDetailCard />
            </div>
          </div>
          <hr className="-mt-20" />
          <AddToCart examData={examData} />
        </div>
      </section>
      <ExamStats examData={examData} />
    </>
  );
};

export default ExamAddToCart;
