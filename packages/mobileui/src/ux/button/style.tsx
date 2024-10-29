import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { ThemeProps } from '../theme/default';

export interface ButtonStyles {
  solid_default: ViewStyle;
  solid_primary: ViewStyle;
  solid_success: ViewStyle;
  solid_warning: ViewStyle;
  solid_danger: ViewStyle;
  solid_default_text: TextStyle;
  solid_primary_text: TextStyle;
  solid_success_text: TextStyle;
  solid_warning_text: TextStyle;
  solid_danger_text: TextStyle;

  outline_default: ViewStyle;
  outline_primary: ViewStyle;
  outline_success: ViewStyle;
  outline_warning: ViewStyle;
  outline_danger: ViewStyle;
  outline_default_text: TextStyle;
  outline_primary_text: TextStyle;
  outline_success_text: TextStyle;
  outline_warning_text: TextStyle;
  outline_danger_text: TextStyle;

  none_default: ViewStyle;
  none_primary: ViewStyle;
  none_success: ViewStyle;
  none_warning: ViewStyle;
  none_danger: ViewStyle;
  none_default_text: TextStyle;
  none_primary_text: TextStyle;
  none_success_text: TextStyle;
  none_warning_text: TextStyle;
  none_danger_text: TextStyle;
}

export default (theme: ThemeProps) => ({
  // 颜色
  solid_default: {
    borderColor: theme.border,
    backgroundColor: 'transparent',
  },
  solid_primary: {
    backgroundColor: theme.primary,
    borderColor: theme.primary,
  },
  solid_success: {
    backgroundColor: theme.success,
    borderColor: theme.success,
  },
  solid_warning: {
    backgroundColor: theme.warning,
    borderColor: theme.warning,
  },
  solid_danger: {
    backgroundColor: theme.danger,
    borderColor: theme.danger,
  },
  // 文字颜色
  solid_default_text: {
    color: theme.text,
  },
  solid_primary_text: {
    color: theme.white,
  },
  solid_success_text: {
    color: theme.white,
  },
  solid_warning_text: {
    color: theme.white,
  },
  solid_danger_text: {
    color: theme.white,
  },

  // 颜色
  outline_default: {
    borderColor: theme.border,
    backgroundColor: 'transparent',
  },
  outline_primary: {
    borderColor: theme.primary,
    backgroundColor: 'transparent',
  },
  outline_success: {
    borderColor: theme.success,
    backgroundColor: 'transparent',
  },
  outline_warning: {
    borderColor: theme.warning,
    backgroundColor: 'transparent',
  },
  outline_danger: {
    borderColor: theme.danger,
    backgroundColor: 'transparent',
  },
  // 文字颜色
  outline_default_text: {
    color: theme.text,
  },
  outline_primary_text: {
    color: theme.primary,
  },
  outline_success_text: {
    color: theme.success,
  },
  outline_warning_text: {
    color: theme.warning,
  },
  outline_danger_text: {
    color: theme.danger,
  },

  // 颜色
  none_default: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  none_primary: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  none_success: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  none_warning: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  none_danger: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  // 文字颜色
  none_default_text: {
    color: theme.text,
  },
  none_primary_text: {
    color: theme.primary,
  },
  none_success_text: {
    color: theme.success,
  },
  none_warning_text: {
    color: theme.warning,
  },
  none_danger_text: {
    color: theme.danger,
  },
});
