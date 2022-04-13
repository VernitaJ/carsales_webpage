import React from "react";
import { useRouter } from "next/router";

import Filters from "./Filters";

export default function Sidebar(props) {
  const [collapseShow, setCollapseShow] = React.useState(true);
  const router = useRouter();
  return (
    <>
      <div className="bg-white md:mt-20 pt-10 md:left-0 md:block md:fixed md:top-4 md:bottom-0 bg-blue-500 md:rounded md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-blue-500 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        {/* Toggler */}
        <button
          className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          onClick={() => setCollapseShow(!collapseShow)}
        >
          <i className="fas fa-bars"></i>
        </button>
        {collapseShow ? (
          <Filters cars={props.cars} updateFilter={props.updateFilter} />
        ) : null}
      </div>
    </>
  );
}
