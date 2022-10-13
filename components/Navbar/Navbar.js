import { useState } from "react";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import navStyles from "./Navbar.module.css";

function Navbar({ session }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.title}>
        <Link href="/">E-commerce</Link>
      </div>
      <div className={[navStyles.links, navStyles.responsive].join(" ")}>
        <Link href="/">Home</Link>
        <Link href="/products/">Products</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className={[navStyles.links, navStyles.responsive].join(" ")}>
        {/* <Link href="/login"> */}
        {/* <FontAwesomeIcon icon={faUser} className={navStyles.icon} /> */}
        {/* Sign In */}
        {/* </Link> */}
        {session ? (
          <button onClick={() => signOut()} className={navStyles.sign}>
            Sign out
          </button>
        ) : (
          <button
            onClick={() => signIn()}
            type="submit"
            className={navStyles.sign}
          >
            Sign in
          </button>
        )}
      </div>
      <div className={[navStyles.navbar, navStyles.mobileNav].join(" ")}>
        {!open ? (
          <FontAwesomeIcon
            icon={faBars}
            className={navStyles.hamburger}
            onClick={() => setOpen(!open)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faXmark}
            className={navStyles.hamburger}
            onClick={() => setOpen(!open)}
          />
        )}
        {open && (
          <div className={navStyles.mobileItems}>
            <div className={[navStyles.links, navStyles.linkItems].join(" ")}>
              <Link href="/">Home</Link>
              <Link href="/products/">Products</Link>
              <Link href="/contact">Contact</Link>
              {session ? (
                <button onClick={() => signOut()} className={navStyles.sign}>
                  Sign out
                </button>
              ) : (
                <button
                  onClick={() => signIn()}
                  type="submit"
                  className={navStyles.sign}
                >
                  Sign in
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
