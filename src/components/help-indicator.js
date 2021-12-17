import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { MdHelpOutline } from "react-icons/all";

import styles from "./help-indicator.module.css";

function HelpIndicator({ className, href }) {
  const commonClasses = ["has-text-grey-light", className];
  return href ? (
    <a className={classNames(...commonClasses, styles.hasHref)} href={href}>
      <MdHelpOutline />
    </a>
  ) : (
    <span className={classNames(...commonClasses)}>
      <MdHelpOutline />
    </span>
  );
}

HelpIndicator.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
};

export default HelpIndicator;
