import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import styles from "./get-started.module.css";

function GetStarted({ title, link, buttonText, children }) {
  const effectiveButtonText = buttonText ?? "Get Started";
  const commonButtonClasses = "button is-large is-primary";
  return (
    <div
      className={classNames(
        "box is-flex is-flex-direction-column",
        styles.root
      )}
    >
      <h4 className="title is-size-4 has-text-primary has-text-centered">
        {title}
      </h4>
      <div className="mb-5 is-flex-grow-1">{children}</div>
      <div className="has-text-centered">
        {link ? (
          <a
            className={commonButtonClasses}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {effectiveButtonText}
          </a>
        ) : (
          <button className={commonButtonClasses} disabled>
            {effectiveButtonText}
          </button>
        )}
      </div>
    </div>
  );
}

GetStarted.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  buttonText: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default GetStarted;
