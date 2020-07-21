import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>
        Copyright © {new Date().getFullYear()} Kakinuma All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
