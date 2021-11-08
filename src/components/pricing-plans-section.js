import React from "react";

import HelpIndicator from "./help-indicator";
import HelpPhrase from "./help-phrase";
import PricingPlan from "./pricing-plan";

function PricingPlansSection() {
  const COMMON_FEATURES = [
    "#Common to all plans",
    <HelpPhrase key="no-service-interruption" href="#no-service-interruption">
      No service interruption or hidden cost if chat quota exceeded
      <HelpIndicator />
    </HelpPhrase>,
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

  const isIndia = Intl.DateTimeFormat()
    .resolvedOptions()
    .timeZone?.includes("Calcutta");

  const currency = isIndia ? "INR" : "USD";

  const chatPhrase = (
    <HelpPhrase href="#chat-definition">
      chats
      <HelpIndicator />
    </HelpPhrase>
  );

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
              features={[
                <>
                  100 {chatPhrase}
                  /month
                </>,
                ...COMMON_FEATURES,
              ]}
            />
          </div>
          <div className="column is-4 is-3-widescreen">
            <PricingPlan
              name="Basic"
              currency={currency}
              price={isIndia ? "2000" : "30"}
              interval="month"
              features={[
                <>
                  1000 {chatPhrase}
                  /month
                </>,
                ...COMMON_FEATURES,
              ]}
            />
          </div>
          <div className="column is-4 is-3-widescreen">
            <PricingPlan
              name="Plus"
              currency={currency}
              price={isIndia ? "5000" : "75"}
              interval="month"
              features={[
                <>
                  5000 {chatPhrase}
                  /month
                </>,
                ...COMMON_FEATURES,
              ]}
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
    </section>
  );
}

export default PricingPlansSection;
