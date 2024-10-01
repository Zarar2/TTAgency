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
            <form action="">
              <label htmlFor="Name">
                Name <span>*</span>{" "}
              </label>
              <input
                id="Name"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Write your name here..."
              />

              <label htmlFor="Number">
                Number <span>*</span>
              </label>
              <input
                required
                id="Number"
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Write your Number..."
              />

              <label htmlFor="Email">
                Email <span>*</span>
              </label>
              <input
                id="Email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Write your email..."
              />

              <label htmlFor="Message">
                Message <span>*</span>
              </label>
              <textarea
                name="Message"
                id="Message"
                value={message}
                rows={5}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your Message..."
              ></textarea>

              <label htmlFor="AffiliateMarketing">
                Select Affiliate Marketing <span>*</span>
              </label>
              <select
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

              <div className={styles.buttonContainer}>
                <Button type="secondary" onClick={handleSubmit}>
                  SUBMIT
                </Button>

                <Button type="secondary" onClick={() => setIsModalOpen(false)}>
                  CLOSE
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
