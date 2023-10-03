import React, {useCallback} from 'react';
import {Text, Pressable} from 'react-native';

import {presets} from './button.styles';

const Button = ({
  text,
  onPress = undefined,
  color = undefined,
  disabled = false,
  type = 'default',
  style = undefined,
  textStyle = undefined,
  selected = false,
}) => {
  const preset = presets(color, disabled, selected)[type];

  const styleButton = useCallback((pressed = false) => {
    return {
      opacity: pressed ? 0.7 : 1,
    };
  }, []);

  return (
    <Pressable
      testID="button"
      disabled={disabled}
      accessible={true}
      style={({pressed}) => [preset.button, style, styleButton(pressed)]}
      onPress={onPress}>
      {type !== 'radial' && (
        <Text style={[preset.text, textStyle]}>{text}</Text>
      )}
    </Pressable>
  );
};

Button.type = {
  default: 'default',
  radial: 'radial',
  underline: 'underline',
};

export default Button;
