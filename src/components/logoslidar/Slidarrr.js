import "./Slidar_2.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import Swiper autoplay styles

import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay

export default function Slidarrr() {
  return (
    <>
      <Swiper
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]} // Add Autoplay module
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
        className="xxx"
      >
     {/* Slider_1 */}
<SwiperSlide>
  <div className="slide-content">
    <img src="/photo_1 (3).jpg" alt="..." />
    <div className="caption">
      <p className="text-left text-xl ms-[60px] text-white font-mono pb-14 sm:text-3xl sm:ms-[0] ">
        Discover the ease of learning Arabic and reciting the Quran with our academy, designed to help you achieve your goals quickly and effectively.
      </p>

      {/* 2 Buttons */}
      <div className="flex gap-10 ms-[60px] sm:ms-[0]">
        <button
          type="button"
          class="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-success-50/50 hover:text-success-600 focus:border-success-600 focus:bg-success-50/50 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 motion-reduce:transition-none dark:hover:bg-green-950 dark:focus:bg-green-950"
          data-twe-ripple-init
        >
          Let's Go
          <span className="text-xl font-bold"> &#10138; </span>
        </button>

        <button
          type="button"
          class="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-success-50/50 hover:text-success-600 focus:border-success-600 focus:bg-success-50/50 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 motion-reduce:transition-none dark:hover:bg-green-950 dark:focus:bg-green-950"
          data-twe-ripple-init
        >
          I Listen
          <span className="text-xl font-bold"> &#10138; </span>
        </button>
      </div>
      {/*  */}
    </div>
  </div>
</SwiperSlide>

{/* Slider_2 */}
<SwiperSlide>
  <div className="slide-content">
    <img src="/photo_1 (1).jpg" alt="..." />
    <div className="caption">
      <p className="text-left text-xl ms-[60px] text-black font-mono pb-14 sm:text-3xl sm:ms-[0] ">
        Start your journey of learning the Quran with simplified lessons aimed at helping you achieve a better understanding faster.
      </p>

      {/* 2 Buttons */}
      <div className="flex gap-10 ms-[60px] sm:ms-[0]">
        <button
          type="button"
          class="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-success-50/50 hover:text-success-600 focus:border-success-600 focus:bg-success-50/50 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 motion-reduce:transition-none dark:hover:bg-green-950 dark:focus:bg-green-950"
          data-twe-ripple-init
        >
          Let's Go
          <span className="text-xl font-bold"> &#10138; </span>
        </button>

        <button
          type="button"
          class="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-success-50/50 hover:text-success-600 focus:border-success-600 focus:bg-success-50/50 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 motion-reduce:transition-none dark:hover:bg-green-950 dark:focus:bg-green-950"
          data-twe-ripple-init
        >
          I Listen
          <span className="text-xl font-bold"> &#10138; </span>
        </button>
      </div>
      {/*  */}
    </div>
  </div>
</SwiperSlide>

{/* Slider_3 */}
<SwiperSlide>
  <div className="slide-content">
    <img src="/photo_1 (2).jpg" alt="..." />
    <div className="caption">
      <p className="text-left text-xl ms-[60px] text-white font-mono pb-14 sm:text-3xl sm:ms-[0] ">
        Learn language skills quickly with interactive lessons tailored to meet your needs and enhance your level.
      </p>

      {/* 2 Buttons */}
      <div className="flex gap-10 ms-[60px] sm:ms-[0]">
        <button
          type="button"
          class="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-success-50/50 hover:text-success-600 focus:border-success-600 focus:bg-success-50/50 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 motion-reduce:transition-none dark:hover:bg-green-950 dark:focus:bg-green-950"
          data-twe-ripple-init
        >
          Let's Go
          <span className="text-xl font-bold"> &#10138; </span>
        </button>

        <button
          type="button"
          class="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-success-50/50 hover:text-success-600 focus:border-success-600 focus:bg-success-50/50 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 motion-reduce:transition-none dark:hover:bg-green-950 dark:focus:bg-green-950"
          data-twe-ripple-init
        >
          I Listen
          <span className="text-xl font-bold"> &#10138; </span>
        </button>
      </div>
      {/*  */}
    </div>
  </div>
</SwiperSlide>

      </Swiper>
 
    </>
  );
}
