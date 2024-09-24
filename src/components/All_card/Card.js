import React from "react";
import "./All_card.css";

export default function Card() {
  return (
    <>
      <h1 className="text-4xl text-black font-bold text-center m-24">
        Our service 
        <i className="ms-2 text-green-900 fa-regular fa-hand-point-up"></i> <br />
        <div className="inline-block w-24 md:w-32 h-1 bg-green-900 mt-4"></div>
      </h1>
      {/* card_1 */}
      <div className="grid grid-cols-12 gap-4 lg:mx-5">
        <div className=" col-span-12 sm:col-span-5 lg:col-span-4 rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
          <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
            <img
              src="https://themazine.com/html/alquran/assets/images/resource/course-1.jpg"
              className=" w-full transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
            />
            <img
              src="https://themazine.com/html/alquran/assets/images/icons/service-3.svg"
              alt="Free Shipping"
              className="mx-auto w-16 logoo"
            />
          </div>

          <div className="p-6 text-surface text-gray-600">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Das Lehren der Arabischen Sprache Das Lehren der Arabischen
              Sprache
            </h5>
            <p className="mb-4 w-32">
              - Lesen <br /> 
              - Schreiben
              <br />
               - Verstehen
            </p>

            <button
              type="button"
              className="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-success-50/50 hover:text-success-600 focus:border-success-600 focus:bg-success-50/50 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 motion-reduce:transition-none dark:hover:bg-green-950 dark:focus:bg-green-950"
              data-twe-ripple-init
            >
              Let's get started{" "}
              <span className="text-xl font-bold"> &#10138; </span>
            </button>
          </div>
        </div>

        {/*card_2  */}
        <div className=" col-span-12 sm:col-span-5 lg:col-span-4 rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
          <div class="relative w-full overflow-hidden bg-cover bg-no-repeat">
            <img
              src="https://themazine.com/html/alquran/assets/images/resource/course-3.jpg"
              className=" w-full transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
            />
            <img
              src="https://themazine.com/html/alquran/assets/images/icons/service-1.svg"
              alt="Free Shipping"
              className="mx-auto w-16 logoo"
            />
          </div>

          <div className="p-6 text-surface text-gray-600">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Quran für Kinder Quran für Kinder
            </h5>
            <p className="mb-4 w-full">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <button
              type="button"
              className="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-success-50/50 hover:text-success-600 focus:border-success-600 focus:bg-success-50/50 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 motion-reduce:transition-none dark:hover:bg-green-950 dark:focus:bg-green-950"
              data-twe-ripple-init
            >
              Let's get started{" "}
              <span className="text-xl font-bold"> &#10138; </span>
            </button>
          </div>
        </div>
        {/* card_3 */}
        <div className=" col-span-12 sm:col-span-5 lg:col-span-4 rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
          <div class="relative w-full overflow-hidden bg-cover bg-no-repeat">
            <img
              src="https://themazine.com/html/alquran/assets/images/resource/course-4.jpg"
              className=" w-full transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
            />
            <img
              src="https://themazine.com/html/alquran/assets/images/icons/service-4.svg"
              alt="Free Shipping"
              className="mx-auto w-16 logoo"
            />
          </div>

          <div className="p-6 text-surface text-gray-600">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Quran für Erwachsene
            </h5>
            <p className="mb-4 w-full">
              Quran für Erwachsene Quran für Erwachsene Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua.
            </p>
            <button
              type="button"
              className="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-success-50/50 hover:text-success-600 focus:border-success-600 focus:bg-success-50/50 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 motion-reduce:transition-none dark:hover:bg-green-950 dark:focus:bg-green-950"
              data-twe-ripple-init
            >
              Let's get started{" "}
              <span className="text-xl font-bold"> &#10138; </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
