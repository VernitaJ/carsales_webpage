import { useState, useEffect } from "react";
import classnames from "classnames";
import Select from "react-select";

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
  const [brand, setBrand] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [model, setModel] = useState([]);
  const [sortOrder, setSortOrder] = useState([]);
  const [sortOrders, setSortOrders] = useState([
    "Highest First",
    "Lowest First",
  ]);
  const [filteredCars, setFilteredCars] = useState([]);

  const applyFilter = (event) => {
    event.preventDefault();
    let result = cars;
    console.log("brand", brand);
    if (brand) {
      console.log("here");
      for (let i = 0; i < brand.length; i++) {
        result = result.filter((car) => car.brand == brand[i]);
      }
      console.log(result);
    }
    if (model) {
      for (let i = 0; i < model.length; i++) {
        result = result.filter((car) => car.model === model[i]);
      }
    }
    if (sortOrder) {
      if (sortOrder === "highestfirst") {
        result = result.sort((a, b) => b.price - a.price);
      }
      if (sortOrder === "lowestfirst") {
        result = result.sort((a, b) => a.price - b.price);
      }
    }
    console.log(result);
    setFilteredCars(result);
    props.updateFilter(result);
  };

  const handleClear = () => {
    setBrand("");
    setModel("");
  };
  //   const handleChange = (prop, value) => {
  //     this.setState({
  //       [prop]: value
  //     })
  //   }

  const handleBrandAdd = (value) => {
    setBrand((prevBrands) => [
      ...prevBrands,
      {
        value,
      },
    ]);
  };

  const handleFilterSetup = () => {
    const list = props.cars.map((car) => ({
      label: car.brand,
      value: car.brand,
    }));
    setBrandList(list);
  };

  useEffect(() => {
    handleFilterSetup();
  }, []);

  const containerClasses = classnames("container", "mb-1", styles.container);
  const formClasses = classnames("form-horizontal", styles.form);
  const { cars, updateFilter } = props;
  console.log("props", props.cars);

  return (
    <aside className="mt-2">
      <div className={containerClasses}>
        <h2 data-cy="cars-count">{`${cars.length} private cars for sale`}</h2>
        <form
          onSubmit={() => setTimeout(() => applyFilter(), 0)}
          className={formClasses}
          noValidate
        >
          <p className="mb-1">
            Refine your results
            <button
              data-cy="clear-button"
              className="ml-1 btn btn-sm"
              type="button"
              onClick={() => {
                handleClear();
              }}
            >
              Clear
            </button>
          </p>
          <div className="columns text-center">
            <div className="column col-4 col-xs-12">
              <div className="form-group">
                <div className="col-3 col-sm-12">
                  <label className="form-label" htmlFor="price-from">
                    Price from
                  </label>
                </div>
                <div className="col-9 col-sm-12">
                  <Select
                    className="dropdown"
                    placeholder="Select Option"
                    value={props.cars.filter((obj) =>
                      brand.includes(obj.value)
                    )} // set selected values
                    options={brandList} // set list of the data
                    onChange={(event) => 
                      setBrand((prevBrands) => [
                        ...prevBrands,
                        {
                          value: event.value,
                          label: event.label,
                        },
                      ])
                    } // assign onChange function
                    isMulti
                    isClearable
                  />
                </div>
                <select
                  className="form-select"
                  id="model"
                  multiple={true}
                  value={model}
                  onSelect={(event) =>
                    setBrand((prevBrands) => [
                      ...prevBrands,
                      event.target.value,
                    ])
                  }
                >
                  <option value="">Choose...</option>
                  {props.cars.map((car) => (
                    <option key={car.id} value={car.brand.toLowerCase()}>
                      {car.brand}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="column col-4 col-xs-12">
              <div className="form-group">
                <div className="col-3 col-sm-12">
                  <label className="form-label" htmlFor="model">
                    Model
                  </label>
                </div>
                <div className="col-9 col-sm-12">
                  <select
                    className="form-select"
                    id="model"
                    multiple={true}
                    value={model}
                    onSelect={(event) =>
                      setModel((prevModels) => [
                        ...prevModels,
                        event.target.value,
                      ])
                    }
                  >
                    <option value="">Choose...</option>
                    {props.cars.map((car) => (
                      <option key={car.id} value={car.model.toLowerCase()}>
                        {car.model}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="column col-4 col-xs-12">
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
                      <option value={getSortOrderValue(order)}>{order}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn b" onClick={applyFilter}>
            Apply filter
          </button>
        </form>
      </div>
    </aside>
  );
};

export default Filter;
