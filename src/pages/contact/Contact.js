/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Navbarrr from "../../components/Nav_bar/Nav_bar";
import Footer from "../../components/Footer/Footer";
import "./contact.css";

export default function Contact() {
  return (
    <div>
      <Navbarrr />

      <div>
        <section className="page-add   ">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3">
                <div className="page-breadcrumb">
                  <h2 className="text-4xl font-semibold">
                    Contact us<span>.</span>
                  </h2>
             
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="contact-section ">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/3">
                <form action="#" className="contact-form space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="border p-4 rounded w-full"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="border p-4 rounded w-full"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="border p-4 rounded w-full"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="border p-4 rounded w-full"
                  />
                  <textarea
                    placeholder="Message"
                    className="border p-4 rounded w-full h-40"
                  />
                  <div className="text-right">
                    <button
                      type="button"
                      className="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-success-50/50 hover:text-success-600 focus:border-success-600 focus:bg-success-50/50 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 motion-reduce:transition-none dark:hover:bg-green-950 dark:focus:bg-green-950"
                      data-twe-ripple-init
                    >
                      Send message
                    </button>
                  </div>
                </form>
              </div>

              <div className="lg:w-1/3 lg:ml-12 mt-10 lg:mt-0">
                <div className="contact-widget space-y-6">
                  <div className="cw-item">
                    <h5 className="text-xl font-semibold">Location</h5>
                    <ul className="mt-2 text-gray-600">
                      <li>1525 Awesome Lane, </li>
                      <li>Egypt , Cairo</li>
                    </ul>
                  </div>
                  <div className="cw-item">
                    <h5 className="text-xl font-semibold">Phone</h5>
                    <ul className="mt-2 text-gray-600">
                 
                      <li>+2(01026130670)</li>
                    </ul>
                  </div>
                  <div className="cw-item">
                    <h5 className="text-xl font-semibold">E-mail</h5>
                    <ul className="mt-2 text-gray-600">
                      <li>rtelacademy@gmail.com</li>
                      <li>www.violetstore.com</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="map mt-16">
              <div className="w-full">
                <iframe
                  src="
                https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7230093.11190661!2d36.81692949009995!3d27.769146419269045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2z2YXYtdix!5e0!3m2!1sar!2seg!4v1727177343582!5m2!1sar!2seg
                  "
                  height={560}
                  className="w-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
