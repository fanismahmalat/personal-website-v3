import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <form
      className="contact-form validate-form"
      name="Contact Form"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/pages/contact-success"
    >
      <h1 className="contact2-form-title">Get in touch</h1>

      <div
        className="wrap-input2 validate-input"
        data-validate="Name is required"
      >
        <input
          className={`input2 ${name.length > 0 ? "has-val" : ""}`}
          type="text"
          name="name"
          required
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <span className="focus-input2" data-placeholder="NAME"></span>
      </div>

      <div
        className="wrap-input2 validate-input"
        data-validate="Valid email is required: ex@abc.xyz"
      >
        <input
          className={`input2 ${email.length > 0 ? "has-val" : ""}`}
          type="email"
          name="email"
          required
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <span className="focus-input2" data-placeholder="EMAIL"></span>
      </div>

      <div
        className="wrap-input2 validate-input"
        data-validate="Message is required"
      >
        <textarea
          className={`input2 ${msg.length > 0 ? "has-val" : ""}`}
          name="message"
          required
          value={msg}
          onChange={event => setMsg(event.target.value)}
        ></textarea>
        <span className="focus-input2" data-placeholder="MESSAGE"></span>
      </div>

      <button className="btn" type="submit">
        SEND
      </button>
    </form>
  );
};

export default ContactForm;
