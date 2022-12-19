import { useState, useEffect, useMemo } from "react";
import Select from "react-select";
import Multiselect from "multiselect-react-dropdown";
import styled from "styled-components";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

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
  const [minPriceList, setMinPriceList] = useState([
    0, 50000, 100000, 200000, 400000,
  ]);
  const [maxPriceList, setMaxPriceList] = useState([
    200000, 400000, 500000, 700000, 1000000,
  ]);
  const [brand, setBrand] = useState([]);
  const [model, setModel] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000000);
  const [sortOrder, setSortOrder] = useState();
  const [sortOrders, setSortOrders] = useState([
    "Highest First",
    "Lowest First",
  ]);
  const [filteredCars, setFilteredCars] = useState(props.cars);
  const horizontalLabels = {
    0: "2mil",
    50: "1mil",
    100: "100k",
  };

  const applyFilter = (event) => {
    event.preventDefault();
    let result = cars;
    if (brand.length > 0) {
      result = result.filter((car) => brand.includes(car.brand));
    }
    if (model.length > 0) {
      result = result.filter((car) => model.includes(car.model));
    }

    if (minPrice >= 0) {
      result = result.filter((car) => {
        return car.price >= minPrice;
      });
    }

    if (maxPrice < 2000000) {
      result = result.filter((car) => {
        return car.price <= maxPrice;
      });
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
    setFilteredCars(result);
    props.updateFilter(result);
  };

  const handleClear = () => {
    props.updateFilter(props.cars);
    setFilteredCars(props.cars);
    setBrand([]);
    setModel([]);
    setMinPrice(0);
    setMaxPrice(2000000);
  };

  useEffect(() => {
    const handleFilterSetup = () => {
      const brands = filteredCars.map((car) => ({
        label: car.brand,
        value: car.brand,
      }));
      const models = filteredCars.map((car) => ({
        label: car.model,
        value: car.model,
      }));

      setBrandList(brands.filter((v, i, a) => a.indexOf(v) === i));
      // setModelList(models.filter((v, i, a) => a.indexOf(v) === i));

      setBrandList([
        ...new Map(brands.map((item) => [item["value"], item])).values(),
      ]);

      setModelList([
        ...new Map(models.map((item) => [item["value"], item])).values(),
      ]);
    };
    handleFilterSetup();
  }, [filteredCars]);

  const { cars, updateFilter } = props;

  return (
    <Container>
      <Heading>
        <p>Refine your results</p>
        <ClearButton
          data-cy="clear-button"
          type="button"
          onClick={() => {
            handleClear();
          }}
        >
          Reset
        </ClearButton>
      </Heading>

      <div>
        <form onSubmit={() => setTimeout(() => applyFilter(), 0)} noValidate>
          <div className="columns">
            <div className="column col-4 col-xs-12">
              <FilterOptions>
                <div>
                  <label htmlFor="car-brand">Brand</label>
                  <SelectOption
                    value={brandList.filter((obj) => brand.includes(obj.value))}
                    style={{ color: "blue" }}
                    options={brandList} // set list of the data
                    onChange={(e) =>
                      setBrand(Array.isArray(e) ? e.map((x) => x.value) : [])
                    } // assign onChange function
                    isMulti
                  />
                </div>
                {/* <Multiselect
                  options={brandList} // Options to display in the dropdown
                  selectedValues={brand} // Preselected value to persist in dropdown
                  onSelect={(e) =>
                    setBrand(Array.isArray(e) ? e.map((x) => x.value) : [])
                  } // Function will trigger on select event
                  onRemove={(e) =>
                    setBrand(Array.isArray(e) ? e.map((x) => !x.value) : [])
                  } // Function will trigger on remove event
                  displayValue="brand" // Property name to display in the dropdown options
                /> */}
                <div>
                  <label className="form-label" htmlFor="price-from">
                    Model
                  </label>
                  <SelectOption
                    value={modelList.filter((obj) => model.includes(obj.value))}
                    options={modelList}
                    onChange={(e) =>
                      setModel(Array.isArray(e) ? e.map((x) => x.value) : [])
                    } // assign onChange function
                    isMulti
                  />
                </div>

                {/* <div className="slider">
                  <span>Max Price: </span>
                  <span style={{ marginLeft: "10px" }}>
                    {new Intl.NumberFormat().format(maxPrice)}
                  </span>
                  <Slidy
                    min={100000}
                    max={2000000}
                    step={100000}
                    onChange={(e) => setMaxPrice(e)}
                    value={maxPrice}
                    tooltip={false}
                    labels={horizontalLabels}
                  />
                </div> */}
                <div>
                  <label htmlFor="price-from">Price</label>
                  <PriceRange>
                    <input
                      defaultValue={minPrice}
                      placeholder="Min Price"
                      onChange={(e) => setMinPrice(e.target.value)}
                    ></input>
                    <input
                      defaultValue={maxPrice}
                      placeholder="Max Price"
                      onChange={(e) => setMaxPrice(e.target.value)}
                    ></input>
                  </PriceRange>
                </div>
                {/* <Prices>
                    <SelectOption
                      value={minPrice}
                      options={minPriceList}
                      onChange={(e) =>
                        setMinPrice(
                          Array.isArray(e) ? e.map((x) => x.value) : []
                        )
                      }
                    />
                    <SelectOption
                      value={maxPrice}
                      options={maxPriceList}
                      onChange={(e) =>
                        setMinPrice(
                          Array.isArray(e) ? e.map((x) => x.value) : []
                        )
                      }
                    />
                  </Prices> */}
                <SubmitButton type="submit" onClick={applyFilter}>
                  Update
                </SubmitButton>
              </FilterOptions>
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
        </form>
      </div>
    </Container>
  );
};

export default Filter;

const PriceRange = styled.div`
  input {
    width: 100%;
    color: black;
    padding: 5px;
  }
  width: 100%;
  display: flex;
  gap: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 768px) {
    margin: 0 5% 5%;
  }
`;

const Heading = styled.div`
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin: 20px 0;
`;

const Slidy = styled(Slider)`
  &.rangeslider-horizontal .rangeslider__fill {
    margin-bottom: 20px;
    background-color: #ff5f1f !important;
  }
  &.rangeslider-horizontal .rangeslider__handle {
    background-color: #ff5f1f !important;
    .rangeslider__handle-label {
      background: #ff5f1f !important;
    }
  }
  ul {
    display: flex !important;
    justify-content: space-between !important;
  }
  li {
    position: unset !important;
  }
  ul {
    margin-left: 20px !important;
    display: flex !important;
    justify-content: space-between !important;
  }
`;

const SubmitButton = styled.button`
  width: fit-content;
  padding: 5px 15px;
  margin: 25px 3px 0;
  border-radius: 3px;
  background-color: rgb(190, 190, 255);
  color: rgb(0, 0, 40);
  font-weight: 600;
`;

const Prices = styled.div`
  display: flex !important;
  color: black;
`;

const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 40px;
  label {
    margin-top: 20px;
  }
`;

const SelectOption = styled(Select)`
  color: rgba(0, 0, 77);
  max-width: 100%;
  padding: 0px;
`;

const ClearButton = styled.button`
  float: right;
  margin-right: 10px;
  font-size: 12px;
  color: rgb(199, 199, 199);
  font-size: 13px;
`;
