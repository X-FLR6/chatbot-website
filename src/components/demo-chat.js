import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
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
    // CHATREFRESH: Uncomment when you want to bring back chat refresh
    // let id = getCurrentIdentifier() || generateIdentifier();
    // setIdentifier(id);

    // CHATREFRESH: Remove line when you want to bring back chat refresh
    setIdentifier("some-dummy");
  }, []);

  if (!identifier) return null;
  return (
    <div key={identifier} className={styles.root}>
      {isLocalStorageAvailable() ? (
        <div className={styles.meat}>
          {/* CHATREFRESH: Uncomment when you want to bring back chat refresh */}
          {/*<div className={classNames(styles.meat_topBar, "py-2")}>*/}
          {/*  <button*/}
          {/*    className="button is-small"*/}
          {/*    onClick={() => {*/}
          {/*      const id = generateIdentifier();*/}
          {/*      setIdentifier(id);*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Reset*/}
          {/*  </button>*/}
          {/*</div>*/}
          <div className={styles.meat_iframe}>
            <>
              <dialog-form
                flow-id="1"
                width="100%"
                height="100%"
                // CHATREFRESH: Uncomment when you want to bring back chat refresh
                // user-identifier={identifier}
                dry-run // CHATREFRESH: Remove when you want to bring back chat refresh
                settings-show-score
                server="https://share.dialogform.in"
              />
              <Helmet>
                <script
                  async
                  src="https://unpkg.com/@xflr6/chatbot-embed-lib@0.0.5/dist/umd.js"
                />
              </Helmet>
            </>
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
