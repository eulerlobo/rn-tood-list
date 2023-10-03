import React, {forwardRef} from 'react';
import {View, TextInput, Text} from 'react-native';

import {presets} from './input.styles';

const Input = forwardRef(
  ({placeholder, text, style, ...props}, forwardedRef) => {
    const preset = presets();

    return (
      <TextInput
        ref={forwardedRef}
        {...props}
        placeholder={placeholder}
        value={text}
        style={[preset, style]}
      />
    );
  },
);

export default Input;
