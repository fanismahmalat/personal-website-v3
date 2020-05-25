import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "Contact Form",
        name,
        email,
        msg,
      }),
    })
      .then(() => {
        if (typeof window !== `undefined`)
          window.location.replace(`/contact-success`);
        else alert("Form sent successfully!");
      })
      .catch(error => alert("Something went wrong! Refresh and try again."));
  };

  return (
    <form
      className="contact-form validate-form"
      onSubmit={handleSubmit}
      id="contact-form"
    >
      <h1 className="contact2-form-title">Get in touch</h1>

      <input name="form-name" value="Contact Form" type="hidden" />

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
          // type="text"
          name="msg"
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
