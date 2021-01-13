import "./mystyles.scss";

import classNames from "classnames";
import React from "react";

import AdminScreenshot from "../components/admin-screenshot";
import DemoChatButton from "../components/demo-chat-button";
import Layout from "../components/layout";
import MemberProfile from "../components/member-profile";
import SEO from "../components/seo";
import amarnathPic from "../images/amarnath.png";
import saumyaPic from "../images/saumya.png";
import styles from "./index.module.css";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">DialogForm</h1>
            <h3 className="subtitle">
              Build conversational style e-Learning content
            </h3>
          </div>
        </div>
      </section>
      <div className="section has-background-primary-light has-text-primary-dark">
        <div className={classNames(styles.screenshotContainer, "container")}>
          <div className="columns">
            <div className="column is-10-widescreen is-offset-1-widescreen is-8-fullhd is-offset-2-fullhd">
              <AdminScreenshot />
            </div>
          </div>
          <div className="block" />
          <div className="is-flex is-flex-direction-column is-align-items-center">
            <ul
              className={classNames(
                styles.introFeatures,
                "is-size-5 is-size-4-tablet"
              )}
            >
              <li>Delight users with highly interactive content</li>
              <li>Leverage user responses to determine content flow</li>
              <li>Get deep insights into every user&apos;s learning journey</li>
            </ul>
            <div className="block" />
            <div className="block" />
            <DemoChatButton />
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <h3 className="title has-text-centered">Motivation</h3>
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
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <MemberProfile
                imageUrl={saumyaPic}
                name="Saumya Kanoria"
                description="Cornell University, U of Illinois Urbana Champaign, computer scientist, entrepreneur"
              />
            </div>
            <div className="column">
              <MemberProfile
                imageUrl={amarnathPic}
                name="S K Amarnath"
                description="Jawahar Navodaya Vidyalaya, NIT - Karnataka, computer scientist, software architect"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section is-flex is-flex-direction-column is-align-items-center has-background-primary-light">
        <h3 className="title">Check It Out - It&apos;s Free</h3>
        <ul className={classNames(styles.stepsToTry, "is-size-5")}>
          <li>Sign in and create your content</li>
          <li>
            Embed in your LMS (we&apos;ll work with your user IDs) or share via
            links
          </li>
          <li>Visualize and analyze each user&apos;s learning journey</li>
        </ul>
        <div className="block" />
        <div className="columns">
          <div className="column">
            <p className="notification is-warning is-light">
              DialogForm is <b>free</b> to use. However, we do incur a cost to
              run our infrastructure, and this cost grows as users grow. If
              you&apos;re using this for more than a couple of hundred users,
              you could help us cover our infrastructure cost. Write to us at{" "}
              <a href="mailto:hi@madamcurious.com">hi@madamcurious.com</a>
            </p>
          </div>
        </div>
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
