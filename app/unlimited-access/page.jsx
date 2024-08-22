/* eslint-disable @next/next/no-img-element */
import React from "react";
import UnlimitedPage from "../components/Cards/UnlimitedPage";
import { X_API_Key } from "../URL's/Api_X_Key";
import { Base_URL } from "../URL's/Base_URL";
import Link from "next/link";

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
  const bannerResponec = await fetch(`${Base_URL}/v1/banner`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const imageUrl = await bannerResponec.json();

  return (
    <section class="pt-6 pb-6 px-6 bg-white">
      <Link href={imageUrl?.banner_link} className="flex justify-center mb-4">
        <img src={imageUrl?.banner_src} alt={imageUrl?.banner_website} />
      </Link>
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
