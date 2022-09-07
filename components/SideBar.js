import React from "react";
import { useRouter } from "next/router";
import styled from 'styled-components'

import Filters from "./Filters";

export default function Sidebar(props) {
  const [collapseShow, setCollapseShow] = React.useState(true);
  const router = useRouter();
  return (
    <Container>
      <button
        className="cursor-pointer text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
        type="button"
        onClick={() => setCollapseShow(!collapseShow)}
      >
        <i className="fas fa-bars"></i>
      </button>
      {collapseShow ? (
        <Filters cars={props.cars} updateFilter={props.updateFilter} />
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  background-color: rgb(0,0,77);
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
  @media (max-width: 800px) {
    position: relative;
    width: 90%;
    margin: 0;
    margin-bottom: 40px;
  }
`