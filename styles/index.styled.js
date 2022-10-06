import styled from "styled-components";

export const LinkContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  gap: 30px;
  p {
    color: black;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
    gap: 40px;
  }
  @media screen and (max-width: 560px) {
    gap: 20px;
  }
`;

export const LinkBox = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  word-break: break;
  background-color: rgb(255,255,255);
  width: 30%;
  margin-bottom: 10px;
  border: 1px solid darkblue;
  border-radius: 5px;
  z-index: 100;
  
  }
  p:nth-child(1) {
    transition: background-color 0.9s;
    margin-bottom: 10px;
  }
  h4 {
    font-size: 19px;
    line-height: 22px;
    font-weight: 600;
    color: rgb(0, 0, 60);
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    margin-right: auto;
    margin-left: auto;
    width: 90%;
  }
`;
