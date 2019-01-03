import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';

import FocusContainer from '../../containers/focus/Focus';
import FocusComponent from '../components/focus/Focus';

import DashboardContainer from '../../containers/dashboard/Dashboard';
import DashboardComponent from '../components/dashboard/Dashboard';

const Index = (
  <Stack hideNavBar duration={0} gesturesEnabled={false}>
    <Scene
      initial
      hideNavBar
      key="focus"
      component={FocusContainer}
      Layout={FocusComponent}
    />
    <Scene
      hideNavBar
      key="dashboard"
      component={DashboardContainer}
      Layout={DashboardComponent}
    />
  </Stack>
);

export default Index;
