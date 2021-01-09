import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useState } from "react";

import DemoChat from "./demo-chat";
import styles from "./demo-chat-button.module.css";

function DemoChatButton({ className }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={classNames("modal", { "is-active": isActive })}>
        <div className="modal-background" />
        <div className={classNames("modal-content", styles.demoChatHolder)}>
          <DemoChat />
        </div>
        <button
          className="modal-close"
          aria-label="close"
          onClick={() => setIsActive(false)}
        />
      </div>
      <button
        className={classNames("button is-large", className)}
        onClick={() => setIsActive(true)}
      >
        Launch Example
      </button>
    </>
  );
}

DemoChatButton.propTypes = {
  className: PropTypes.string,
};

export default DemoChatButton;
