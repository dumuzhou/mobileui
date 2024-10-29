import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { ThemeProps } from '../theme/default';

export interface DividerStyles {
  line: ViewStyle;
  text: TextStyle;
  ver_line: ViewStyle;
}

export default (theme: ThemeProps, cusStyle: any) => {
  const style = {
    line: {
      borderColor: theme.border,
      borderStyle: 'solid',
    },
    text: {
      color: theme.weak,
    },
    ver_line: {
      borderWidth: 0,
      borderLeftWidth: 1,
      height: 14,
      borderColor: theme.border,
      borderStyle: 'solid',
    },
  };
  style.line = {
    ...style.line,
    ...(cusStyle?.borderColor
      ? {
          borderColor: cusStyle.borderColor,
        }
      : {}),

    ...(cusStyle?.borderStyle
      ? {
          borderStyle: cusStyle.borderStyle,
        }
      : {}),
  };
  style.ver_line = {
    ...style.ver_line,
    ...style.line,
  };
  style.text = {
    ...style.text,
    ...(cusStyle?.color
      ? {
          color: cusStyle.color,
        }
      : {}),
  };

  return style;
};
