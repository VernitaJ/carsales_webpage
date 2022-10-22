import { useRef, useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import styled from "styled-components";

const CarInterestEmail = ({ car }) => {
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

  const text = `I'm interested to know more about the ${car.year} ${car.brand} ${car.model} from your website. Please contact me on my mobile with more information.`;

  return (
    <Container>
      {sent ? (
        <span>
          Email sent! One of our employees will get in touch within a few hours.
        </span>
      ) : (
        <Form ref={form} onSubmit={onSubmit}>
          <InputBlock>
            <label>Name</label>
            <input type="text" name="from_name" placeholder="Full name" />
          </InputBlock>
          <InputBlock>
            <label>Contact No</label>
            <input
              type="number"
              name="from_contact"
              placeholder="Mobile or work"
            />
          </InputBlock>

          <InputBlock>
            <label>Email address</label>
            <input type="Email" name="reply_to" placeholder="@123" />
          </InputBlock>
          <InputBlock>
            <label>Message (optional)</label>
            <textarea
              type="text"
              name="message"
              placeholder={text}
              rows="4"
              defaultValue={text}
              cols="50"
            />
          </InputBlock>
          <button className="email-submit" type="submit">
            Check availability
          </button>
        </Form>
      )}
    </Container>
  );
};

export default CarInterestEmail;

const Form = styled.form`
  background-color: rgba(235, 235, 235);
  padding: 40px 30px;
  width: 700px;
  border-radius: 5px;
  @media (max-width: 568px) {
    width: 350px;
  }
`;

const InputBlock = styled.div`
  label {
    width: 100px;
  }
  input {
    width: 300px;
  }
  textarea {
    resize: none;
  }
  color: slate;
  display: flex;
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
