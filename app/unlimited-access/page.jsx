/* eslint-disable @next/next/no-img-element */
import React from "react";
import UnlimitedPage from "../components/Cards/UnlimitedPage";
import { X_API_Key } from "../URL's/Api_X_Key";
import { Base_URL } from "../URL's/Base_URL";

const page = async () => {
  const response = await fetch(
    `${Base_URL}/v1/unlimited_access/?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );

  const data = await response.json();

  return (
    <section class="pt-6 pb-6 px-6 bg-white">
      <div className="flex justify-center mb-4">
        <img src="/MEGASALE DA-min.png" alt="" />
      </div>
      <UnlimitedPage data={data} />
    </section>
  );
};

export default page;

export async function generateMetadata() {
  return {
    title: `ExamPrince Unlimited Access`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    alternates: {
      canonical: "https://examprince.com/unlimited-access",
    },
  };
}
