import React from "react";
import "./card.css";

export default function Card() {
  const courses = [
    {
      id: 1,
      title: "Learn Arabic from Scratch",
      description:
        "Master the basics of reading, writing, and understanding Arabic in a simple and structured way.",
      imgSrc:
        "https://themazine.com/html/alquran/assets/images/resource/course-1.jpg",
      iconSrc:
        "https://themazine.com/html/alquran/assets/images/icons/service-3.svg",
    },
    {
      id: 2,
      title: "Quran Learning for Kids",
      description:
        "An interactive course designed to help children learn how to read the Quran in a fun and engaging way.",
      imgSrc:
        "https://themazine.com/html/alquran/assets/images/resource/course-3.jpg",
      iconSrc:
        "https://themazine.com/html/alquran/assets/images/icons/service-1.svg",
    },
    {
      id: 3,
      title: "Quran Learning for Adults",
      description:
        "A comprehensive program to improve recitation skills and learn the correct pronunciation with Tajweed rules.",
      imgSrc:
        "https://themazine.com/html/alquran/assets/images/resource/course-4.jpg",
      iconSrc:
        "https://themazine.com/html/alquran/assets/images/icons/service-4.svg",
    },
  ];

  return (
    <>
      <p className="text-4xl text-black font-bold text-center mb-10">
        Our service
        <i className="ms-2 text-green-900 fa-regular fa-hand-point-up"></i>
        <br />
        <div className="inline-block w-24 md:w-32 h-1 bg-green-900 "></div>
      </p>
      {/* card */}
      <div className="grid grid-cols-12 gap-5 mx-5   ">
        {courses.map((course) => (
          <div
            key={course.id}
            className="col-span-12 sm:col-span-5 lg:col-span-4 rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark"
          >
            <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
              <img
                src={course.imgSrc}
                className="w-full transition duration-300 ease-in-out hover:scale-110"
                alt={course.title}
              />
              <img
                src={course.iconSrc}
                alt="Free Shipping"
                className="mx-auto w-16 logoo"
              />
            </div>

            <div className="p-6 text-surface text-gray-600">
              <h5 className="mb-2 text-xl font-medium leading-tight">
                {course.title}
              </h5>
              <p
                className="mb-4 w-full"
                dangerouslySetInnerHTML={{ __html: course.description }}
              ></p>

              <button
                type="button"
                className="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-success-50/50 hover:text-success-600 focus:border-success-600 focus:bg-success-50/50 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 motion-reduce:transition-none dark:hover:bg-green-950 dark:focus:bg-green-950"
              >
                Let's get started{" "}
                <span className="text-xl font-bold"> &#10138; </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
