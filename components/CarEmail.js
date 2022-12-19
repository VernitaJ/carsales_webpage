import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { useRouter } from "next/router";

const CarEmail = ({ removeCar }) => {
  const [sent, setSent] = useState(false);
  const car = JSON.parse(localStorage.getItem("current_car"));
  const id = car ? JSON.stringify(car) : null;
  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
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
    localStorage.clear();
  };

  return (
    <Container>
      <TopSection>
        <Heading>
          We&apos;ll contact you soon about this{" "}
          <b>
            {car.brand} {car.model}
          </b>
        </Heading>
      </TopSection>
      <CloseButton onClick={() => removeCar()}>X</CloseButton>
      <form ref={form} onSubmit={onSubmit}>
        <InputBlock>
          <label>Your name</label>
          <input type="text" name="from_name" placeholder="from name" />
        </InputBlock>
        <InputBlock>
          <label>Contact No</label>
          <input type="text" name="from_contact" placeholder="your contact" />
        </InputBlock>
        <InputBlock style={{ display: "none" }}>
          <label>Message</label>
          <input
            defaultValue={id}
            type="text"
            name="message"
            placeholder="Question or Comment"
          />
        </InputBlock>
        <InputBlock>
          <label>Email address</label>
          <input type="text" name="reply_to" placeholder="your email address" />
        </InputBlock>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </Container>
  );
};

export default CarEmail;

const TopSection = styled.div`
  font-weight: bold;
`;

const SubmitButton = styled.button`
  background-color: green;
  float: right;
  margin-top: 15px;
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
`;

const Heading = styled.div`
  font-weight: 500;
  margin-bottom: 20px;
`;

const InputBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  label {
    font-size: 13px;
  }
  margin-bottom: 10px;
  input {
    padding: 2px;
    font-size: 13px;
    color: black;
  }
`;

const Container = styled.div`
  font-size: 15px;
  @media (max-width: 540px) {
    width: 350px;
  }
  max-width: 500px;
  border-radius: 15px;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  font-weight: bold;
`;
