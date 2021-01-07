import "./mystyles.scss";

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">DialogForm</h1>
            <h3 className="subtitle">
              Build conversational style e-Learning content
            </h3>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
