import React from 'react';
import {Text} from 'react-native';
import {presets} from './styledText.styles';

const StyledText = ({children, style = undefined, type = 'default'}) => {
  const preset = presets();

  return <Text style={[preset[type], style]}>{children}</Text>;
};

StyledText.type = {
  default: 'default',
  header: 'header',
  label: 'label',
};

export default StyledText;
