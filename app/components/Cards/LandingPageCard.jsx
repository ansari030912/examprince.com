/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

const LandingPageCard = () => {
  return (
    <section
      class="pb-6 bg-fixed"
      style={{
        backgroundImage: `url("/bg-img-3.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="container px-4 mx-auto pt-12">
        <div class="flex flex-wrap items-center -mx-4">
          <div class="w-full md:w-7/12 px-4 mb-6 md:mb-0">
            <span class="font-semibold text-xs text-blue-400">
              What's new at Exam Prince
            </span>
            <h2 class="mt-8 mb-6 lg:mb-12 text-4xl lg:text-5xl font-semibold">
              Ace Your Upcoming Certification Exam Quickly!
            </h2>
            <div class="max-w-lg mb-6 lg:mb-12">
              <p class="text-xl text-gray-500">
                Prepare, study, and ace your certification exam effortlessly
                with everything you need. Enjoy 90 days of free updates and
                ensure 100% success on your first attempt.
              </p>
            </div>
            <div class="flex flex-wrap">
              <span class="inline-block px-6 py-4 mb-3 mr-4 text-base font-bold leading-normal bg-teal-400 hover:bg-teal-500 text-white rounded transition duration-200">
                Latest Questions & Answers
              </span>
              <span class="inline-block px-6 py-4 mb-3 mr-4 text-base font-bold leading-normal bg-green-400 hover:bg-green-500 text-white rounded transition duration-200">
                Hight sucess rate
              </span>
              <span class="inline-block px-6 py-4 mb-3 mr-4 text-base font-bold leading-normal bg-orange-400 hover:bg-orange-500 text-white rounded transition duration-200">
                Quick availability
              </span>
              <span class="inline-block px-6 py-4 mb-3 mr-4 text-base font-bold leading-normal bg-violet-400 hover:bg-violet-500 text-white rounded transition duration-200">
                Instantly prepared access
              </span>
              <span class="inline-block px-6 py-4 mb-3 mr-4 text-base font-bold leading-normal bg-red-400 hover:bg-red-500 text-white rounded transition duration-200">
                Safe, Private, Reliable
              </span>
              <span class="inline-block px-6 py-4 mb-3 mr-4 text-base font-bold leading-normal bg-stone-400 hover:bg-stone-500 text-white rounded transition duration-200">
                Easy to refund
              </span>
            </div>
          </div>
          <div class="relative w-full md:w-5/12 px-4">
            <img class="relative" src="/img-2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageCard;
