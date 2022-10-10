import contactStyles from "../styles/Contact.module.css";
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar/Navbar";

function contact() {
  const { data: session } = useSession();
  return (
    <>
      <Navbar session={session} />
      <div className={contactStyles.contact}>
        <h1>Contact Us</h1>
        <div className={contactStyles.form}>
          <form>
            <div class={contactStyles.inputGroup}>
              <label for="name">Name</label>
              <input type="text" name="name" id="name" placeholder="John Doe" />
            </div>
            <div class={contactStyles.inputGroup}>
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div class={contactStyles.inputGroup}>
              <label for="textarea">Yours Message</label>
              <textarea
                name="textarea"
                cols="30"
                rows="10"
                placeholder="Your message"
              ></textarea>
            </div>
            <div class={contactStyles.inputGroup}>
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

export default contact;
