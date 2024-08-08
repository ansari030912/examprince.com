/* eslint-disable @next/next/no-img-element */

const ExamDetailCard = () => {
  return (
    <section class="py-6 bg-gray-50">
      <div class="container px-4 mx-auto">
        <div class="max-w-6xl mx-auto">
          <div class="px-6 bg-white border-2 border-black rounded-md shadow">
            <div class="flex flex-wrap items-center justify-between -mx-3">
              <div class="w-full md:w-1/2 xl:w-auto px-3">
                <div class="flex py-5 items-center">
                  <span class="inline-block mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#22C55E"
                        d="M256 89.61L22.486 177.18L256 293.937l111.22-55.61l-104.337-31.9A16 16 0 0 1 256 208a16 16 0 0 1-16-16a16 16 0 0 1 16-16l-2.646 8.602l18.537 5.703l.008.056l27.354 8.365L455 246.645v12.146a16 16 0 0 0-7 13.21a16 16 0 0 0 7.293 13.406C448.01 312.932 448 375.383 448 400c16 10.395 16 10.775 32 0c0-24.614-.008-87.053-7.29-114.584A16 16 0 0 0 480 272a16 16 0 0 0-7-13.227v-25.42L413.676 215.1l75.838-37.92zM119.623 249L106.5 327.74c26.175 3.423 57.486 18.637 86.27 36.627c16.37 10.232 31.703 21.463 44.156 32.36c7.612 6.66 13.977 13.05 19.074 19.337c5.097-6.288 11.462-12.677 19.074-19.337c12.453-10.897 27.785-22.128 44.156-32.36c28.784-17.99 60.095-33.204 86.27-36.627L392.375 249h-6.25L256 314.063L125.873 249z"
                      />
                    </svg>
                  </span>
                  <h4 class="font-bold">Accurate Question Answer</h4>
                </div>
              </div>
              <div class="w-full md:w-1/2 xl:w-auto px-3">
                <div class="flex py-5 items-center">
                  <span class="inline-block mr-3">
                    <svg
                      width="32"
                      height="32"
                      viewbox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25 10.6667V13.4667C24.4133 13.3867 23.7467 13.3467 23 13.3334V10.6667C23 6.46675 21.8133 3.66675 16 3.66675C10.1867 3.66675 9 6.46675 9 10.6667V13.3334C8.25333 13.3467 7.58667 13.3867 7 13.4667V10.6667C7 6.80008 7.93333 1.66675 16 1.66675C24.0667 1.66675 25 6.80008 25 10.6667Z"
                        fill="#22C55E"
                      ></path>
                      <path
                        d="M25 13.4666C24.4133 13.3866 23.7467 13.3466 23 13.3333H8.99999C8.25332 13.3466 7.58666 13.3866 6.99999 13.4666C3.59999 13.8799 2.66666 15.5466 2.66666 19.9999V22.6666C2.66666 27.9999 3.99999 29.3333 9.33332 29.3333H22.6667C28 29.3333 29.3333 27.9999 29.3333 22.6666V19.9999C29.3333 15.5466 28.4 13.8799 25 13.4666ZM11.6133 22.2799C11.36 22.5199 11.0133 22.6666 10.6667 22.6666C10.4933 22.6666 10.32 22.6266 10.16 22.5599C9.98666 22.4933 9.85332 22.3999 9.71999 22.2799C9.47999 22.0266 9.33332 21.6799 9.33332 21.3333C9.33332 21.1599 9.37332 20.9866 9.43999 20.8266C9.50666 20.6666 9.59999 20.5199 9.71999 20.3866C9.85332 20.2666 9.98666 20.1733 10.16 20.1066C10.6533 19.8933 11.24 20.0133 11.6133 20.3866C11.7333 20.5199 11.8267 20.6666 11.8933 20.8266C11.96 20.9866 12 21.1599 12 21.3333C12 21.6799 11.8533 22.0266 11.6133 22.2799ZM17.2267 21.8399C17.16 21.9999 17.0667 22.1466 16.9467 22.2799C16.6933 22.5199 16.3467 22.6666 16 22.6666C15.64 22.6666 15.3067 22.5199 15.0533 22.2799C14.9333 22.1466 14.84 21.9999 14.7733 21.8399C14.7067 21.6799 14.6667 21.5066 14.6667 21.3333C14.6667 20.9733 14.8133 20.6399 15.0533 20.3866C15.5467 19.8933 16.44 19.8933 16.9467 20.3866C17.1867 20.6399 17.3333 20.9733 17.3333 21.3333C17.3333 21.5066 17.2933 21.6799 17.2267 21.8399ZM22.28 22.2799C22.0267 22.5199 21.68 22.6666 21.3333 22.6666C20.9867 22.6666 20.64 22.5199 20.3867 22.2799C20.1467 22.0266 20 21.6933 20 21.3333C20 20.9733 20.1467 20.6399 20.3867 20.3866C20.8933 19.8933 21.7867 19.8933 22.28 20.3866C22.3333 20.4533 22.3867 20.5199 22.44 20.5999C22.4933 20.6666 22.5333 20.7466 22.56 20.8266C22.6 20.9066 22.6267 20.9866 22.64 21.0666C22.6533 21.1599 22.6667 21.2533 22.6667 21.3333C22.6667 21.6799 22.52 22.0266 22.28 22.2799Z"
                        fill="#22C55E"
                      ></path>
                    </svg>
                  </span>
                  <h4 class="font-bold">Secure Shopping Guarantee</h4>
                </div>
              </div>
              <div class="w-full md:w-1/2 xl:w-auto px-3">
                <div class="flex py-5 items-center">
                  <span class="inline-block mr-3">
                    <svg
                      width="32"
                      height="32"
                      viewbox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.1866 24.6532V11.1066C11.1866 10.5732 11.3466 10.0532 11.64 9.61322L15.28 4.19989C15.8533 3.33322 17.28 2.71989 18.4933 3.17322C19.8 3.61322 20.6666 5.07989 20.3866 6.38655L19.6933 10.7466C19.64 11.1466 19.7466 11.5066 19.9733 11.7866C20.2 12.0399 20.5333 12.1999 20.8933 12.1999H26.3733C27.4266 12.1999 28.3333 12.6266 28.8666 13.3732C29.3733 14.0932 29.4666 15.0266 29.1333 15.9732L25.8533 25.9599C25.44 27.6132 23.64 28.9599 21.8533 28.9599H16.6533C15.76 28.9599 14.5066 28.6532 13.9333 28.0799L12.2266 26.7599C11.5733 26.2666 11.1866 25.4799 11.1866 24.6532Z"
                        fill="#22C55E"
                      ></path>
                      <path
                        d="M6.94669 8.50659H5.57335C3.50669 8.50659 2.66669 9.30659 2.66669 11.2799V24.6933C2.66669 26.6666 3.50669 27.4666 5.57335 27.4666H6.94669C9.01335 27.4666 9.85335 26.6666 9.85335 24.6933V11.2799C9.85335 9.30659 9.01335 8.50659 6.94669 8.50659Z"
                        fill="#22C55E"
                      ></path>
                    </svg>
                  </span>
                  <h4 class="font-bold">100% Customer Satisfaction</h4>
                </div>
              </div>
              <div class="w-full md:w-1/2 xl:w-auto px-3">
                <div class="flex py-5 items-center">
                  <span class="inline-block mr-3">
                    <svg
                      width="32"
                      height="32"
                      viewbox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 2.66675C8.65335 2.66675 2.66669 8.65341 2.66669 16.0001C2.66669 23.3467 8.65335 29.3334 16 29.3334C23.3467 29.3334 29.3334 23.3467 29.3334 16.0001C29.3334 8.65341 23.3467 2.66675 16 2.66675ZM22.3734 12.9334L14.8134 20.4934C14.6267 20.6801 14.3734 20.7867 14.1067 20.7867C13.84 20.7867 13.5867 20.6801 13.4 20.4934L9.62669 16.7201C9.24002 16.3334 9.24002 15.6934 9.62669 15.3067C10.0134 14.9201 10.6534 14.9201 11.04 15.3067L14.1067 18.3734L20.96 11.5201C21.3467 11.1334 21.9867 11.1334 22.3734 11.5201C22.76 11.9067 22.76 12.5334 22.3734 12.9334Z"
                        fill="#22C55E"
                      ></path>
                    </svg>
                  </span>
                  <h4 class="font-bold">Product Guarantee</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamDetailCard;
