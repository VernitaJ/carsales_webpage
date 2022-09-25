import styled from "styled-components";

export const LinkContainer = styled.div`
  position: relative;
  margin-top: 100px;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  gap: 30px;
  p {
    color: black;
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
  background-color: white;
  min-width: 250px;
  max-width: 350px;
  margin-bottom: 10px;
  border: 1px solid darkblue;
  border-radius: 5px;
  cursor: pointer;
  z-index: 100;
  p:nth-child(1) {
    transition: background-color 0.9s;
  }
  h4 {
    font-size: 19px;
    font-weight: 600;
    color: rgb(0, 0, 60);
    padding: ;
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
  }
`;
