import React from "react";
import Navbarrr from "../../components/Nav_bar/Nav_bar";
import Footer from "../../components/Footer/Footer";

export default function Packages() {
  const pricingPlans = [
    {
      price: 5,
      classesPerMonth: 8,
      studentsEnrolled: 300,
      offer: "Offer",
      details: [
        "1 Hour = US$ 5",
        "1 Month * 8 = US$ 40",
        "2 Months * 16 = US$ 70",
      ],
    },
    {
      price: 7,
      classesPerMonth: 9,
      studentsEnrolled: 500,
      offer: "Offer",
      details: [
        "1 Hour = US$ 7",
        "1 Month * 9 = US$ 42",
        "3 Months * 24 = US$ 105",
      ],
    },
    {
      price: 8,
      classesPerMonth: 16,
      studentsEnrolled: 800,
      offer: "Offer",
      details: [
        "1 Hour = US$ 8",
        "1 Month * 10 = US$ 43",
        "5 Months * 40 = US$ 180",
      ],
    },
  ];
  return (
    <>
      <Navbarrr />

      <div className="text-center mx-auto mt-14">
        <h3 className="text-5xl font-semibold text-gray-600">
          Our Plan <span className="text-red-600">&#10003;</span>
        </h3>
        <div className="inline-block w-24 md:w-32 h-1 bg-green-900 mt-4"></div>
      </div>

      <div className="grid grid-cols-12  gap-4 mx-5 my-32 font-semibold">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-gray-100 border border-yellow-400 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
          >
            <div className="mx-auto w-[110px] h-[110px] rounded-full text-center flex justify-center items-center border border-yellow-400 bg-gray-200 text-4xl font-bold text-gray-800 mb-7">
              <div>
                <sub className="text-3xl text-red-500">${plan.price}</sub>
                <span className="text-lg text-gray-600">/Mo</span>
              </div>
            </div>
            <h4 className="text-2xl font-semibold text-gray-700 mb-4">
              {plan.classesPerMonth} Classes Per Month
            </h4>
            <div className="text-lg text-gray-500 mb-6">
              . {plan.studentsEnrolled}+ Students Enrolled
            </div>
            <ul className="space-y-2 text-gray-600 mb-6">
              {plan.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
              <li className="text-green-600 font-semibold">{plan.offer}</li>
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
        ))}
      </div>

      <Footer />
    </>
  );
}
