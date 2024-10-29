import classnames from 'classnames';
import React, { FC, ReactNode, useContext } from 'react';
import {
  ButtonProps as TaroButtonProps,
  Button as TaroButton,
  Form,
  View,
  Text,
} from '@tarojs/components';

import { NativeProps, withNativeProps } from '../utils/native-props';
import { ButtonProps as ButtonPropsNative } from '@tarojs/components/types/Button';

import { ThemeContext } from '../theme';
import buttonStyles from './style';

//import { AmButtonProps, AmButtonState } from "../../../types/button";
import './index.less';

const classPrefix = `amu-button`;

type NewProps = Pick<
  ButtonPropsNative,
  Exclude<keyof ButtonPropsNative, 'size'>
>;
export type ButtonProps = {
  icon?: ReactNode;
  loading?: boolean;
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
  fill?: 'solid' | 'outline' | 'none';
  shape?: 'default' | 'rounded' | 'rectangular';
  size?: 'mini' | 'small' | 'middle' | 'modal' | 'large';
  children?: any;
  textColor?: string;
} & NewProps;
const defaultProps: ButtonProps = {
  loading: false,
  color: 'default',
  disabled: false,
  fill: 'solid',
  shape: 'default',
  size: 'middle',
};

const Wrap = (props: any) => {
  const { useView, children, ...restProps } = props;
  if (useView) {
    return <View {...restProps}>{!!children && children}</View>;
  } else {
    return <TaroButton {...restProps}>{!!children && children}</TaroButton>;
  }
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
    loading,
    children,
    icon,
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

    <View className={classnames(`${classPrefix}-wrap`)}>
      <Wrap
        {...restProps}
        style={wrapStyle}
        className={classnames(
          `${classPrefix}`,
          props.size ? `${classPrefix}-${props.size}` : null,
          props.shape ? `${classPrefix}-shape-${props.shape}` : null,
          props.disabled ? `${classPrefix}-${props.disabled}` : null,
          {
            [`${classPrefix}-disabled`]: props.disabled || loading,
          }
        )}
        hoverStyle={{
          opacity: 0.6,
        }}
        useView={loading || icon}
      >
        {(loading || !!icon) && (
          <View
            className={classnames(
              `${classPrefix}-ico`,

              props.size && `${classPrefix}-ico-${props.size}`
            )}
          >
            {!!icon && icon}
          </View>
        )}

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
      </Wrap>
      {(disabled || loading) && (
        <View className={classnames(`${classPrefix}-wrap-disabled`)}></View>
      )}
    </View>
  );
};
export default Button;
