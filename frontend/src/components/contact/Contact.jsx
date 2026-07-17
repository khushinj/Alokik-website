import { FaWhatsapp } from "react-icons/fa";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
} from "react-icons/hi2";

import "./Contact.css";

function Contact() {
  return (
    <section style={{ paddingTop: 0 }}>

      <div className="container split-grid">

        <div>

          <div className="form-row">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              type="text"
              placeholder="Your full name"
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              placeholder="you@company.com"
            />
          </div>

          <div className="form-row">
            <label htmlFor="phone">Phone</label>

            <input
              id="phone"
              type="text"
              placeholder="+91 00000 00000"
            />
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              placeholder="Tell us what you're looking for — product type, quantity, destination country..."
            />
          </div>

          <button className="submit-btn">
            Send Inquiry
          </button>

        </div>

        <div>

          <div className="contact-line">

            <FaWhatsapp />

            <div>

              <div className="label">
                WhatsApp
              </div>

              <div className="value">
                +91 95680 07507
              </div>

            </div>

          </div>

          <div className="contact-line">

            <HiOutlineEnvelope />

            <div>

              <div className="label">
                Email
              </div>

              <div className="value">
                export@alokik.net
              </div>

            </div>

          </div>

          <div className="contact-line">

            <HiOutlinePhone />

            <div>

              <div className="label">
                Phone
              </div>

              <div className="value">
                +91 141 000 0000
              </div>

            </div>

          </div>

          <div className="contact-line">

            <HiOutlineMapPin />

            <div>

              <div className="label">
                Factory Location
              </div>

              <div className="value">
                VKI Area,
                Sikar Road,
                Jaipur,
                Rajasthan,
                India
              </div>

            </div>

          </div>

          <div
            className="ph"
            style={{
              height: "220px",
              marginTop: "24px",
            }}
          >
            GOOGLE MAP EMBED — Factory location
          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;