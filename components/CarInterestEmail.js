import { useRef, useEffect, useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const CarInterestEmail = ({ car }) => {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const form = document.querySelector("#contact-form");
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
        form,
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

  useEffect(() => {}, [sent]);

  const text = `I'm interested to know more about the ${car.year} ${car.brand} ${car.model} from your website. Please contact me on my mobile with more information.`;

  const getErrorMessage = (err) => {
    if (err == "required") {
      console.log("required");
      return "Required field";
    } else if (err == "pattern") {
      return "Incorrect format, please check your input";
    } else if (err == "minLength") {
      return "That's not a valid value";
    }
  };

  return (
    <Container>
      {sent ? (
        <span>Email sent! One of our employees will be in touch soon.</span>
      ) : (
        <Form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <InputBlock>
            <div>
              <label>Name</label>
              <input
                {...register("from_name", {
                  required: true,
                  minLength: 3,
                  maxLength: 40,
                  pattern: /[A-Za-z-]/,
                })}
              />
            </div>
            <ErrorMessage>
              {getErrorMessage(errors?.from_name?.type)}
            </ErrorMessage>
          </InputBlock>
          <InputBlock>
            <div>
              <label>Contact No</label>
              <input
                {...register("from_contact", {
                  required: true,
                  minLength: 10,
                  maxLength: 14,
                  pattern: /[0-9+]/,
                })}
                placeholder="Mobile or Landline"
              />
            </div>
            <ErrorMessage>
              {getErrorMessage(errors?.from_contact?.type)}
            </ErrorMessage>
          </InputBlock>

          <InputBlock>
            <div>
              <label>Email address</label>
              <input
                {...register("reply_to", {
                  required: true,
                  minLength: 10,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                placeholder="Email address"
              />
              <ErrorMessage>
                {getErrorMessage(errors?.reply_to?.type)}
              </ErrorMessage>
            </div>
          </InputBlock>
          <InputBlock>
            <label>Message (optional)</label>
            <textarea
              {...register("message", {
                required: false,
              })}
              type="text"
              name="message"
              defaultValue={text}
              rows="4"
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
  border-radius: 5px;
  @media (max-width: 568px) {
    width: 100%;
  }
`;

const ErrorMessage = styled.p`
  font-size: 12px;
  color: #1434a4;
  align-self: flex-end;
  margin-right: 5px;
  padding-bottom: 2px;
`;

const InputBlock = styled.div`
  label {
    width: 100px;
  }
  input {
    width: 300px;
    border: 1px solid #aba;
    padding: 3px 5px;
    @media (max-width: 568px) {
      width: 100%;
    }
  }
  textarea {
    resize: none;
    border: 1px solid #aba;
    @media (max-width: 568px) {
      width: 100%;
    }
  }
  div {
    display: flex;
    gap: 10px;
  }
  gap: 10px;
  display: flex;
  color: slate;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Container = styled.div`
  @media (max-width: 540px) {
    margin-left: 0;
    padding: 0;
  }
  padding: 0 25px;
  border-radius: 15px;
  margin-bottom: 10%;
`;
