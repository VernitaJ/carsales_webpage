import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import Filters from "./Filters";

export default function Sidebar(props) {
  const [collapseShow, setCollapseShow] = React.useState(true);
  const router = useRouter();
  return (
    <Container>
      <ToggleButton
        className="cursor-pointer text-white opacity-50 md:hidden px-3 py-1 text-l leading-none bg-transparent rounded border border-solid border-transparent"
        type="button"
        onClick={() => setCollapseShow(!collapseShow)}
      >
        <i className="fas fa-bars"></i>
      </ToggleButton>
      {collapseShow ? (
        <Filters cars={props.cars} updateFilter={props.updateFilter} />
      ) : null}
    </Container>
  );
}

const ToggleButton = styled.button`
  display: hidden;
  @media (max-width: 900px) {
    display: inline-block;
  }
`;

const Container = styled.div`
  background-color: rgb(0, 0, 77);
  font-size: 14px;
  padding: 20px;
  left: 0;
  display: block;
  position: fixed;
  top: 100px;
  width: 20%;
  border-radius: 10px;
  color: white;
  overflow: hidden;
  padding-bottom: 40px;
  @media (max-width: 900px) {
    padding: 20px 10px;
    position: relative;
    width: 98%;
    top: 0;
    margin-bottom: 40px;
  }
`;
