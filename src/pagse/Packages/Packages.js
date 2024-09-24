import React from "react";
import Navbarrr from "../../components/navvvbar/Navbarrr";
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
              <sub className="text-2xl text-red-500">$</sub>32
              <span className="text-lg text-gray-600">/Mo</span>
            </div>
          </div>
          <h4 className="text-2xl font-semibold text-gray-700 mb-4">
            2 Classes Per Week
          </h4>
          <div className="text-lg text-gray-500 mb-6">
            . 2,000+ Students Enrolled
          </div>
          <ul className="space-y-2 text-gray-600 mb-6">
            <li>. 8 Classes per Month</li>
            <li>. 6 Months = US$ 178</li>
            <li className="text-green-600 font-semibold">Save 7%</li>
            <li>. 12 Months = US$ 345</li>
            <li className="text-green-600 font-semibold">Save 10%</li>
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
              <sub className="text-2xl text-red-500">$</sub>48
              <span className="text-lg text-gray-600">/Mo</span>
            </div>
          </div>
          <h4 className="text-2xl font-semibold text-gray-700 mb-4">
            3 Classes Per Week
          </h4>
          <div className="text-lg text-gray-500 mb-6">
            . 3,000+ Students Enrolled
          </div>
          <ul className="space-y-2 text-gray-600 mb-6">
            <li>. 8 Classes per Month</li>
            <li>. 6 Months = US$ 178</li>
            <li className="text-green-600 font-semibold">Save 7%</li>
            <li>. 12 Months = US$ 345</li>
            <li className="text-green-600 font-semibold">Save 10%</li>
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
              <sub className="text-2xl text-red-500">$</sub>60
              <span className="text-lg text-gray-600">/Mo</span>
            </div>
          </div>
          <h4 className="text-2xl font-semibold text-gray-700 mb-4">
            4 Classes Per Week
          </h4>
          <div className="text-lg text-gray-500 mb-6">
            . 5,000+ Students Enrolled
          </div>
          <ul className="space-y-2 text-gray-600 mb-6">
            <li>. 8 Classes per Month</li>
            <li>. 6 Months = US$ 178</li>
            <li className="text-green-600 font-semibold">Save 7%</li>
            <li>. 12 Months = US$ 345</li>
            <li className="text-green-600 font-semibold">Save 10%</li>
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
