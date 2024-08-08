/* eslint-disable @next/next/no-img-element */
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import RecentUpdateExamCard from "../Cards/RecentUpdateExamCard";

export const RecentUpdatedExams = async () => {
  const response = await fetch(`${Base_URL}/v1/recently-updated`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return (
    <section class="py-12 bg-white overflow-hidden bg-cover">
      <div class="container px-4 mx-auto">
        <div class="md:max-w-4xl mb-8 md:mb-10">
          <h1 class="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
            Latest Recently Updated Exam Questions
          </h1>
          <p class="text-lg md:text-xl text-coolGray-500 font-medium">
            With our integrated CRM, project management, collaboration and
            invoicing capabilities, you can manage every aspect of your business
            in one secure platform.
          </p>
        </div>
        <div class="flex flex-wrap lg:items-center -mx-4">
          <div class="w-full lg:w-5/12 xl:w-5/12 px-4 mb-8 lg:mb-0">
            <div class="relative mx-auto lg:ml-0 max-w-max">
              <img
                class="absolute z-10 -left-8 -top-8 w-28 lg:w-auto text-yellow-400"
                src="/circle3-yellow.svg"
                alt=""
              />
              <img
                class="absolute z-10 -right-7 -bottom-8 w-28 lg:w-auto text-blue-500"
                src="/dots3-blue.svg"
                alt=""
              />
              <img src="/exam.png" alt="" />
            </div>
          </div>
          <div class="w-full lg:w-7/12 xl:w-7/12 px-4">
            <RecentUpdateExamCard data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};
