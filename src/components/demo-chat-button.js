import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useLayoutEffect, useState } from "react";

import DemoChat from "./demo-chat";
import styles from "./demo-chat-button.module.css";

function DemoChatButton({ className }) {
  const [isModalActive, setIsModalActive] = useState(false);

  useLayoutEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    if (isModalActive) {
      html.classList.add("is-clipped");
    } else {
      html.classList.remove("is-clipped");
    }
  }, [isModalActive]);

  return (
    <>
      <div className={classNames("modal", { "is-active": isModalActive })}>
        <div
          className="modal-background"
          onClick={() => setIsModalActive(false)}
        />
        <div className={classNames("modal-content", styles.demoChatHolder)}>
          <DemoChat />
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setIsModalActive(false)}
        />
      </div>
      <button
        className={classNames("button is-large", className)}
        onClick={() => setIsModalActive(true)}
      >
        See an Example
      </button>
    </>
  );
}

DemoChatButton.propTypes = {
  className: PropTypes.string,
};

export default DemoChatButton;
