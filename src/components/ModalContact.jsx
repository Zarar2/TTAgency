import { useState } from "react";

import styles from "./ModalContact.module.css";
import Button from "./Button";
import "./ModalContact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";

export default function ModalContact({ isModalOpen, setIsModalOpen }) {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [email, setEmail] = useState("");
  const [affiliateMarketing, setAffiliateMarketing] = useState("meta");
  const [message, setMessage] = useState("");
  const form = useRef();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsModalOpen(false);
    setName("");
    setNumber("");
    setEmail("");
    setAffiliateMarketing("meta");
    setMessage("");

    emailjs
      .sendForm("service_0agi5sj", "template_jn3w4o3", form.current, {
        publicKey: "6ZI7pbZXUlOoTp4e2",
      })
      .then(
        () => {
          setOpen(true);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      {isModalOpen && (
        <div className={styles["modal-overlay"]}>
          <div className={styles["modal-content"]}>
            <span
              className={styles["close"]}
              onClick={() => setIsModalOpen(false)}
            >
              X
            </span>
            <section className="formcarry-container">
              <form
                ref={form}
                action="#"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="formcarry-block">
                  <label htmlFor="fc-generated-1-name">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="fc-generated-1-name"
                    placeholder="Your first and last name"
                  />
                </div>

                <div className="formcarry-block">
                  <label htmlFor="fc-generated-1-email">
                    Your Email Address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="fc-generated-1-email"
                    placeholder="john@doe.com"
                  />
                </div>

                <div className="formcarry-block">
                  <label htmlFor="fc-generated-1-name">Number</label>
                  <input
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    type="text"
                    name="number"
                    id="fc-generated-1-name"
                    placeholder="Your Number"
                  />
                </div>

                <div className="formcarry-block">
                  <label htmlFor="fc-generated-1-message">Your message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    rows={4}
                    id="fc-generated-1-message"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>

                <div className="formcarry-block">
                  <label htmlFor="fc-generated-1-message">
                    Select Affliate Market
                  </label>
                  <select
                    required
                    name="affiliateMarketing"
                    id="AffiliateMarketing"
                    value={affiliateMarketing}
                    onChange={(e) => setAffiliateMarketing(e.target.value)}
                  >
                    <option value="meta">Meta</option>
                    <option value="twitter">Twitter</option>
                    <option value="tiktok">Tiktok</option>
                    <option value="instagram">Instagram</option>
                  </select>
                </div>

                <div className="formcarry-block">
                  <button type="submit" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      )}

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="SUCCESS!"
      />
    </>
  );
}
