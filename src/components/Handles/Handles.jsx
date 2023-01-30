import React from "react";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { HandleItems } from "../../components";

export const Handles = () => {
  return (
    <div className="flex lg:flex-col lg:space-y-5 p-5 bg-gray-200 dark:bg-primary lg:fixed lg:bottom-0 lg:right-0 lg:top-0  text-center justify-center border-l border-yellow z-10">
      <HandleItems
        href={"https://www.facebook.com/zhang.jike.311/"}
        ic={faFacebook}
      />
      <HandleItems href={"https://github.com/Jugya07"} ic={faGithub} />
      <HandleItems
        href={"https://www.linkedin.com/in/jugya-kamal-gogoi-5ab594229/"}
        ic={faLinkedin}
      />
      <HandleItems
        href={"https://www.instagram.com/jugya__kamal07/?hl=en"}
        ic={faInstagram}
      />
    </div>
  );
};
