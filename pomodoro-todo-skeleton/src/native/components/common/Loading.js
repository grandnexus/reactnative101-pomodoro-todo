import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import { BarIndicator } from 'react-native-indicators';

import AppTheme from '../../../theme/variables/platform';

const Loading = ({ message }) => (
  <View style={styles.view}>
    <View style={styles.indicator}>
      <BarIndicator color="white" count={5} size={45} />
    </View>
    <Text style={styles.text}>{message}</Text>
  </View>
);

Loading.propTypes = {
  message: PropTypes.string,
};

Loading.defaultProps = {
  message: 'Loading',
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: AppTheme.brandInfo,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  indicator: { marginBottom: 30 },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
});

export default Loading;
