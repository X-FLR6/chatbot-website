import "./mystyles.scss";

import React from "react";

import DemoChatButton from "../components/demo-chat-button";
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
      <div className="hero has-background-primary-light has-text-primary-dark">
        <div className="hero-body is-flex is-justify-content-center">
          <ul className="is-size-5">
            <li>Delight users with highly interactive content.</li>
            <li>Leverage user responses to determine content flow.</li>
            <li>Get deep insights into every user&apos;s learning journey.</li>
          </ul>
        </div>
      </div>
      <section className="section is-flex is-flex-direction-column is-align-items-center">
        <h3 className="title">Here&apos;s an Example</h3>
        <DemoChatButton />
      </section>
      <section className="section has-background-light">
        <div className="container">
          <h3 className="title has-text-centered">Why We Made This</h3>
          <p className="block">
            We&apos;re a small group of educators and computer scientists,
            working on creating high quality digital learning content.
          </p>
          <p className="block">
            A big advantage of such content is its immense reach. However, what
            gets missed is the all-important interaction that happens between a
            teacher and learner. This interaction not only provides a great deal
            of guidance to the learner, but also allows the teacher to minutely
            and continuously assess the learner&apos;s strengths and weaknesses,
            and adapt rapidly.
          </p>
          <p className="block">
            We wrote this tool to help us create and deliver content in a way
            that can effectively simulate two way teacher-learner interaction,
            thus making learning much more effective even if it can&apos;t quite
            replace an actual teacher!
          </p>
        </div>
      </section>
      <section className="section is-flex is-flex-direction-column is-align-items-center has-background-primary-light">
        <h3 className="title">Try It Out - It&apos;s Free</h3>
        <ol className="is-size-5">
          <li>Sign in and create your content</li>
          <li>
            Embed in your LMS (we&apos;ll work with your user IDs) or share via
            links
          </li>
          <li>Visualize and analyze each user&apos;s learning journey</li>
        </ol>
        <div className="block" />
        <div className="block" />
        <a
          href="https://admin.dialogform.in"
          className="button is-primary is-large"
        >
          Launch DialogForm
        </a>
      </section>
    </Layout>
  );
}

export default IndexPage;
