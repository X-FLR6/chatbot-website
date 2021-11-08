import PropTypes from "prop-types";
import React from "react";

export function FaqQuestion({ children }) {
  return <div className="title is-size-4 has-text-grey">{children}</div>;
}

FaqQuestion.propTypes = {
  children: PropTypes.node.isRequired,
};

export function FaqResponse({ children }) {
  return <div>{children}</div>;
}

FaqResponse.propTypes = {
  children: PropTypes.node.isRequired,
};

export function Faq({ id, children }) {
  return (
    <div id={id} className="block">
      <div className="is-flex">
        <div className="is-flex-shrink-0 mr-2 title is-size-4 has-text-primary">
          Q
        </div>
        <div className="is-flex-grow-1">{children}</div>
      </div>
    </div>
  );
}

Faq.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};
