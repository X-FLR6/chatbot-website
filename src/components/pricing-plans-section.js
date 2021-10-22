import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useState } from "react";

import PricingPlan from "./pricing-plan";

function NoServiceInterruptionModal({ isActive, onCloseClick }) {
  return (
    <div className={classNames("modal", { "is-active": isActive })}>
      <div className="modal-background" onClick={onCloseClick} />
      <div className="modal-content">
        <div className="card">
          <div className="card-content">
            <div className="block">
              If you go above the monthly chat limit, we will contact you to
              upgrade your plan. Until your plan is upgraded, you will be
              continue to be charged at the rate of your current plan, no matter
              how much you go over the limit, and your service will not be
              interrupted.
            </div>
            <div className="block">
              We trust that you will work with us to upgrade your plan as and
              when necessary.
            </div>
          </div>
          <footer className="card-footer">
            <a
              href="#"
              className="card-footer-item"
              onClick={(event) => {
                event.preventDefault();
                onCloseClick();
              }}
            >
              Close
            </a>
          </footer>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onCloseClick}
      />
    </div>
  );
}

NoServiceInterruptionModal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onCloseClick: PropTypes.func.isRequired,
};

function PricingPlansSection() {
  const [
    isNoServiceInterruptionModalActive,
    setIsNoServiceInterruptionModalActive,
  ] = useState(false);

  const COMMON_FEATURES = [
    <div key="no-service-interruption">
      <div className="has-text-success-dark">
        No service interruption if limit crossed
      </div>
      <button
        className="button is-small is-fullwidth is-success is-light mt-1"
        style={{ height: "1.5em" }}
        onClick={() => setIsNoServiceInterruptionModalActive(true)}
      >
        How does this work?
      </button>
    </div>,
    "#Common to all plans",
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

  return (
    <section id="pricing-plans" className="section">
      <div className="container">
        <h3 className="title has-text-centered">Pricing Plans</h3>
        <div className="columns is-centered">
          <div className="column is-4 is-3-widescreen">
            <PricingPlan
              name="Free"
              price="Free"
              interval="forever"
              features={["100 chats/month", ...COMMON_FEATURES]}
            />
          </div>
          <div className="column is-4 is-3-widescreen">
            <PricingPlan
              name="Basic"
              currency="Rs."
              price="2000"
              interval="month"
              features={["1000 chats/month", ...COMMON_FEATURES]}
            />
          </div>
          <div className="column is-4 is-3-widescreen">
            <PricingPlan
              name="Plus"
              currency="Rs."
              price="5000"
              interval="month"
              features={["5000 chats/month", ...COMMON_FEATURES]}
            />
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-12 is-9-widescreen">
            <div className="card has-background-info-light">
              <div className="card-content">
                To purchase a plan, to design a custom plan to suit your needs,
                or for any other questions,
                <br />
                write to us at{" "}
                <a href="mailto:hi@dialogform.in">hi@dialogform.in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NoServiceInterruptionModal
        isActive={isNoServiceInterruptionModalActive}
        onCloseClick={() => setIsNoServiceInterruptionModalActive(false)}
      />
    </section>
  );
}

export default PricingPlansSection;
