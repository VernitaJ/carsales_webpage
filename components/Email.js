import { useRef, useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import styled from 'styled-components'

const Email = (car) => {
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
  };

  return (
    <Container>
      {sent ? <span>Email sent! One of our employees will get in touch within a few hours.</span> :
        <form ref={form} onSubmit={onSubmit}>
          <InputBlock>
            <label>Your name</label>
            <input type="text" name="from_name" placeholder="from name" />
          </InputBlock>
          <InputBlock>
            <label>Contact No</label>
            <input type="text" name="from_contact" placeholder="your contact" />
          </InputBlock>
          {!car ? (
            <InputBlock>
              <label>Message</label>
              <input type="text" name="message" placeholder="Question or Comment" />
            </InputBlock>) : form.text == car.id
          }
          <InputBlock>
            <label>Email address</label>
            <input type="text" name="reply_to" placeholder="your email address" />
          </InputBlock>
          <button className="email-submit" type="submit">
            Submit
          </button>
        </form>}
    </Container>
  );
};

export default Email;

const InputBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 10px;
`

const Container = styled.div`
@media (max-width: 540px) {
    width: 350px;
    margin-left: auto;
}
  max-width: 450px;
  background-color: white !important;
  padding: 25px;
  margin-left: 50px;
  border-radius: 15px;
  margin-top: 6%;
  margin-bottom: 10%;
`