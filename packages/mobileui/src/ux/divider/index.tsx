import classnames from 'classnames';
//import PropTypes, { InferProps } from 'prop-types';
import React, { FC, useContext } from 'react';
import { Button as TaroButton, Form, View, Text } from '@tarojs/components';
import { ThemeContext } from '../theme';
import dividerStyles from './style';
import { ButtonProps as ButtonPropsNative } from '@tarojs/components/types/Button';
import Taro from '@tarojs/taro';
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import './index.less';

const classPrefix = `amu-divider`;

type CusStyle = {
  color?: string;
  borderColor?: string;
  borderStyle?: string;
};

export type DividerProps = {
  direction?: 'horizontal' | 'vertical';
  children?: any;
  contentPosition?: 'center' | 'left' | 'right';
  style?: CusStyle;
  noMargin?: boolean;
};
const defaultProps: DividerProps = {
  direction: 'horizontal',
  contentPosition: 'center',
  noMargin: false,
};
const Divider = function (p: DividerProps) {
  const props = { ...defaultProps, ...p };
  const { direction, contentPosition, style: cusStyle } = props;
  const theme = useContext(ThemeContext);
  const style = dividerStyles(theme, cusStyle);
  if (props.direction === 'vertical') {
    return <View style={style.ver_line}></View>;
  }
  const lineEl = (
    <View
      className={classnames(`${classPrefix}-line`)}
      style={style.line}
    ></View>
  );
  return (
    <View
      className={classnames(
        `${classPrefix}`,
        props.children ? `${classPrefix}-cld` : null,
        !props.noMargin ? `${classPrefix}-margin` : null
      )}
    >
      {contentPosition === 'right' && lineEl}
      <View className={classnames(`${classPrefix}-wrap`)}>
        {lineEl}
        {!!props.children && (
          <View className={classnames(`${classPrefix}-texts`)}>
            <Text
              className={classnames(`${classPrefix}-text`)}
              style={style.text}
            >
              {props.children}
            </Text>
          </View>
        )}
        {!!props.children && lineEl}
      </View>
      {contentPosition === 'left' && lineEl}
    </View>
  );
};
export default Divider;
