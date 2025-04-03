import "./Slidar_2.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const slides = [
  {
    image: "/S_1 (1).jpg",
    caption:
      "Discover the ease of learning Arabic and reciting the Quran with our academy, designed to help you achieve your goals quickly and effectively.",
  },
  {
    image: "/S_1 (2).jpg",
    caption:
      "Start your journey of learning the Quran with simplified lessons aimed at helping you achieve a better understanding faster.",
  },
  {
    image: "/S_1 (3).jpg",
    caption:
      "Master language skills quickly with interactive lessons tailored to your needs, helping you level up effectively and efficiently.",
  },
];

export default function Slidarrr() {
  return (
    <Swiper
      loop={true}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]} // Add Autoplay module
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
      className="xxx"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content">
            <img
              className="object-center"
              src={slide.image}
              alt={slide.caption}
            />
            <div className="caption">
              <p className="text-left text-xl ms-[60px] text-white font-mono pb-14 sm:text-3xl sm:ms-[0]">
                {slide.caption}
              </p>
              <div className="flex gap-10 ms-[60px] sm:ms-[0]">
                <button
                  type="button"
                  className="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-success-50/50 hover:text-success-600 focus:border-success-600 focus:bg-success-50/50 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 motion-reduce:transition-none dark:hover:bg-green-950 dark:focus:bg-green-950"
                  data-twe-ripple-init
                >
                  Let's Go
                  <span className="text-xl font-bold"> &#10138; </span>
                </button>

                <button
                  type="button"
                  className="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-success-50/50 hover:text-success-600 focus:border-success-600 focus:bg-success-50/50 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 motion-reduce:transition-none dark:hover:bg-green-950 dark:focus:bg-green-950"
                  data-twe-ripple-init
                >
                  I Listen
                  <span className="text-xl font-bold"> &#10138; </span>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
