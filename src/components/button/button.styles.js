export const presets = (color, disabled, selected) => {
  return {
    default: {
      button: {
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: disabled ? '#CCC' : color ? color : '#2196F3',
        borderRadius: 9999,
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
      },
      text: {
        color: disabled ? '#7C8898' : '#FFFFFF',
        fontWeight: 500,
        fontSize: 16,
        paddingVertical: 14,
      },
    },
    radial: {
      button: {
        borderRadius: 9999,
        height: 32,
        width: 32,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: selected ? (color ? color : '#2196F3') : '#000000',
        backgroundColor: selected ? (color ? color : '#2196F3') : 'transparent',
      },
    },
    underline: {
      button: {
        backgroundColor: 'transparent',
      },
      text: {
        color: disabled ? '#CCC' : color ? color : '#2196F3',
        fontWeight: 500,
        textDecorationLine: 'underline',
        fontSize: 14,
      },
    },
  };
};
