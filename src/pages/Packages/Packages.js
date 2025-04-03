import React from "react";
import Navbarrr from "../../components/Nav_bar/Nav_bar";
import Footer from "../../components/Footer/Footer";

export default function Packages() {
  return (
    <>
      <Navbarrr />

      <div className="text-center mx-auto mt-14">
        <h3 className="text-5xl font-semibold text-gray-600">
          Our Plan <span className="text-red-600">&#10003;</span>
        </h3>
        <div className="inline-block w-24 md:w-32 h-1 bg-green-900 mt-4"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-32 font-semibold">
        {/* Card 1 */}
        <div className=" bg-gray-100 border border-yellow-400 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <div className="mx-auto w-[110px] h-[110px] rounded-full text-center flex justify-center items-center border border-yellow-400 bg-gray-200 text-4xl font-bold text-gray-800 mb-7">
            <div>
              <sub className="text-2xl text-red-500">$</sub>5
              <span className="text-lg text-gray-600">/Mo</span>
            </div>
          </div>
          <h4 className="text-2xl font-semibold text-gray-700 mb-4">
            8 Classes Per Months
          </h4>
          <div className="text-lg text-gray-500 mb-6">
            . 300+ Students Enrolled
          </div>
          <ul className="space-y-2 text-gray-600 mb-6">
            
            <li>. 1 Hours = US$ 5  </li>
            <li>. 1 Months * 8 = US$ 40</li>
            <li className="text-green-600 font-semibold">Offer </li>
            <li>. 2 Months * 16 = US$ 70</li>

          </ul>
          <div>
            <a
              href="price.html"
              className="bg-red-500 text-white py-3 px-6 rounded-lg shadow hover:bg-red-600 transition duration-300"
            >
              Free Trial
            </a>
          </div>
        </div>
        {/* Card 2 */}
        <div className=" bg-gray-100 border border-yellow-400 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <div className="mx-auto w-[110px] h-[110px] rounded-full text-center flex justify-center items-center border border-yellow-400 bg-gray-200 text-4xl font-bold text-gray-800 mb-7">
            <div>
              <sub className="text-2xl text-red-500">$</sub>7
              <span className="text-lg text-gray-600">/Mo</span>
            </div>
          </div>
          <h4 className="text-2xl font-semibold text-gray-700 mb-4">
             9 Classes Per Months
          </h4>
          <div className="text-lg text-gray-500 mb-6">
            . 500+ Students Enrolled
          </div>
          <ul className="space-y-2 text-gray-600 mb-6">
            
          <li>. 1 Hours = US$ 7  </li>
            <li>. 1 Months * 9 = US$ 42</li>
            <li className="text-green-600 font-semibold">Offer </li>
            <li>. 3 Months * 24 = US$ 105</li>

          </ul>
          <div>
            <a
              href="price.html"
              className="bg-red-500 text-white py-3 px-6 rounded-lg shadow hover:bg-red-600 transition duration-300"
            >
              Free Trial
            </a>
          </div>
        </div>
        {/* Card 3 */}

        <div className=" bg-gray-100 border border-yellow-400 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <div className="mx-auto w-[110px] h-[110px] rounded-full text-center flex justify-center items-center border border-yellow-400 bg-gray-200 text-4xl font-bold text-gray-800 mb-7">
            <div>
              <sub className="text-2xl text-red-500">$</sub>8
              <span className="text-lg text-gray-600">/Mo</span>
            </div>
          </div>
          <h4 className="text-2xl font-semibold text-gray-700 mb-4">
            16 Classes Per Months
          </h4>
          <div className="text-lg text-gray-500 mb-6">
            . 800+ Students Enrolled
          </div>
          <ul className="space-y-2 text-gray-600 mb-6">
          <li>. 1 Hours = US$ 8  </li>
            <li>. 1 Months * 10 = US$ 43</li>
            <li className="text-green-600 font-semibold">Offer </li>
            <li>. 5 Months * 40 = US$ 180</li>
          </ul>
          <div> 
            <a
              href="price.html"
              className="bg-red-500 text-white py-3 px-6 rounded-lg shadow hover:bg-red-600 transition duration-300"
            >
              Free Trial
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
