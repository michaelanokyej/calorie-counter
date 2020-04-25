import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTrashAlt,
  faCode
} from "@fortawesome/free-solid-svg-icons";
import styles from "./NavBar.module.css"


const Navbar = ({ handleTrashButton }) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navButton}>
        <FontAwesomeIcon icon={faCode} />
      </div>
      <div className={styles.navButton}>
        <FontAwesomeIcon icon={faHome} />
      </div>
      <div className={styles.navButton} onClick={(e) => {
        e.preventDefault();
        handleTrashButton();
      }}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    </div>
  );
};

export default Navbar;
