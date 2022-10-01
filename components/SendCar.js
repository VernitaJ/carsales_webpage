import { useEffect, useRef, useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import styled from "styled-components";

const SendCar = (car, removeCar) => {
  const [sent, setSent] = useState(false);
  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_ID,
        process.env.NEXT_PUBLIC_CAR_EMAIL_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_USER
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSent(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  useEffect(() => {
    sent
      ? (setTimeout = () => {
          setShowPopUp(true), 3000;
        })
      : null;
  }, [sent]);

  return (
    <Container>
      {sent ? (
        <SentMessage>
          Request sent! One of our employees will get in touch within a few
          hours.
        </SentMessage>
      ) : (
        <Form ref={form} onSubmit={onSubmit}>
          <Heading>Car Detail</Heading>
          <InputBlock>
            <div>
              <label>Car Brand</label>
              <input
                type="text"
                name="brand"
                placeholder="i.e Audi, BMW, Toyota"
              />
            </div>
            <div>
              <label>Model</label>
              <input
                type="text"
                name="model"
                placeholder="i.e A4, X4, Corolla"
              />
            </div>
            <div>
              <label>Year</label>
              <input type="text" name="year" placeholder="" />
            </div>
            <div>
              <label>Mileage</label>
              <input type="text" name="mileage" placeholder="In kilometers" />
            </div>
            <div>
              <label>Fuel Type</label>
              <select name="fuel" id="fuel">
                <option value="0">Select...</option>
                <option value="Diesel">Diesel</option>
                <option value="Petrol">Petrol</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Electric">Electric</option>
              </select>
            </div>
            <div>
              <label>Transmission</label>
              <select name="gear_type" id="gear_type">
                <option value="0">Select...</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
          </InputBlock>

          <Heading>Contact Detail</Heading>
          <InputBlock>
            <div>
              <label>Name</label>
              <input type="text" name="from_name" placeholder="name" />
            </div>
            <div>
              <label>Contact No</label>
              <input type="mobile" name="from_contact" placeholder="mobile" />
            </div>
            <div>
              <label>Email address</label>
              <input type="email" name="reply_to" placeholder="email address" />
            </div>
          </InputBlock>

          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Container>
  );
};

export default SendCar;

const SentMessage = styled.p`
  display: inline-block;
  transition: display 2s;
  color: white;
  width: 60%;
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px;
  label {
    margin-left: 10px;
    border: none;
  }
  div {
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  margin: 15px;
  color: white;
  input {
    padding: 5px;
    width: 250px;
    margin: 5px;
    background-color: transparent;
    border: 1px solid white;
    focus-outline: none !important;
  }
  select {
    width: 255px;
    background-color: transparent;
    border-radius: 2px;
    padding: 5px;
    option {
      background-color: rgb(0, 0, 40);
      padding: 10px;
      margin: 10px;
      :hover {
        color: red;
      }
    }
  }
  option {
    background-color: rgb(0, 0, 40);
    padding: 10px;
    margin: 10px;
    :hover {
      color: red;
    }
  }
`;

const Heading = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: rgba(255, 255, 255);
  margin: 20px 0 0 15px;
`;

const Form = styled.form`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${Heading}:nth-child(4) {
    margin-top: 30px;
  }
`;

const Container = styled.div`
  @media (max-width: 540px) {
    width: 350px;
    margin-left: auto;
  }
  margin-left: 150px;
  margin-top: 20px;
  margin-bottom: 10%;
`;

const Button = styled.button`
  background-color: green;
  color: white;
  font-weight: bold;
  font-size: 16px;
  width: fit-content;
  padding: 10px 30px;
  margin: 30px 10px;
  border-radius: 5px;
`;
