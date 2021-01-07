import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { BsChatQuoteFill } from "react-icons/bs";

import styles from "./header-brand.module.css";

function HeaderBrand() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={styles.root}>
      <BsChatQuoteFill className={styles.icon} />
      <div className={styles.name}>{data.site.siteMetadata?.title ?? ""}</div>
    </div>
  );
}

export default HeaderBrand;
