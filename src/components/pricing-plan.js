import PropTypes from "prop-types";
import React from "react";
import { IoMdCheckmark } from "react-icons/all";

import styles from "./pricing-plan.module.css";

function PricingPlan({ name, currency, price, interval, features }) {
  return (
    <div className="card has-background-primary-light">
      <div className="card-content">
        <div className="is-size-4 has-text-primary-dark">{name}</div>
        <div className="is-flex is-align-items-baseline">
          <div className="is-size-2">
            {currency ? `${currency} ` : ""}
            {price}
          </div>
          {interval && (
            <div className="is-size-6 has-text-grey">/{interval}</div>
          )}
        </div>
        <div className="block" />
        {features.map((feature) =>
          feature === "-" ? (
            <div className={styles.featureSeparator} />
          ) : (
            <div key={feature} className="is-flex is-align-items-center mb-1">
              <IoMdCheckmark className="is-flex-shrink-0 mr-2 has-text-success-dark" />
              <div>{feature}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

PricingPlan.propTypes = {
  name: PropTypes.string.isRequired,
  currency: PropTypes.string,
  price: PropTypes.string.isRequired,
  interval: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PricingPlan;
