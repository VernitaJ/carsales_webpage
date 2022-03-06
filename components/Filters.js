import { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from 'react-select/animated';

import styles from "../styles/Filters.module.css";

function getSortOrderValue(sortOrder) {
  return sortOrder.replace(" ", "").toLowerCase();
}

function getPropertiesDisplayText(count) {
  if (count > 1 || count === 0) {
    return "cars";
  }
  return "car";
}

const Filter = (props) => {
  const [brandList, setBrandList] = useState([]);
  const [modelList, setModelList] = useState([]);
  const [colourList, setColourList] = useState([]);
  const [brand, setBrand] = useState([]);
  const [model, setModel] = useState([]);
  const [colour, setColour] = useState([]);
  const [sortOrder, setSortOrder] = useState();
  const [sortOrders, setSortOrders] = useState([
    "Highest First",
    "Lowest First",
  ]);
  const [filteredCars, setFilteredCars] = useState(props.cars);

  const applyFilter = (event) => {
    event.preventDefault();
    let result = cars;
    console.log("brand", brand);
    if (brand.length > 0) {
      result = result.filter((car) => brand.includes(car.brand))
      console.log("here");
      // for (let i = 0; i < brand.length; i++) {
      //   console.log(brand[i]);
      //   result = result.filter((car) => car.brand == brand[i].value);
      // }
      console.log("result", result);
    }
    if (model.length > 0) {
      result = result.filter((car) => model.includes(car.model))
    }
    if (colour.length > 0) {
      result = result.filter((car) => colour.includes(car.colour))
    }
    if (sortOrder) {
      if (sortOrder === "highestfirst") {
        console.log("sortOder", sortOrder);
        result = result.sort((a, b) => b.price - a.price);
      }
      if (sortOrder === "lowestfirst") {
        console.log("sortOder", sortOrder);
        result = result.sort((a, b) => a.price - b.price);
      }
    }
    console.log(result);
    setFilteredCars(result);
    props.updateFilter(result);
  };

  const handleClear = () => {
    props.updateFilter(props.cars);
    setFilteredCars(props.cars);
    setBrand([]);
    setModel([]);
    setColour([]);
  };


  const handleFilterSetup = () => {
    const brands = filteredCars.map((car) => ({
      label: car.brand,
      value: car.brand,
    }));
    const models = filteredCars.map((car) => ({
      label: car.model,
      value: car.model,
    }));
    const colours = filteredCars.map((car) => ({
      label: car.colour,
      value: car.colour,
    }));
    setBrandList(brands);
    setModelList(models);
    setColourList(colours);
  };

  useEffect(() => {
    handleFilterSetup();
  }, [filteredCars]);

  const { cars, updateFilter } = props;
console.log("brand", brand, "model", model, "colour", colour);
  return (
    <div className="mt-2" display="flex">
        <button
              data-cy="clear-button"
              className="mr-0 ml-40 text-blac k"
              type="button"
              onClick={() => {
                handleClear();
              }}
            >
              Clear
            </button>
      <p className="m-4 text-xl text-white">
            Refine your results
          </p>
          
      <div className="">
        <form
          onSubmit={() => setTimeout(() => applyFilter(), 0)}
          className=""
          noValidate
          style={{ color: "black" }}
        >
          
          <div className="columns text-center">
            <div className="column col-4 col-xs-12">
              <div className="form-group flex md:inline-block">
                <div className="col-9 col-sm-12 p-4 md:p-1">
                <label className="text-black font-semibold" htmlFor="car-brand">
                    Brand
                  </label>
                  <Select
                    className="dropdown"
                    placeholder="Select Option"
                    value={brandList.filter((obj) =>
                      brand.includes(obj.value)
                    )}
                    options={brandList} // set list of the data
                    onChange={(e) =>
                      setBrand(Array.isArray(e) ? e.map((x) => x.value) : [])
                    } // assign onChange function
                    isMulti
                    isClearable
                  />
                </div>

                <div className="col-9 col-sm-12 p-4 md:p-1">
                <label className="form-label" htmlFor="price-from">
                    Models
                  </label>
                  <Select
                    className="dropdown"
                    placeholder="Select Option"
                    value={modelList.filter((obj) =>
                      model.includes(obj.value)
                    )}
                    options={modelList}
                    onChange={(e) =>
                      setModel(Array.isArray(e) ? e.map((x) => x.value) : [])
                    }  // assign onChange function
                    isMulti
                    isClearable
                  />
                </div>
                
                <div className="col-9 col-sm-12 p-4 md:p-1">
                <label className="form-label" htmlFor="price-from">
                    Colours
                  </label>
                  <Select
                    className="dropdown"
                    placeholder="Select Option"
                    value={colourList.filter((obj) =>
                      colour.includes(obj.value)
                    )}
                    options={colourList}
                    onChange={(e) =>
                      setColour(Array.isArray(e) ? e.map((x) => x.value) : [])
                    }  // assign onChange function
                    isMulti
                    isClearable
                  />
                </div>
              </div>
              {/* <div className="column col-4 col-xs-12">
                <div className="form-group">
                  <div className="col-3 col-sm-12">
                    <label className="form-label" htmlFor="sortorder">
                      Sort Order
                    </label>
                  </div>
                  <div className="col-9 col-sm-12">
                    <select
                      className="form-select"
                      id="sortorder"
                      value={sortOrder}
                      multiple={true}
                      onChange={(event) => setSortOrder(event.target.value)}
                    >
                      <option value="">Choose...</option>
                      {sortOrders.map((order) => (
                        <option value={getSortOrderValue(order)}>
                          {order}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <button type="submit" className="btn b" onClick={applyFilter}>
            Apply filter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
