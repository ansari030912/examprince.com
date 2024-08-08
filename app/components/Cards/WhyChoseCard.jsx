/* eslint-disable @next/next/no-img-element */

const WhyChoseCard = () => {
  return (
    <section
      //   style={{ borderBottom: "30px solid #F7F7F7" }}
      class="pt-4 pb-12 bg-white overflow-hidden "
    >
      <div class="container mx-auto px-4">
        <div class="bg-gray-50 overflow-hidden rounded-t-3xl">
          <div class="px-8 pt-20">
            <div class="md:max-w-2xl text-center mx-auto">
              <span class="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">
                Why Chose Exam Prince
              </span>
              <h1 class="font-heading mb-6 text-3xl lg:text-5xl text-gray-900 font-black tracking-tight">
                Master Your IT Skills with ExamPrince!
              </h1>
              <p class="mb-2 text-xl font-semibold text-gray-600">
                Dominate your IT certification goals with ExamPrince! We provide
                up-to-date practice exams for various certifications, designed
                by industry experts. Identify knowledge gaps, refine your
                understanding, and conquer your exam with confidence. Get
                started today and unlock your IT potential!
              </p>
              <div class="flex flex-wrap justify-center mb-20 -m-2">
                <div class="w-full md:w-auto p-2"></div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="relative z-20 px-8 rounded-full max-w-max mx-auto">
              <img
                src="/table-work-computer-study-reading.jpg"
                className="rounded-3xl"
                alt=""
              />
            </div>
            <div class="absolute left-0 top-0 w-full h-1/2 bg-white">
              <div class="h-full bg-gray-50 rounded-b-3xl"></div>
            </div>
            <div class="absolute left-0 bottom-0 w-full h-1/2 bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoseCard;
