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

import { NativeProps, withNativeProps } from '../utils/native-props';
import Taro from '@tarojs/taro';
import demoStyles from './style';
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import './index.less';

const classPrefix = `amu-capsule-tabs`;

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
  const [scrollLeft, setScrollLeft] = useState(0);
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
  useEffect(() => {}, [scrollLeft]);
  useEffect(() => {
    setTimeout(() => [setScrollLeft(100)], 4000);
  }, []);

  return withNativeProps(
    props,

    <ScrollView scrollX scrollLeft={scrollLeft} scrollWithAnimation>
      <View className={classnames(`${classPrefix}-wraps`)}>
        <View className={classnames(`${classPrefix}`)} {...restProps}>
          {['水果', '蔬菜', '动物', '动物', '动物', '动物'].map(
            (item, index) => {
              return (
                <View
                  key={index}
                  className={classnames(`${classPrefix}-items`)}
                >
                  <View
                    className={classnames(
                      `${classPrefix}-item`,
                      index === 0 && `${classPrefix}-item-crt`
                    )}
                  >
                    <Text
                      className={classnames(
                        `${classPrefix}-text`,
                        index === 0 && `${classPrefix}-text-crt`
                      )}
                    >
                      {item}
                    </Text>
                  </View>
                </View>
              );
            }
          )}
        </View>
      </View>
    </ScrollView>
  );
};
export default Demo;
