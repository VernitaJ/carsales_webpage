import { useState, useEffect, useMemo } from "react";
import Select from "react-select";
import Multiselect from "multiselect-react-dropdown";
import styled from "styled-components";

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
    if (brand.length > 0) {
      result = result.filter((car) => brand.includes(car.brand));
      console.log("result", result);
    }
    if (model.length > 0) {
      result = result.filter((car) => model.includes(car.model));
    }
    if (colour.length > 0) {
      result = result.filter((car) => colour.includes(car.colour));
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
    setColour([]);
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
      const colours = filteredCars.map((car) => ({
        label: car.colour,
        value: car.colour,
      }));
      setBrandList(brands.filter((v, i, a) => a.indexOf(v) === i));
      setModelList(models.filter((v, i, a) => a.indexOf(v) === i));
      setColourList([
        ...new Map(colours.map((item) => [item["value"], item])).values(),
      ]);
    };
    handleFilterSetup();
  }, [filteredCars]);

  const customStyles = useMemo(
    () => ({
      valueContainer: (provided, state) => ({
        ...provided,
        maxWidth: "100%",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        wrap: "nowrap",
        overflow: "hidden",
      }),
      input: (provided, state) => ({
        ...provided,
        minWidth: "20%",
        maxHeight: "15px",
        wrap: "nowrap",
      }),
    }),
    []
  );

  console.log(colourList);

  const { cars, updateFilter } = props;
  return (
    <div>
      <ClearButton
        data-cy="clear-button"
        type="button"
        onClick={() => {
          handleClear();
        }}
      >
        Reset
      </ClearButton>
      <Heading>Refine your results</Heading>

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

                <div>
                  <label className="form-label" htmlFor="price-from">
                    Colour
                  </label>
                  <SelectOption
                    value={colourList.filter((obj) =>
                      colour.includes(obj.value)
                    )}
                    options={colourList}
                    onChange={(e) =>
                      setColour(Array.isArray(e) ? e.map((x) => x.value) : [])
                    } // assign onChange function
                    styles={customStyles}
                    isMulti
                  />
                </div>
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
    </div>
  );
};

export default Filter;

const Heading = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin: 16px 3px;
`;

const SubmitButton = styled.button`
  width: fit-content;
  padding: 5px 15px;
  margin: 25px 3px 0;
  border-radius: 3px;
  background-color: rgba(20, 20, 230);
  color: white;
  font-weight: 500;
`;

const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
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
  color: rgb(199, 199, 199);
  font-size: 12px;
`;
