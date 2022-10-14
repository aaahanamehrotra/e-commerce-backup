import Image from "next/image";
import contactStyles from "../styles/Contact.module.css";

function Contact() {
  return (
    <>
      <h1 className="page-heading">Contact Us</h1>

      <div className={contactStyles.container}>
        <div className={contactStyles.left}>
          <Image src="/11.png" alt="contact image" height="900" width="1000" />
        </div>
        <div className={contactStyles.contact}>
          <div className={contactStyles.form}>
            <form>
              <div className={contactStyles.inputGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                />
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
                <label htmlFor="textarea">Your Message</label>
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
      </div>
    </>
  );
}

export default Contact;
