import React, { useState } from "react";
import "./Contact.css";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import withReactContent from "sweetalert2-react-content";
import sendEmail from "../../../components/site/Contact/EmailJs";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Recipient Name",
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await sendEmail(templateParams);
      const MySwal = withReactContent(Swal);
      await MySwal.fire({
        title: "Message Sent Successfully!",
        text: "We have received your message.",
        icon: "success",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      const MySwal = withReactContent(Swal);
      await MySwal.fire({
        title: "Error",
        text: "Failed to send message. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="map">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.569573572788!2d49.85134714361193!3d40.37719041665431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb5163%3A0xc20aa51a5f0b5e01!2sCode%20Academy!5e0!3m2!1sen!2saz!4v1719522523937!5m2!1sen!2saz"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-5 contact_upper">
              <h2>CONTACT US</h2>
              <div className="row contact_low">
                <div className="col-4">
                  <h3>Address</h3>
                  <p>Nizami küçəsi 203B, AF Business House</p>
                </div>
                <div className="col-4">
                  <h3>Phone</h3>
                  <p>Mobile: (+994) 50 462 00 28</p>
                </div>
                <div className="col-4">
                  <h3>Email</h3>
                  <p>Buludluferid@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-7 formm">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Tell Us Your Message</h2>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;