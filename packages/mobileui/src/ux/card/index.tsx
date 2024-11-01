import classnames from 'classnames';
import { useContext, useMemo } from 'react';
//import PropTypes, { InferProps } from 'prop-types';
import React, { FC, ReactNode, useState, useEffect } from 'react';
import { Form, View, Text } from '@tarojs/components';
import { ThemeContext } from '../theme';
//import { LocaleContext } from '../local-provider';
import { Divider, Button } from '../index';

import { NativeProps, withNativeProps } from '../utils/native-props';
import Taro from '@tarojs/taro';
import demoStyles from './style';
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import './index.less';

const classPrefix = `amu-card`;

export type DemoProps = {
  textStyle?: React.CSSProperties;
} & NativeProps;

type CustomRequired<T, K extends keyof T> = {
  [P in K]-?: T[P];
} & Omit<T, K>;

type DemoPropsRequired = CustomRequired<DemoProps, 'textStyle'>;

const defaultProps: DemoProps = {
  style: {},
  textStyle: {},
};

const Demo = function (p: DemoProps) {
  // @ts-ignore
  const props: DemoPropsRequired = { ...defaultProps, ...p };
  const { style, textStyle: textS, children, ...restProps } = props;
  const theme = useContext(ThemeContext);
  //const locale = useContext(LocaleContext);
  const styles = demoStyles(theme);
  //console.log('国际化');
  //console.log(locale);
  console.log('主题');
  console.log(theme);
  const wrapStyle = useMemo(() => {
    return {
      ...styles.wrap,
      ...style,
    };
  }, [style]);
  const textStyle = useMemo(() => {
    return {
      ...styles.text,
      ...textS,
    };
  }, [style]);

  return withNativeProps(
    props,

    <View className={classnames(`${classPrefix}`)} {...restProps}>
      <View className={classnames(`${classPrefix}-header`)}>
        <View className={classnames(`${classPrefix}-header-titles`)}>
          <View className={classnames(`${classPrefix}-header-ico`)}></View>

          <Text className={classnames(`${classPrefix}`)}>标题</Text>
        </View>

        <View className={classnames(`${classPrefix}-header-right`)}></View>
      </View>
      <Divider noMargin />
      <View className={classnames(`${classPrefix}-body`)}>
        <View className={classnames(`${classPrefix}-body-content`)}>
          <Text className={classnames(`${classPrefix}-text`)}>内容</Text>
        </View>
        <Divider noMargin />
        <View className={classnames(`${classPrefix}-footer`)}>
          <Button color="primary">底部按钮</Button>
        </View>
      </View>
    </View>
  );
};
export default Demo;
