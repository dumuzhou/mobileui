import classnames from 'classnames';
import { useContext } from 'react';
import { View, Text } from '@tarojs/components';

import { NativeProps, withNativeProps } from '../utils/native-props';
import { ButtonProps as ButtonPropsNative } from '@tarojs/components/types/Button';

import { ThemeContext } from '../theme';
import buttonStyles from './style';

import './index.less';

const classPrefix = `mbu-button`;

type NewProps = Pick<
  ButtonPropsNative,
  Exclude<keyof ButtonPropsNative, 'size'>
>;

export type ButtonProps = {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
  fill?: 'solid' | 'outline' | 'none';
  shape?: 'default' | 'rounded' | 'rectangular';
  size?: 'mini' | 'small' | 'middle' | 'modal' | 'large';
  children?: any;
  textColor?: string;
} & NewProps &
  NativeProps;
const defaultProps: ButtonProps = {
  color: 'default',
  disabled: false,
  fill: 'solid',
  shape: 'default',
  size: 'middle',
};

const Button = function (p: ButtonProps) {
  // @ts-ignore
  const props: Required<ButtonProps> = { ...defaultProps, ...p };
  const {
    textColor,
    color,
    disabled,
    fill,
    shape,
    size,
    children,
    ...restProps
  } = props;
  const theme = useContext(ThemeContext);
  const style = buttonStyles(theme);
  const wrapStyle = Object.assign({}, style[`${fill}_${color}`]);
  const textStyle = Object.assign(
    {},
    style[`${fill}_${color}_text`],
    textColor ? { color: textColor } : {}
  );

  return withNativeProps(
    props,

    // @ts-ignore
    <View
      // @ts-ignore
      style={wrapStyle}
      // @ts-ignore
      className={classnames(
        `${classPrefix}`,
        props.size && `${classPrefix}-${props.size}`,
        props.shape && `${classPrefix}-shape-${props.shape}`,
        props.disabled && `${classPrefix}-disabled`
      )}
      {...restProps}
    >
      {typeof props.children === 'string' && (
        <Text
          style={textStyle}
          className={classnames(
            `${classPrefix}-text`,
            props.color ? `${classPrefix}-text-${props.color}` : null,
            props.size ? `${classPrefix}-text-${props.size}` : null,
            props.fill ? `${classPrefix}-text-${props.fill}` : null,
            (props.fill === 'outline' || props.fill === 'none') && props.color
              ? `${classPrefix}-text-fill-${props.color}`
              : null,
            {
              [`${classPrefix}-text-disabled`]: props.disabled,
            }
          )}
        >
          {props.children}
        </Text>
      )}
    </View>
  );
};
export default Button;
