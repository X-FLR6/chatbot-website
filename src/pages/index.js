import "./mystyles.scss";

import classNames from "classnames";
import React from "react";
import { BsChatQuoteFill } from "react-icons/bs";

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
            <BsChatQuoteFill className={styles.logo} />
            <h1 className="title">DialogForm</h1>
            <h3 className="subtitle">
              Build conversational e-Learning content
            </h3>
          </div>
        </div>
      </section>
      <section className="section has-background-primary-light has-text-primary-dark">
        <div className="container">
          <div className="columns">
            <div className="column is-10-widescreen is-offset-1-widescreen is-8-fullhd is-offset-2-fullhd">
              <AdminScreenshot />
            </div>
          </div>
          <div className="block" />
          <div className="is-size-5">
            <p className="block">
              DialogForm is a tool for creating engaging e-Learning content in
              the form of conversations between the teacher and the user.
            </p>
            <p className="block">
              Create entire lessons, or even just supplement your existing
              lessons with natural, free-flowing conversational assessments or
              explanations that keep the user engaged, and provide you as the
              teacher with fine-grained control over personalizing and analyzing
              the user&apos;s learning journey.
            </p>
          </div>
          <div className="block" />
          <div className="is-flex is-flex-direction-column is-align-items-center">
            <DemoChatButton />
          </div>
        </div>
      </section>
      <section className="section is-flex is-flex-direction-column is-align-items-center">
        <h3 className="title">Features</h3>
        <ul className={classNames(styles.features, "is-size-5")}>
          <li>Present content as natural, free flowing conversations</li>
          <li>
            Check understanding using questions within the flow of the
            conversation
          </li>
          <li>Allow multiple attempts on the same question</li>
          <li>
            Provide relevant and timely feedback to correct misconceptions and
            ensure success of the overall lesson delivery
          </li>
          <li>Score using varied scoring algorithms suited to outcomes</li>
          <li>Personalize each student&apos;s learning journey</li>
          <li>
            Access advanced analytics to understand gaps and improve performance
          </li>
        </ul>
      </section>
      <section className="section has-background-primary-light">
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
      <section className="section has-background-primary-light">
        <div className="container is-flex is-flex-direction-column is-align-items-center">
          <h3 className="title">Get Started</h3>
          <p className="is-size-5">
            Sign in, create your content and embed in your Learning Management
            System in minutes
          </p>
          <div className="block" />
          <a
            href="https://admin.dialogform.in"
            className="button is-primary is-large"
          >
            Launch DialogForm
          </a>
          <div className="block" />
          <div className="columns">
            <div className="column">
              <p className="notification is-warning is-light">
                Have questions? Write to us at{" "}
                <a href="mailto:svk@dialogform.in">svk@dialogform.in</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer is-flex is-justify-content-center">
        <a
          className="is-link mx-3 is-uppercase"
          href="https://docs.dialogform.in"
        >
          Documentation
        </a>
        <a
          className="is-link mx-3 is-uppercase"
          href="https://admin.dialogform.in"
        >
          Console
        </a>
      </footer>
    </Layout>
  );
}

export default IndexPage;
