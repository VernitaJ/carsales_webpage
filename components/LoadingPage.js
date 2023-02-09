import React from "react";
import styled from "styled-components";
import Image from "next/image";

export const LoadingPage = () => {
  return <Page style={{ color: "darkblue" }}></Page>;
};

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
