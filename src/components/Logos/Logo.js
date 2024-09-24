import React from "react";
import "./logo.css";

export default function Logo() {
  return (
    <>
      <section className="features-section my-32 py-12 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="single-feature text-center p-6 bg-white shadow-xl rounded-lg transform transition duration-00 hover:scale-105 hover:shadow-2xl">
              <img
                src="https://themazine.com/html/alquran/assets/images/icons/service-3.svg"
                alt="Free Shipping"
                className="mx-auto w-16 mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Expert Quran Tutor
              </h4>
              <p className="text-gray-600">
                All the classes of online Quran teaching are conducted by well
                qualified Islamic scholars
              </p>
            </div>

            {/* Card 2 */}
            <div className="single-feature text-center p-6 bg-white shadow-xl rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="https://themazine.com/html/alquran/assets/images/icons/service-1.svg"
                alt="Money Back"
                className="mx-auto w-16 mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                We Value Our Students
              </h4>
              <p className="text-gray-600">
                All the classes of online Quran teaching are conducted by well
                qualified Islamic scholars
              </p>
            </div>

            {/* Card 3 */}
            <div className="single-feature text-center p-6 bg-white shadow-xl rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="https://themazine.com/html/alquran/assets/images/icons/service-4.svg"
                alt="Online Support"
                className="mx-auto w-16 mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Male Female Teachers
              </h4>
              <p className="text-gray-600">
                All the classes of online Quran teaching are conducted by well
                qualified Islamic scholars
              </p>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
}
