import React, { useState } from "react";
import { Redirect } from "@reach/router";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends React.Component {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [msg, setMsg] = useState("");
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", msg: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "Contact Form",
        // ...{ name, email, msg },
        ...this.state,
      }),
    })
      .then(() => {
        if (typeof window !== `undefined`)
          window.location.replace(`/contact-success`);
        else alert("Form sent successfully!");
      })
      .catch(error => alert("Something went wrong! Refresh and try again."));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form
        className="contact-form validate-form"
        onSubmit={this.handleSubmit}
        id="contact-form"
      >
        <h1 className="contact2-form-title">Get in touch</h1>

        <input name="form-name" value="Contact Form" type="hidden" />

        <div
          className="wrap-input2 validate-input"
          data-validate="Name is required"
        >
          <input
            className={`input2 ${this.state.name.length > 0 ? "has-val" : ""}`}
            type="text"
            name="name"
            required
            value={this.state.name}
            // onChange={event => setName(event.target.value)}
            onChange={this.handleChange}
          />
          <span className="focus-input2" data-placeholder="NAME"></span>
        </div>

        <div
          className="wrap-input2 validate-input"
          data-validate="Valid email is required: ex@abc.xyz"
        >
          <input
            className={`input2 ${this.state.email.length > 0 ? "has-val" : ""}`}
            type="email"
            name="email"
            required
            value={this.state.email}
            // onChange={event => setEmail(event.target.value)}
            onChange={this.handleChange}
          />
          <span className="focus-input2" data-placeholder="EMAIL"></span>
        </div>

        <div
          className="wrap-input2 validate-input"
          data-validate="Message is required"
        >
          <textarea
            className={`input2 ${this.state.msg.length > 0 ? "has-val" : ""}`}
            type="text"
            name="msg"
            required
            value={this.state.msg}
            // onChange={event => setMsg(event.target.value)}
            onChange={this.handleChange}
          ></textarea>
          <span className="focus-input2" data-placeholder="MESSAGE"></span>
        </div>

        <button className="btn" type="submit">
          SEND
        </button>
      </form>
    );
  }
}

export default ContactForm;
