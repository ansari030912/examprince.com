/* eslint-disable @next/next/no-img-element */
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import AllVendorTableCard from "./AllVendorTableCard";

const AllVideoCourses = async ({ referral }) => {
  const response = await fetch(`${Base_URL}/v1/training-courses`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return (
    <>
      <section class="pt-6 pb-6 px-6 bg-white">
        <div className="flex justify-center mb-4">
          <img src="/MEGASALE DA-min.png" alt="" />
        </div>
      </section>
      <AllVendorTableCard data={data} referral={referral} />
    </>
  );
};

export default AllVideoCourses;
