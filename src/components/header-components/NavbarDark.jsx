import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const NavbarDark = () => {
  const phoneText = "(225) 555-0118";
  const mailText = "michelle.rivera@example.com";
  return (
    <div
      id="navbar-dark"
      className="flex sm:flex-col  sm:gap-2 justify-between font-bold text-sm items-center px-40 py-4 bg-darkblue1 sm:px-10 lg:px-32"
    >
      <label
        id="contact"
        htmlFor="contact"
        className="flex sm:flex-col  items-center  gap-8 sm:gap-2"
      >
        <span className="flex flex-row" id="contact-span">
          <p className="flex text-center items-center gap-2 " id="contact-logo">
            <FontAwesomeIcon icon={faPhone} />
            {phoneText}
          </p>
        </span>
        <span className="flex" id="contact-span">
          <a
            className="flex text-center gap-2 items-center "
            href="#"
            id="contact-logo"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            {mailText}
          </a>
        </span>
      </label>
      <span className="flex flex-row">
  <p>Follow Us for a Chance to Unlock 80% Discounts!</p>
</span>
<label
  id="social-media"
  className="flex pb-2 sm:pb-0 items-center justify-between gap-4 md:gap-8"
>
<span className="flex flex-row items-center gap-4">
  <p>Follow Us :</p>
  <div className="flex gap-4 items-center">
    <a href="https://www.instagram.com/">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a href="https://www.youtube.com/">
      <FontAwesomeIcon icon={faYoutube} />
    </a>
    <a href="https://www.facebook.com/">
      <FontAwesomeIcon icon={faFacebook} />
    </a>
    <a href="https://www.twitter.com/">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
  </div>
</span>

</label>
    </div>
  );
};
export default NavbarDark;
