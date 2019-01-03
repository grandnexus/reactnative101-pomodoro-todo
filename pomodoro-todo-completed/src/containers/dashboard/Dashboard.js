import React from "react";
import PropTypes from "prop-types";

const Dashboard = ({ Layout }) => (
  <Layout />
);

Dashboard.propTypes = {
  Layout: PropTypes.func.isRequired,
};

Dashboard.defaultProps = {};

export default Dashboard;
