import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

const CountdownText = ({ text, color }) => (
  <Text style={{ ...styles.text, color }}>{text}</Text>
);

CountdownText.propTypes = {
  text: PropTypes.string,
};

CountdownText.defaultProps = {
  text: '25 : 00',
  color: 'white'
};

const styles = StyleSheet.create({
  text: {
    marginTop: -15,
    textAlign: 'center',
    fontFamily: 'open-sans-bold',
    fontSize: 80
  }
});

export default CountdownText;
