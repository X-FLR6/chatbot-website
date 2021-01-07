import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { BsChatQuoteFill } from "react-icons/bs";

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
    <div>
      <BsChatQuoteFill size={24} />
      &nbsp;&nbsp;
      <span style={{ fontSize: 20 }}>
        {data.site.siteMetadata?.title ?? ""}
      </span>
    </div>
  );
}

export default HeaderBrand;
