import "./Nav_bat.css";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbarrr() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-3 font-medium md:flex justify-around text-gray-500 p-3">
        <div className="flex items-center">
          <i className="pe-4 fa-solid fa-phone  "></i>

          <p>Let’s Talk +2 01026130670</p>
        </div>

        <div className="flex items-center">
          <i className="pe-4 fa-solid fa-envelope "></i>
          <p className=" text-center">rtelacademy@gmail.com</p>
        </div>

        <div className="flex items-center">
          <i className="pe-4 fa-solid fa-location-pin  "></i>
          <p className="text-center  ">Egypt Cairo</p>
        </div>
      </div>

      <nav className=" bg-gray-200 flex-no-wrap relative flex w-full items-center justify-between  py-2 shadow-dark-mild   lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* Hamburger button for mobile view */}
          {/* Logo */}
          <Link
            className="text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400  "
            to="/"
          >
            <img
              className="lg:w-[200px]"
              src="https://themazine.com/html/alquran/assets/images/logo.svg"
              style={{ height: 30 }}
              alt="TE Logo"
              loading="lazy"
            />
          </Link>
          <button
            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-900 lg:hidden"
            type="button"
            onClick={toggleNavbar} // Use toggle function
            aria-controls="navbarSupportedContent1"
            aria-expanded={isOpen} // Bind with state
            aria-label="Toggle navigation"
          >
            {/* Hamburger icon */}
            <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          {/* Collapsible navigation container */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full lg:flex lg:basis-auto`}
            id="navbarSupportedContent1"
          >
            {/* Left navigation links */}
            <ul className="list-style-none   flex flex-col ps-0 lg:flex-row lg:ms-96 ">
              <li className="mb-4 mt-5 lg:mt-0 lg:mb-0 lg:pe-2">
                <NavLink
                  className="ccc text-xl font-semibold text-gray-500 transition duration-200   hover:ease-in-out  motion-reduce:transition-none   lg:px-2"
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li className="mb-4 lg:mb-0 lg:pe-2">
                <NavLink
                  className="ccc text-xl font-semibold text-gray-500  transition duration-200  lg:px-2"
                  to="/Packages"
                >
                  Packages
                </NavLink>
              </li>

              <li className="mb-4 lg:mb-0 lg:pe-2">
                <NavLink
                  className="ccc text-xl font-semibold text-gray-500  transition duration-200  lg:px-2"
                  to="/Contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="mb-4 lg:mb-2 lg:pe-2">
                <NavLink
                  className="ccc text-xl font-semibold text-gray-500 transition duration-200  lg:px-2"
                  to="/Abute"
                >
                  About
                </NavLink>
              </li>

              <li className=" ps-[200px] sm:ps-[500px] md:ps-[570px] lg:ps-[350px]">
                <div>
                  <Link to="/Abute">
                    <FontAwesomeIcon
                      className="w-5 h-5 hover:scale-125 transition duration-300 rounded-full bg-gray-300  p-2 border-solid border-2 border-gray-400 text-gray-700"
                      icon={faUser}
                    />
                  </Link>

                  <FontAwesomeIcon
                    className="w-6 h-10 ps-3 hover:scale-125 transition duration-300 "
                    icon={faMagnifyingGlass}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
