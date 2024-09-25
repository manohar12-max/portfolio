import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="uil uil-envelope contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">2898manohar@gmail.com</span>
              <a
                href="mailto: 2898manohar@gmail.com"
                className="contact__button"
              >
                Write me{" "}
                <i className="uil uil-arrow-right contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="uil uil-outgoing-call contact__card-icon"></i>
              <h3 className="contact__card-title">Mobile no.</h3>
              <span className="contact__card-data">8767401326</span>
              <a href="" className="contact__button">
                Write me{" "}
                <i className="uil uil-arrow-right contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="uil uil-github contact__card-icon"></i>
              <h3 className="contact__card-title">Github</h3>
              <span className="contact__card-data">manohar12-max</span>
              <a
                href="https://github.com/manohar12-max"
                className="contact__button"
                target="_blank"
              >
                Write me{" "}
                <i className="uil uil-arrow-right contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
