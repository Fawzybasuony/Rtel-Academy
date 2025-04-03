import React from "react";
import "./Reting.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import Swiper autoplay styles

import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay

export default function Slider() {
  const reviews = [
    {
      id: 1,
      name: "Ahmed Mohamed",
      text: "The Quran memorization classes were incredibly engaging and inspiring. I feel more confident in my recitation now!",
    },
    {
      id: 2,
      name: "Sara Mohamed",
      text: "I never thought learning Quran could be this enjoyable and easy. The academy's approach is truly remarkable.",
    },
    {
      id: 3,
      name: "Jone Alex",
      text: "The teachers are very supportive and the learning environment is motivating. I highly recommend this academy!",
    },
    {
      id: 4,
      name: "Mona Mahmoud",
      text: "The lessons are well-organized, and I felt a real sense of achievement by the end of the course.",
    },
    {
      id: 5,
      name: "Aiat Maher",
      text: "Excellent program! I have learned so much in a short period of time, and the instructors are very knowledgeable.",
    },
  ];

  return (
    <>
      <div className="text-center mt-14 text-gray-700 font-semibold text-2xl md:text-4xl">
        <p className="text-green-900">Some of our students opinions</p>
        <p className="mt-2"> in the lectures</p>
        <div className="inline-block w-24 md:w-32 h-1 bg-green-900 mt-4"></div>
      </div>

      <Swiper
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]} // Add Autoplay module
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
        slidesPerView={1} // Default for small screens
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        className="my-16"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="contenar max-w-[400px] bg-[#eeeeee] shadow-lg rounded-2xl my-5 p-5 mx-auto">
              {/* Rating stars */}
              <div>
                <div className="star-group">
                  <input
                    type="radio"
                    className="star"
                    id="one"
                    name="star_rating"
                  />
                  <input
                    type="radio"
                    className="star"
                    id="two"
                    name="star_rating"
                  />
                  <input
                    type="radio"
                    className="star"
                    id="three"
                    name="star_rating"
                  />
                  <input
                    type="radio"
                    className="star"
                    id="four"
                    name="star_rating"
                  />
                  <input
                    type="radio"
                    className="star"
                    id="five"
                    name="star_rating"
                    defaultChecked
                  />
                </div>
              </div>
              {/* End Rating */}
              <p className="text-left text-gray-400 pb-5">{review.text}</p>
              <h1 className="text-3xl text-gray-500">
                <span className="text-red-500 text-5xl"> &#10077; </span>
                {review.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
