import React from 'react';
import {View} from 'react-native';

import {presets} from './separator.styles';

const Separator = ({style}) => {
  const preset = presets();

  return <View style={[preset, style]} />;
};

export default Separator;
