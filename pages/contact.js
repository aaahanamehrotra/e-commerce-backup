import contactStyles from "../styles/Contact.module.css";
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar/Navbar";

function Contact() {
  const { data: session } = useSession();
  return (
    <>
      <div className={contactStyles.contact}>
        <h1>Contact Us</h1>
        <div className={contactStyles.form}>
          <form>
            <div className={contactStyles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder="John Doe" />
            </div>
            <div className={contactStyles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className={contactStyles.inputGroup}>
              <label htmlFor="textarea">Yours Message</label>
              <textarea
                name="textarea"
                cols="30"
                rows="10"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className={contactStyles.inputGroup}>
              <button type="submit" className={contactStyles.button}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
