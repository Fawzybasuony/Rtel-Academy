import React from "react";
import Navbarrr from "../components/Nav_bar/Nav_bar";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Reting_Slider/Slider";

export default function Abute() {
  return (
    <>
      <Navbarrr />

      <div className="about-section mt-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Our <span className="text-red-600">History</span>
          </h2>
          <p className="text-lg font-semibold text-gray-500 mt-2">
            Over 6+ years of experience in teaching the Quran{" "}
          </p>
        </div>
        <section className="container mx-auto mt-12">
          <div className=" ">
            <div className="lg:mx-[100px] font-semibold text-gray-500 ">
              <p className="text-lg mb-4">
                <span className="text-red-600">We </span> take pride in over a
                decade of providing exceptional education in{" "}
                <span className="text-blue-600">Quran memorization</span> and
                teaching its sciences. Established in{" "}
                <span className="text-blue-600">[Year]</span>, our academy has
                grown to become a trusted name, known for its commitment to
                excellence and{" "}
                <span className="text-blue-600">student satisfaction</span>.
              </p>
              <p className="text-lg mb-6">
                Our journey began with a simple idea: to offer a{" "}
                <span className="text-blue-600">
                  comfortable and motivating environment
                </span>{" "}
                for <span className="text-blue-600">Quran memorization</span> to
                all ages. Over the years, we have expanded our programs,
                continually innovating to stay at the forefront of Quranic
                education and meet the evolving needs of our{" "}
                <span className="text-blue-600">students</span>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="col-span-1">
              <img
                className="img-fluid rounded-lg shadow-lg"
                src="https://themazine.com/html/alquran/assets/images/resource/welcome-1.jpg"
                alt="Fashion"
              />
            </div>

            <section className="h-screen">
              <div className="h-full">
                {/* Left column container with background*/}
                <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
                  <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                    <img
                      className="w-full"
                      src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                      alt=" "
                    />
                  </div>
                  {/* Right column container */}
                  <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                    <form>
                      {/*Sign in section*/}
                      <div className="flex flex-row items-center justify-center lg:justify-start">
                        <p className="mb-0 me-4 text-lg">Sign in with</p>
                        {/* Facebook */}
                        <button
                          type="button"
                          data-twe-ripple-init=""
                          data-twe-ripple-color="light"
                          className=" mx-1 inline-block h-9 w-9 rounded-full bg-primary fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        >
                          {/* Facebook */}
                          <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 320 512"
                            >
                              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                            </svg>
                          </span>
                        </button>
                        {/* X */}
                        <button
                          type="button"
                          data-twe-ripple-init=""
                          data-twe-ripple-color="light"
                          className=" mx-1 inline-block h-9 w-9 rounded-full bg-primary fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        >
                          {/* X */}
                          <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                          </span>
                        </button>
                        {/* Linkedin */}
                        <button
                          type="button"
                          data-twe-ripple-init=""
                          data-twe-ripple-color="light"
                          className=" mx-1 inline-block h-9 w-9 rounded-full bg-primary fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        >
                          {/* Linkedin */}
                          <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                        <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                          Or
                        </p>
                      </div>
                      {/* Email input */}
                      <div
                        className="relative mb-6"
                        data-twe-input-wrapper-init=""
                      >
                        <input
                          type="text"
                          className=" peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput2"
                          placeholder="Email address"
                        />
                        <label
                          htmlFor="exampleFormControlInput2"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                        >
                          Email address
                        </label>
                      </div>
                      {/* Password input */}
                      <div
                        className="relative mb-6"
                        data-twe-input-wrapper-init=""
                      >
                        <input
                          type="password"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput22"
                          placeholder="Password"
                        />
                        <label
                          htmlFor="exampleFormControlInput22"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                        >
                          Password
                        </label>
                      </div>
                      <div className="mb-6 flex items-center justify-between">
                        {/* Remember me checkbox */}
                        <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                          <input
                            className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                            type="checkbox"
                            defaultValue=""
                            id="exampleCheck2"
                          />
                          <label
                            className="inline-block ps-[0.15rem] hover:cursor-pointer"
                            htmlFor="exampleCheck2"
                          >
                            Remember me
                          </label>
                        </div>
                        {/*Forgot password link*/}
                        <a href="#!">Forgot password?</a>
                      </div>
                      {/* Login button */}
                      <div className="text-center lg:text-left">
                        <button
                          type="button"
                          className="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                          data-twe-ripple-init=""
                          data-twe-ripple-color="light"
                        >
                          Login
                        </button>
                        {/* Register link */}
                        <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                          Don't have an account?
                          <a
                            href="#!"
                            className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                          >
                            Register
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>

      <Slider />
      <Footer />
    </>
  );
}
