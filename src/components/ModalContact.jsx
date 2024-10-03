import { useState } from "react";
import styles from "./ModalContact.module.css";
import Button from "./Button";
import "./ModalContact.css";

export default function ModalContact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [email, setEmail] = useState("");
  const [affiliateMarketing, setAffiliateMarketing] = useState("meta");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, number, email, message, affiliateMarketing);
    setIsModalOpen(false);
    setName("");
    setNumber("");
    setEmail("");
    setAffiliateMarketing("meta");
    setMessage("");
  };

  return (
    <div>
      <Button onClick={() => setIsModalOpen(true)}>CONTACT</Button>
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
              <form action="#" method="POST" encType="multipart/form-data">
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
                    name="name"
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
                    name=""
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

                {/* <div className={styles["form-group"]}>
                <label>Select Affiliate Marketing</label>

                <div className={styles.input}>
                <select
                className={styles["form-field"]}
                    required
                    name=""
                    id="AffiliateMarketing"
                    value={affiliateMarketing}
                    onChange={(e) => setAffiliateMarketing(e.target.value)}
                    >
                    <option value="Instagram">Instgaram</option>
                    <option value="Meta">Meta</option>

                    <option value="Twitter">Twitter</option>
                    </select>
                    </div>
                    </div> */}
                {/* <div className={styles.buttonContainer}>
                <Button type="secondary" onClick={handleSubmit}>
                  SUBMIT
                  </Button>
                  </div> */}
              </form>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

{
  /* <form action="#" method="POST" enctype="multipart/form-data">




<div class="formcarry-block">
  <button type="submit">Send</button>
</div>
</form> */
}
