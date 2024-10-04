import "./mystyles.scss";

import classNames from "classnames";
import { Link } from "gatsby";
import React from "react";
import { BsChatQuoteFill } from "react-icons/bs";

import AdminScreenshot from "../components/admin-screenshot";
import DemoChatButton from "../components/demo-chat-button";
import { Faq, FaqQuestion, FaqResponse } from "../components/faq";
import GetStarted from "../components/get-started";
import Layout from "../components/layout";
import MemberProfile from "../components/member-profile";
import PricingPlansSection from "../components/pricing-plans-section";
import SEO from "../components/seo";
import amarnathPic from "../images/amarnath.png";
import rajatPic from "../images/rajat.png";
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
              the form of conversations between a teacher and the user.
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
                imageUrl={amarnathPic}
                name="S K Amarnath"
                description="Jawahar Navodaya Vidyalaya, NIT - Karnataka, computer scientist, software architect"
              />
            </div>
            <div className="column">
              <MemberProfile
                imageUrl={saumyaPic}
                name="Saumya Kanoria"
                description="Cornell University, U of Illinois Urbana Champaign, computer scientist, entrepreneur"
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
          <h3 className="title">Get Started for Free</h3>
          <div className="block" />
          <h4 className="is-size-5 has-text-grey">
            There is no time limit on the <b>fully functional</b> free plan. See
            all our pricing plans below.
          </h4>
          <div className="block" />
          <div className="columns">
            <div className="column">
              <GetStarted
                title="Thinkific"
                link="https://docs.dialogform.in/using-dialogform-with-thinkific"
              >
                <b>
                  We&apos;re proud to say that we are now part of
                  Thinkific&apos;s App Store!
                </b>{" "}
                To start building Thinkific lesson content with DialogForm,
                simply install our app with one click.
              </GetStarted>
            </div>
            <div className="column">
              <GetStarted title="LTI Integration" buttonText="Coming Soon">
                If your Learning Management System supports LTI 1.3/Advantage
                (for example Moodle, Canvas, Blackboard, D2L and Sakai), just
                add DialogForm as an external LTI tool.
              </GetStarted>
            </div>
            <div className="column">
              <GetStarted
                title="Custom"
                link="https://docs.dialogform.in/using-dialogform-with-other-lmses"
              >
                Using another Learning Management System or building your own?
                Integrate DialogForm with embed code, share links and webhooks.
              </GetStarted>
            </div>
          </div>
        </div>
      </section>
      <PricingPlansSection />
      <section className="section has-background-primary-light">
        <div className="container">
          <h3 className="title has-text-centered">FAQs</h3>
          <h4 className="subtitle has-text-primary-dark">
            Pricing Plan Questions
          </h4>
          <Faq id="chat-definition">
            <FaqQuestion>
              What exactly is a <b>chat</b>?
            </FaqQuestion>
            <FaqResponse>
              <p className="block">
                One user interacting with some DialogForm content, from the
                start of the interaction <b>until it concludes</b> (i.e. no
                further response is expected from the user), is considered one
                chat.
              </p>
              <p className="block">
                For instance, if you click on the &lsquo;See an Example&rsquo;
                button above and interact with the content until no further
                response is expected from you, that would be one chat. It
                doesn&apos;t matter how long the interaction is, it&apos;s still
                one single chat.
              </p>
            </FaqResponse>
          </Faq>
          <Faq id="no-service-interruption">
            <FaqQuestion>
              What happens if I go over my chat quota for the month?
            </FaqQuestion>
            <FaqResponse>
              <p className="block">
                DialogForm will continue to work for you and your users as
                usual, no matter how much you go over the limit!
              </p>
              <p className="block">
                We will contact you to upgrade to a higher plan, or to a custom
                plan designed as per your needs. Until you do, you will continue
                to be charged at the rate of your current plan. We trust that
                you will work with us to upgrade your plan as and when required.
              </p>
            </FaqResponse>
          </Faq>
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
