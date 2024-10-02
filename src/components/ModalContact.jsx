import { useState } from "react";
import styles from "./ModalContact.module.css";
import Button from "./Button";

export default function ModalContact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [email, setEmail] = useState("");
  const [affiliateMarketing, setAffiliateMarketing] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, number, email, message, affiliateMarketing);
    setIsModalOpen(false);
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
            <form action="">
              <div className={styles["form-group"]}>
                <span>Name</span>
                <input
                  className={styles["form-field"]}
                  id="Name"
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Write your name here..."
                />
              </div>

              <div className={styles["form-group"]}>
                <span>Number</span>

                <input
                  className={styles["form-field"]}
                  required
                  id="Number"
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Write your Number..."
                />
              </div>

              <div className={styles["form-group"]}>
                <span>Email</span>

                <input
                  id="Email"
                  required
                  className={styles["form-field"]}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Write your email..."
                />
              </div>

              <div className={styles["form-group"]}>
                <span>Message</span>

                <textarea
                  name="Message"
                  className={styles["form-field"]}
                  id="Message"
                  value={message}
                  rows={5}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your Message..."
                ></textarea>
              </div>

              <div className={styles["form-group"]}>
                <span>Select Affiliate Marketing</span>

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
              <div className={styles.buttonContainer}>
                <Button type="secondary" onClick={handleSubmit}>
                  SUBMIT
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
