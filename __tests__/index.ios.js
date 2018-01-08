import 'react-native';
import React from 'react';
import FirstTimeLaunch from '../src/screens/first-time/first-time.view';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <FirstTimeLaunch />
  );
});
