import "./mystyles.scss";

import classNames from "classnames";
import { Link } from "gatsby";
import React from "react";
import { BsChatQuoteFill } from "react-icons/bs";

import AdminScreenshot from "../components/admin-screenshot";
import DemoChatButton from "../components/demo-chat-button";
import Layout from "../components/layout";
import MemberProfile from "../components/member-profile";
import PricingPlan from "../components/pricing-plan";
import SEO from "../components/seo";
import amarnathPic from "../images/amarnath.png";
import rajatPic from "../images/rajat.png";
import saumyaPic from "../images/saumya.png";
import styles from "./index.module.css";

const COMMON_FEATURES = [
  "-",
  "Unlimited content",
  "Unlimited branching logic",
  "Auto max-score calculation",
  "Share content via link",
  "Embed content in any website",
  "View & analyze conversations",
  "Analyze drop-off rates",
  "Scoring algorithms to suit various outcomes",
  "Give feedback at any point in a conversation",
];

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
            <div className="column">
              <MemberProfile
                imageUrl={rajatPic}
                name="Rajat Toshniwal"
                description="Indian Institute of Technology, teacher, educator, entrepreneur"
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
            System in minutes.
          </p>
          <div className="block" />
          <p className="is-size-5 has-text-grey">
            There is no time limit on the <b>fully functional</b> free plan. See
            all of our pricing plans below.
          </p>
          <div className="block" />
          <a
            href="https://admin.dialogform.in"
            className="button is-primary is-large"
            target="_blank"
            rel="noreferrer"
          >
            Get Started For Free
          </a>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h3 className="title has-text-centered">Pricing</h3>
          <div className="columns is-centered">
            <div className="column is-4 is-3-widescreen">
              <PricingPlan
                name="Free"
                price="Free"
                features={["100 conversations", ...COMMON_FEATURES]}
              />
            </div>
            <div className="column is-4 is-3-widescreen">
              <PricingPlan
                name="Basic"
                currency="Rs."
                price="2000"
                interval="month"
                features={["500 conversations", ...COMMON_FEATURES]}
              />
            </div>
            <div className="column is-4 is-3-widescreen">
              <PricingPlan
                name="Plus"
                currency="Rs."
                price="5000"
                interval="month"
                features={["2000 conversations", ...COMMON_FEATURES]}
              />
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-12 is-9-widescreen">
              <div className="card has-background-info-light">
                <div className="card-content">
                  To purchase a plan, to design a custom plan to suit your
                  needs, or for any other questions,
                  <br />
                  write to us at{" "}
                  <a href="mailto:hi@dialogform.in">hi@dialogform.in</a>
                </div>
              </div>
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
        <Link className="is-link mx-3 is-uppercase" to="/privacy">
          Privacy
        </Link>
      </footer>
    </Layout>
  );
}

export default IndexPage;
