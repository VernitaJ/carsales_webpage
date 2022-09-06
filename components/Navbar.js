import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 relative z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white sm:bg-white-100">
        <div className="container px-4 mx-auto flex flex-row items-center justify-between">
          <div className="w-full relative flex justify-between md:w-auto lg:static lg:block lg:justify-start">
            <Link href="/" passHref>
              <a>
                <Image
                  src="/logowhite.png"
                  alt="Logo"
                  width={320}
                  height={80}
                />
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent visible block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-darkBlue-900 fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link href="/">
                  <a className="lg:text-darkBlue-900 font-semibold lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xl uppercase ">
                    Home
                  </a>
                </Link>
              </li>

              <li className="flex items-center">
                <Link href="/about">
                  <a className="lg:text-darkBlue-900 font-semibold lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xl uppercase ">
                    About
                  </a>
                </Link>
              </li>

              <li className="flex items-center">
                <Link href="/contact">
                  <a className="lg:text-darkBlue-900 font-semibold lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xl uppercase ">
                    Contact
                  </a>
                </Link>
              </li>

              {/* <li className="flex items-center">
                <button
                  className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Login
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
