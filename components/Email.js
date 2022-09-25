import { useRef, useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import styled from "styled-components";

const Email = (car, removeCar) => {
  const [sent, setSent] = useState(false);
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
      {sent ? (
        <span>
          Email sent! One of our employees will get in touch within a few hours.
        </span>
      ) : (
        <form ref={form} onSubmit={onSubmit}>
          <InputBlock>
            <label>Your name</label>
            <input type="text" name="from_name" placeholder="from name" />
          </InputBlock>
          <InputBlock>
            <label>Contact No</label>
            <input type="text" name="from_contact" placeholder="your contact" />
          </InputBlock>
          <InputBlock>
            <label>Message</label>
            <input
              type="text"
              name="message"
              placeholder="Question or Comment"
            />
          </InputBlock>
          <InputBlock>
            <label>Email address</label>
            <input
              type="text"
              name="reply_to"
              placeholder="your email address"
            />
          </InputBlock>
          <button className="email-submit" type="submit">
            Submit
          </button>
        </form>
      )}
    </Container>
  );
};

export default Email;

const InputBlock = styled.div`
  label {
    color: white;
  }
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 10px;
`;

const Container = styled.div`
  @media (max-width: 540px) {
    max-width: 350px;
    margin-left: 0;
    padding: 0;
  }
  max-width: 450px;
  padding: 0 25px;
  border-radius: 15px;
  margin-bottom: 10%;
`;
