import { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";

const Email = () => {
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
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <div className="email-container">
      <form ref={form} onSubmit={onSubmit}>
        <div className="email-input">
          <label>Your name</label>
          <input type="text" name="from_name" placeholder="from name" />
        </div>
        <div className="email-input">
          <label>Contact No</label>
          <input type="text" name="from_contact" placeholder="your contact" />
        </div>
        <div className="email-input">
          <label>Message</label>
          <input type="text" name="message" placeholder="Your message" />
        </div>
        <div className="email-input">
          <label>Your email</label>
          <input type="text" name="reply_to" placeholder="Your email" />
        </div>
        <button className="email-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Email;
