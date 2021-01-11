import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";

import { isLocalStorageAvailable } from "../utils/browser-storage";
import styles from "./demo-chat.module.css";

const idStorageKey = "demo-chat-identifier";

function DemoChat() {
  const [identifier, setIdentifier] = useState();

  function getCurrentIdentifier() {
    if (!isLocalStorageAvailable()) return null;
    return localStorage.getItem(idStorageKey);
  }

  function generateIdentifier() {
    if (!isLocalStorageAvailable()) return null;
    const id = `website-${uuidV4()}`;
    localStorage.setItem(idStorageKey, id);
    return id;
  }

  useEffect(() => {
    let id = getCurrentIdentifier() || generateIdentifier();
    setIdentifier(id);
  }, []);

  if (!identifier) return null;
  return (
    <div key={identifier} className={styles.root}>
      {isLocalStorageAvailable() ? (
        <div className={styles.meat}>
          <div className={classNames(styles.meat_topBar, "py-2")}>
            <button
              className="button is-small"
              onClick={() => {
                const id = generateIdentifier();
                setIdentifier(id);
              }}
            >
              Reset
            </button>
          </div>
          <div className={styles.meat_iframe}>
            <dialog-form
              flow-id="1"
              width="100%"
              height="100%"
              user-identifier={identifier}
              settings-show-score
              server="https://share.dialogform.in"
            />
          </div>
        </div>
      ) : (
        <div
          className={classNames(
            styles.notification,
            "p-2 has-background-danger-light has-text-danger"
          )}
        >
          Local storage must be enabled on your browser to see the demo!
        </div>
      )}
    </div>
  );
}

export default DemoChat;
