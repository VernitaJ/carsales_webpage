import { useEffect, useRef, useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";

const SendCar = () => {
  const router = useRouter();
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { errors, isDirty, isValid } = formState;
  const [token, setToken] = useState();

  const onSubmit = () => {
    const form = document.querySelector("#contact-form");
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_ID,
        process.env.NEXT_PUBLIC_CAR_EMAIL_TEMPLATE,
        form,
        process.env.NEXT_PUBLIC_EMAIL_USER
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSent(true);
        form.reset();
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  useEffect(() => {
    sent
      ? (setTimeout = () => {
          router.push("/"), 4000;
        })
      : null;
  }, [sent, router]);

  const getErrorMessage = (err) => {
    if (err == "required") {
      return "Required field";
    } else if (err == "pattern") {
      return "Incorrect format, please check your input";
    }
  };

  const recaptcha = process.env.G_RECAPTCHA;

  return (
    <Container>
      <PageHeading>
        <h1>Sell your car</h1>
        Fill out the fields below and our team will be in touch by phone or
        email.
        <br /> We&apos;ll give you advice on the best way to take images and
        explain how the selling process works - completely commitment free.
      </PageHeading>
      {sent ? (
        <SentMessage>
          Request sent! One of our employees will get in touch within a few
          hours.
        </SentMessage>
      ) : (
        <GoogleReCaptchaProvider reCaptchaKey={recaptcha}>
          <Form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <Heading>Car Detail</Heading>
            <InputBlock>
              <Item>
                <div>
                  <label>Car Brand</label>
                  <input
                    {...register("brand", {
                      required: true,
                      maxLength: 20,
                      pattern: /[A-Za-z]/,
                    })}
                    placeholder="Toyota"
                  />
                </div>
                <ErrorMessage>
                  {getErrorMessage(errors?.brand?.type)}
                </ErrorMessage>
              </Item>
              <Item>
                <div>
                  <label>Model</label>
                  <input
                    {...register("model", {
                      required: false,
                      maxLength: 20,
                      pattern: /[A-Za-z0-9]/,
                    })}
                    placeholder="Hilux"
                  />
                </div>
                <ErrorMessage>
                  {getErrorMessage(errors?.model?.type)}
                </ErrorMessage>
              </Item>
              <Item>
                <div>
                  <label>Year</label>
                  <input
                    {...register("year", {
                      required: true,
                      max: 2022,
                      maxLength: 4,
                      minLength: 4,
                      pattern: /[0-9]/,
                    })}
                    placeholder=""
                  />
                </div>
                <ErrorMessage>
                  {getErrorMessage(errors?.year?.type)}
                </ErrorMessage>
              </Item>
              <Item>
                <div>
                  <label>Mileage</label>
                  <input
                    {...register("mileage", {
                      required: true,
                      max: 300000,
                      pattern: /[0-9]/,
                    })}
                    placeholder="In kilometers"
                  />
                </div>
                <ErrorMessage>
                  {getErrorMessage(errors?.mileage?.type)}
                </ErrorMessage>
              </Item>
              <Item>
                <div>
                  <label>Fuel Type</label>
                  <select {...register("fuel", { required: true })} id="fuel">
                    <option value="0">Select...</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Electric">Electric</option>
                  </select>
                </div>
                <ErrorMessage>
                  {getErrorMessage(errors?.fuel?.type)}
                </ErrorMessage>
              </Item>
              <Item>
                <div>
                  <label>Transmission</label>
                  <select
                    {...register("gear_type", { required: true })}
                    id="gear_type"
                  >
                    <option value="0">Select...</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>
                <ErrorMessage>
                  {getErrorMessage(errors?.gear_type?.type)}
                </ErrorMessage>
              </Item>
            </InputBlock>

            <Heading>Contact Detail</Heading>
            <InputBlock>
              <Item>
                <div>
                  <label>Name</label>
                  <input
                    {...register("from_name", {
                      required: true,
                      minLength: 4,
                      maxLength: 40,
                      pattern: /[A-Za-z-]/,
                    })}
                    placeholder="name"
                  />
                </div>
                <ErrorMessage>
                  {getErrorMessage(errors?.from_name?.type)}
                </ErrorMessage>
              </Item>
              <Item>
                <div>
                  <label>Contact No</label>
                  <input
                    {...register("from_contact", {
                      required: true,
                      minLength: 10,
                      maxLength: 14,
                      pattern: /[0-9+]/,
                    })}
                    placeholder="Mobile/Landline"
                  />
                </div>
                <ErrorMessage>
                  {getErrorMessage(errors?.from_contact?.type)}
                </ErrorMessage>
              </Item>
              <Item>
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
              </Item>
            </InputBlock>
            <InputBlock>
              <label>Message (optional)</label>
              <textarea
                {...register("message", {
                  required: false,
                })}
                type="text"
                name="message"
                placeholder="Question or Comment"
                rows="4"
                cols="50"
              />
            </InputBlock>

            <Button type="submit">Send Request</Button>
            <GoogleReCaptcha
              onVerify={(token) => {
                setToken(token);
              }}
            />
          </Form>
        </GoogleReCaptchaProvider>
      )}
    </Container>
  );
};

export default SendCar;

const PageHeading = styled.h4`
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  max-width: 100%;
  font-size: 16px;
  color: rgb(250, 250, 250);
  margin: 30px 0 30px;
`;

const SentMessage = styled.p`
  display: inline-block;
  transition: display 2s;
  color: slate;
  width: 60%;
`;

const InputBlock = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 20px;
  padding: 10px;
  @media (max-width: 768px) {
    padding-left: 0;
  }
  label {
    margin-left: 10px;
    border: none;
    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
  div {
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  margin: 15px;
  color: slate;
  input {
    padding: 5px;
    width: 250px;
    margin: 5px;
    background-color: transparent;
    border: 1px solid slategray;
    focus-outline: none !important;
    @media (max-width: 768px) {
      width: 60%;
    }
  }
  select {
    width: 255px;
    background-color: transparent;
    border-radius: 2px;
    padding: 5px;
    @media (max-width: 768px) {
      width: 60%;
    }
    option {
      background-color: rgb(200, 200, 200);
      color: slate;
      padding: 10px;
      margin: 10px;
    }
  }
  option {
    background-color: rgb(0, 0, 40);
    border: none;
    padding: 10px;
    margin: 10px;
    :hover {
      color: red;
    }
  }
`;

const Item = styled.div`
  height: 45px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ErrorMessage = styled.p`
  font-size: 12px;
  color: seagreen;
  align-self: flex-end;
  margin-right: 5px;
`;

const Heading = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: rgb(0, 0, 20);
  margin: 20px 0 0 15px;
`;

const Form = styled.form`
  background-color: rgba(235, 235, 235);
  padding: 5%;
  margin: 20px 0;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${Heading}:nth-child(4) {
    margin-top: 30px;
  }
  @media (max-width: 568px) {
    margin: 0;
    padding: 5px;
    padding-left: 20px;
  }
  @media (max-width: 420px) {
    padding: 0;
  }
  textarea {
    margin-left: 10px;
    width: 70%;
    @media (max-width: 420px) {
      width: 90%;
    }
  }
`;

const Container = styled.div`
  @media (max-width: 1200px) {
    width: 90%;
    margin: 50px auto;
  }
  @media (max-width: 568px) {
    margin-left: 0;
    width: 99%;
  }
  width: 40%;
  margin-left: 5%;
  margin-right: auto;
  margin-top: 50px;
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
