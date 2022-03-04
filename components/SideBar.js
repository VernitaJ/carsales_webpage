import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import NotificationDropdown from "./NotificationDropdown.js";
import UserDropdown from "./UserDropdown.js";
import Filters from './Filters'

export default function Sidebar(props) {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <div className="mt-20 pt-10 md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:bg-pink-500 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
            {/* Collapse header */}
            {/* Form */}
        <Filters cars={props.cars} updateFilter={props.updateFilter}/>
        </div>
      </div>
    </>
  );
}
