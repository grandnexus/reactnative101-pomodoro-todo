import React from "react";
import PropTypes from "prop-types";

const Focus = ({ Layout }) => (
  <Layout />
);

Focus.propTypes = {
  Layout: PropTypes.func.isRequired,
};

Focus.defaultProps = {};

export default Focus;
