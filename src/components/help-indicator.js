import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { MdHelpOutline } from "react-icons/all";

import styles from "./help-indicator.module.css";

function HelpIndicator({ className, href }) {
  return (
    <a
      className={classNames(
        "has-text-grey-light",
        { [styles.hasHref]: href },
        className
      )}
      href={href}
    >
      <MdHelpOutline />
    </a>
  );
}

HelpIndicator.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
};

export default HelpIndicator;
