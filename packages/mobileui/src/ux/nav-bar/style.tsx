import { TextStyle, ViewStyle } from 'react-native';
import { ThemeProps } from '../theme/default';
import { CSSProperties } from 'react';

export interface DemoStyles {
  wrap: CSSProperties;
  text: CSSProperties;
}
type IGenStyle = (theme: ThemeProps) => DemoStyles;

const genStyle: IGenStyle = (theme: ThemeProps) => ({
  wrap: {
    //backgroundColor: theme.primary,
    //paddingLeft: 10,
  },
  text: {
    //color: theme.danger,
  },
});
export default genStyle;
