import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";

import styles from "./admin-screenshot.module.css";

/**
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */
function AdminScreenshot() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "admin-screenshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>;
  }

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      className={styles.img}
    />
  );
}

export default AdminScreenshot;
