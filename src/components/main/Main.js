import React from "react";
import "./Main.css";
export default function Main() {
  return (
    <>
      <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 ">
        <div>
          {/* Section Title */}
          <div className="flex justify-center items-center mb-6">
            <p className="text-green-800 text-xl lg:text-2xl font-bold">
              Islamic Online Madrasah
            </p>
            <img
              className="ml-4 w-24 h-24 rounded-xl p-4 bg-slate-100"
              src="https://themazine.com/html/alquran/assets/images/icons/bismillah-2.png"
              alt="..."
            />
          </div>

          {/* Welcome Section */}
          <div className="w-full lg:w-[700px] mb-6">
            <h1 className="text-2xl lg:text-3xl font-bold text-black mb-4">
            Welcome to Rtel Academy
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              We welcome our users to Online Quran teaching services where we
              are offering multiple Islamic as well as character building and
              life reformation courses as per the teachings of Sharia.
            </p>
          </div>

          {/* Image and Description */}
          <div className="flex flex-col lg:flex-row items-center mb-6">
            <img
              src="https://themazine.com/html/alquran/assets/images/resource/welcome.jpg"
              alt="..."
              className="w-full lg:w-[400px] mb-6 lg:mb-0 rounded-lg"
            />
            <div className="lg:ml-8 text-gray-600">
              <p className="leading-relaxed">
                There are many variations of passages of lorem ipsum available,
                but the majority have suffered business consulting.
              </p>
              <br />
              <p className="flex items-center text-green-700 text-xl lg:text-xl font-bold">
                <img
                  className="w-[100px] h-18 -ms-6 cccx"
                  src="/Q'ran.jpg"
                  alt="..."
                />
                Learn Online at Your Own Pace
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-gray-600 text-lg leading-relaxed">
            We offer our students high-quality Arabic and Quran at affordable
            prices that meet their budget.
          </p>
        </div>

        {/* Right Section with Images */}
        <div className="flex justify-center items-center mt-20">
          <div className="relative w-full h-[400px] lg:w-[500px]">
            <img
              src="https://themazine.com/html/alquran/assets/images/resource/welcome-1.jpg"
              alt="..."
              className="w-full h-full object-cover rounded-lg"
            />
            <img
              src="https://themazine.com/html/alquran/assets/images/icons/ameen-1.png"
              alt="..."
              className="Amin absolute bottom-4 right-4 w-[150px] lg:w-[200px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
