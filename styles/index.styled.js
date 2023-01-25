import styled from "styled-components";

export const LinkContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  max-width: 80%;
  margin: 0 auto;
  gap: 60px;
  p {
    color: black;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 130px;
    max-width: 100%;
  }
  @media screen and (max-width: 560px) {
    gap: 20px;
  }
`;

export const LinkBox = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
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
  p:nth-child(3) {
    font-family: 'Apple Color Emoji', 'Segoe UI Emoji';;
    margin: 10px 30px;
    font-size: 20px;
    font-weight: 500;
    color: rgb(70, 70, 70);
    @media (max-width: 768px) {
      margin: 0;
      font-size: 17px;
    }
  }
  h4 {
    font-size: 22px;
    line-height: 22px;
    font-weight: 600;
    color: rgb(40, 40, 90);
    padding: 0;
    margin: 10px;
  }
  @media screen and (max-width: 768px) {
    margin-right: auto;
    margin-left: auto;
    width: 90%;
  }
`;
