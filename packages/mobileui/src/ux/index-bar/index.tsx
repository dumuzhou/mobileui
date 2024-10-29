import classnames from 'classnames';
import { useContext, useMemo } from 'react';
//import PropTypes, { InferProps } from 'prop-types';
import React, { FC, ReactNode, useState, useEffect } from 'react';
import {
  ScrollView,
  Button as TaroButton,
  Form,
  View,
  Text,
} from '@tarojs/components';
import { ThemeContext } from '../theme';
//import { LocaleContext } from '../local-provider';
import { List } from '../index';
//import IconFont from '@/cms/iconfont';

import { NativeProps, withNativeProps } from '../utils/native-props';
import Taro from '@tarojs/taro';
import demoStyles from './style';
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import './index.less';

const classPrefix = `amu-index-bar`;

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
  console.log('国际化');
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

  // 滑动中 计算当前选中, 时显示圆框
  //oncrt(item) {
  //const clientY = item.touches[0].clientY;
  //const index = ((clientY - this.height) / 16).toFixed(0);
  //if (index !== this.crtIndex) {
  //this.crtIndex = Number(index);
  //this.showPopover = true;
  //clearTimeout(timer);
  //timer = setTimeout(() => {
  //this.showPopover = false;
  //}, 1000);
  //}
  //},

  return withNativeProps(
    props,

    <View
      className={classnames(`${classPrefix}`)}
      //style={wrapStyle}
      {...restProps}
    >
      <ScrollView
        scrollY
        className={classnames(`${classPrefix}-content`)}
        //style={wrapStyle}
        {...restProps}
      >
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return [
            <View className={classnames(`${classPrefix}-header`)}>
              <Text className={classnames(`${classPrefix}-header-text`)}>
                A
              </Text>
            </View>,
            <List>
              <List.Item>1</List.Item>
              <List.Item>2</List.Item>
              <List.Item>3</List.Item>
            </List>,
          ];
        })}
      </ScrollView>

      <View
        className={classnames(`${classPrefix}-rights`)}
        //style={wrapStyle}
        {...restProps}
      >
        {[1, 2, 2, 2, 2, 2, 2].map((item, index) => {
          return (
            <View
              key={index}
              className={classnames(
                `${classPrefix}-rights-item`,
                index === 1 && `${classPrefix}-rights-item-crt`
              )}
            >
              <Text
                className={classnames(
                  `${classPrefix}-text`,
                  index === 1 && `${classPrefix}-text-crt`
                )}
              >
                A
              </Text>
              <View className={classnames(`${classPrefix}-rights-yuans`)}>
                <View className={classnames(`${classPrefix}-rights-yuan`)}>
                  <Text
                    className={classnames(`${classPrefix}-rights-yuan-text`)}
                  >
                    A
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
export default Demo;
