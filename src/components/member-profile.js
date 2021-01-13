import PropTypes from "prop-types";
import React from "react";

import styles from "./member-profile.module.css";

function MemberProfile({ imageUrl, name, description }) {
  return (
    <div className={styles.root}>
      <img className={styles.img} src={imageUrl} alt="Profile picture" />
      <div className="is-size-4 py-2">{name}</div>
      <div className="has-text-grey">{description}</div>
    </div>
  );
}

MemberProfile.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};

export default MemberProfile;
