"use client";
import React, { useState } from "react";
import { adminNavOptions, navOptions, styles } from "../utils";
import CommenModal from "../CommenModal";
import { usePathname, useRouter } from "next/navigation";

function NavItem({ isModalView = false, router, setShowNavModal }) {
  return (
    <>
      <div
        className={`item
        -center justify-between  w-full md:flex md:w-auto ${
          isModalView ? "" : "hidden"
        }`}
        id="nav-items"
      >
        <ul
          className={`flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ${
            isModalView ? "" : "border border-gray-100"
          }`}
        >
          {navOptions.map((item) => (
            <li
              className="cursor-pointer  block py-2 pl-3 pr-4 text-gray-700 rounded md:p-0 hover:text-blue-500"
              key={item.id}
              onClick={() => {
                router.push(item.path);
                setShowNavModal(false);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const NavBar = () => {
  const [showNavModal, setShowNavModal] = useState(false);
  const router = useRouter();
  return (
    <>
      <nav className="bg-opacity-60 backdrop-blur-lg bg-white fixed w-full z-20 top-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <div className="flex">
            <img
              src="/assests/gover.png"
              className="mr-2 h-auto w-6 ml-4 md:ml-0 "
              alt="Your Image"
            />

            <span className="flex justify-center items-center">උඩදුම්බර</span>
          </div>

          <NavItem router={router} setShowNavModal={setShowNavModal} />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="justify-center p-2 text-sm  text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => {
              setShowNavModal((prevState) => !prevState);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <CommenModal
        showModalTitle={false}
        mainContent={
          <NavItem
            isModalView={true}
            router={router}
            setShowNavModal={setShowNavModal}
          />
        }
        show={showNavModal}
        setShow={setShowNavModal}
      />
    </>
  );
};

export default NavBar;
