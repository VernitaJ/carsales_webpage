import styled from "styled-components";

export const LinkContainer = styled.div`
  position: relative;
  margin-top: 100px;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  gap: 100px;
  p {
    color: black;
  }
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 40px;
  }
  @media screen and (max-width: 560px) {
    flex-wrap: wrap;
    gap: 20px;
  }
  margin: 20px;
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
  min-width: 300px;
  max-width: 420px;
  margin-bottom: 10px;
  border: 1px solid darkblue;
  border-radius: 5px;
  cursor: pointer;
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
  :hover {
    box-shadow: 0 4px 8px 0 rgba(120, 120, 255, 0.8),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: box-shadow 1s;
    color: black;
    border: 1px solid white;
    p:nth-child(1) {
      background-color: ${(props) => props.$color};
    }
    h4 {
      // text-decoration: underline;
      font-size: 20px;
      color: rgb(50,50,50);
    }
  }
`;
