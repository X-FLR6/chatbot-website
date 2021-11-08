import PropTypes from "prop-types";
import React from "react";

import styles from "./help-phrase.module.css";

function HelpPhrase({ href, children }) {
  return (
    <a className={styles.root} href={href}>
      {children}
    </a>
  );
}

HelpPhrase.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default HelpPhrase;
