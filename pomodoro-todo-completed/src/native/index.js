import React, { Component } from 'react';
import { Router, Stack } from 'react-native-router-flux';

import { StyleProvider } from 'native-base';
import { AppLoading, Font } from 'expo';
import getTheme from '../theme/components';
import AppTheme from '../theme/variables/material';

import Routes from './routes/index';

class Root extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
    });
    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(AppTheme)}>
        <Router>
          <Stack key="root">{Routes}</Stack>
        </Router>
      </StyleProvider>
    );
  }
}

Root.propTypes = {};

export default Root;
