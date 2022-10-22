import { useRef, useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Email = (car, removeCar) => {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { errors, isDirty, isValid } = formState;

  const onSubmit = (e) => {
    const form = document.querySelector("#contact-form");
    e.preventDefault();
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

  const getErrorMessage = (err) => {
    if (err == "required") {
      return "Required field";
    } else if (err == "pattern") {
      return "Incorrect format";
    } else if (err == "minLength") {
      return "That's not a valid value";
    }
  };
  console.log(errors);
  return (
    <Container>
      {sent ? (
        <span>
          Email sent! One of our employees will get in touch within a few hours.
        </span>
      ) : (
        <Form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <InputBlock>
            <div>
              <label>Name</label>
              <input
                {...register("from_name", {
                  required: true,
                  minLength: 4,
                  maxLength: 40,
                  pattern: /[A-Za-z]/,
                })}
                placeholder="Full name"
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
                placeholder="0612342700"
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
                placeholder="email address"
              />
            </div>
            <ErrorMessage>
              {getErrorMessage(errors?.reply_to?.type)}
            </ErrorMessage>
          </InputBlock>

          <InputBlock>
            <label>Message (optional)</label>
            <textarea
              type="text"
              name="message"
              placeholder="Question or Comment"
              rows="4"
              cols="50"
            />
          </InputBlock>
          <button className="email-submit" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Container>
  );
};

export default Email;

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
  div {
    display: flex;
    gap: 16px;
    label {
      width: 100px;
    }
  }
  line-height: 35px;
  color: slate;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
  margin-bottom: 15px;
  textarea {
    border: 1px solid lightgrey;
  }
  @media (max-width: 568px) {
    div {
      display: unset;
    }
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    label {
      width: fit-content;
    }
    textarea {
      width: 100%;
    }
  }
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

const ErrorMessage = styled.p`
  font-size: 12px;
  color: darkorange;
  align-self: flex-end;
  margin-right: 5px;
`;
