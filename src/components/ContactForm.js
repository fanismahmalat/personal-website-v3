import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    const processForm = form => {
      const data = new FormData(form);

      data.append("form-name", "Contact Form");
      fetch("/", {
        method: "POST",
        body: data,
      })
        .then(() => {
          if (typeof window !== `undefined`)
            window.location.replace(`/contact-success`);
          else alert("Form sent successfully!");
        })
        .catch(error => alert("Something went wrong! Refresh and try again."));
    };

    const emailForm = document.querySelector(".contact-form");

    if (emailForm) {
      emailForm.addEventListener("submit", e => {
        e.preventDefault();
        processForm(emailForm);
      });
    }
  }, []);

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = e => {
    e.preventDefault();

    const data = new FormData(e);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "Contact Form",
        name,
        email,
        userMessage,
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
      // onSubmit={handleSubmit}
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
        data-validate="Message is required"
      >
        <input
          className={`input2 ${userMessage.length > 0 ? "has-val" : ""}`}
          type="text"
          name="userMessage"
          required
          value={userMessage}
          onChange={event => setUserMessage(event.target.value)}
        />
        <span className="focus-input2" data-placeholder="MESSAGE"></span>
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

      <button className="btn" type="submit">
        SEND
      </button>
    </form>
  );
};

export default ContactForm;
