import classnames from 'classnames';
import React, { FC, ReactNode, useState, useEffect, useContext } from 'react';
import { Button as TaroButton, Form, View, Text } from '@tarojs/components';
import { ButtonProps as ButtonPropsNative } from '@tarojs/components/types/Button';
import Taro from '@tarojs/taro';
import { NativeProps, withNativeProps } from '../utils/native-props';
import { ThemeContext } from '../theme';
import navBarStyles from './style';
//import Icon from '../icon';
//import { Icon } from '../index';
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import './index.less';

import { useSize } from '../index';

const classPrefix = `amu-nav-bar`;

export type NavBarProps = {
  back?: string | null;
  backArrow?: ReactNode;
  left?: ReactNode;
  right?: ReactNode;
  onBack?: Function;
  subTitle?: string;
} & NativeProps;
const defaultProps: NavBarProps = {
  //backArrow: <Icon name="Left-Outlined" />,
};

const NavBar = function (p: NavBarProps) {
  const [marginMax, setMarginMax] = useState(0);
  if (defaultProps.backArrow === undefined) {
    //defaultProps.backArrow = <Icon name="left" size={24} />;
  }
  const props = { ...defaultProps, ...p };
  const { style, ...restProps } = props;

  const [boxEl, boxRnCallBack, boxSize] = useSize([]);
  const [leftEl, leftRnCallBack, leftSize] = useSize([]);
  const [rightEl, rightRnCallBack, rightSize] = useSize([]);
  const theme = useContext(ThemeContext);
  const styles = navBarStyles(theme);

  useEffect(() => {
    setMarginMax(
      // @ts-ignore
      leftSize.width > rightSize.width ? leftSize.width : rightSize.width
    );
  }, [leftSize, rightSize]);

  return withNativeProps(
    props,
    <View
      // @ts-ignore
      id={boxEl}
      // @ts-ignore
      onLayout={boxRnCallBack}
      className={classnames(`${classPrefix}`)}
      style={{ ...styles.wrap, ...style }}
    >
      <View
        // @ts-ignore
        id={leftEl}
        // @ts-ignore
        onLayout={leftRnCallBack}
        className={classnames(`${classPrefix}-left`)}
        onClick={() => {
          if (props.onBack) {
            props.onBack();
          } else {
            Taro.navigateBack();
          }
        }}
      >
        {props.back !== null && !!props.backArrow && (
          <View className={classnames(`${classPrefix}-left-ico`)}>
            {!!props.backArrow && props.backArrow}
          </View>
        )}
        {props.back !== null && !!props.back && (
          <View className={classnames(`${classPrefix}-left-texts`)}>
            <Text className={classnames(`${classPrefix}-left-text`)}>
              {props.back}
            </Text>
          </View>
        )}
        {props.back !== null && !!props.left && (
          <Text className={classnames(`${classPrefix}-left-text`)}>
            {props.left}
          </Text>
        )}
      </View>
      <View
        className={classnames(`${classPrefix}-title`)}
        style={{
          marginLeft: marginMax,
          marginRight: marginMax,
        }}
      >
        <View
          className={classnames(`${classPrefix}-title-texts`)}
          style={{
            // @ts-ignore
            maxWidth: boxSize.width - marginMax * 2,
          }}
        >
          <Text
            className={classnames(`${classPrefix}-title-text`)}
            // @ts-ignore
            numberOfLines={1}
          >
            {!!props.children && props.children}
          </Text>
        </View>
        {!!props.subTitle && (
          <Text
            className={classnames(`${classPrefix}-title-text-sub`)}
            // @ts-ignore
            numberOfLines={1}
          >
            {!!props.subTitle && props.subTitle}
          </Text>
        )}
      </View>

      <View
        className={classnames(`${classPrefix}-right`)}
        // @ts-ignore
        id={rightEl}
        // @ts-ignore
        onLayout={rightRnCallBack}
      >
        {!!props.right && props.right}
      </View>
    </View>
  );
};
export default NavBar;
