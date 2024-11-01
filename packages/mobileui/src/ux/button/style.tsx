import { ThemeProps } from '../theme/default';
import type { CSSProperties } from 'react';

export interface ButtonStyles {
  solid_default: CSSProperties;
  solid_primary: CSSProperties;
  solid_success: CSSProperties;
  solid_warning: CSSProperties;
  solid_danger: CSSProperties;
  solid_default_text: CSSProperties;
  solid_primary_text: CSSProperties;
  solid_success_text: CSSProperties;
  solid_warning_text: CSSProperties;
  solid_danger_text: CSSProperties;

  outline_default: CSSProperties;
  outline_primary: CSSProperties;
  outline_success: CSSProperties;
  outline_warning: CSSProperties;
  outline_danger: CSSProperties;
  outline_default_text: CSSProperties;
  outline_primary_text: CSSProperties;
  outline_success_text: CSSProperties;
  outline_warning_text: CSSProperties;
  outline_danger_text: CSSProperties;

  none_default: CSSProperties;
  none_primary: CSSProperties;
  none_success: CSSProperties;
  none_warning: CSSProperties;
  none_danger: CSSProperties;
  none_default_text: CSSProperties;
  none_primary_text: CSSProperties;
  none_success_text: CSSProperties;
  none_warning_text: CSSProperties;
  none_danger_text: CSSProperties;
}
type TGetStyle = (theme: ThemeProps) => ButtonStyles;

const fn: TGetStyle = (theme: ThemeProps) => ({
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
export default fn;
