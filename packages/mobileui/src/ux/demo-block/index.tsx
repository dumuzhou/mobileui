import classnames from 'classnames';
import React, { FC } from 'react';
import { Button as TaroButton, Form, View, Text } from '@tarojs/components';
//import { ButtonProps } from "@tarojs/components/types/Button";
import Taro from '@tarojs/taro';
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import './index.less';

export type DemoBlockProps = {
  isFull?: boolean;
  title?: string;
  padding?: number;
  background?: string;
  children?: React.ReactNode;
};
const defaultProps: DemoBlockProps = {
  isFull: false,
  title: '示例',
  padding: 24,
  background: '#ffffff',
};
const TmButton = function (p: DemoBlockProps) {
  const props = { ...defaultProps, ...p };
  const { isFull, padding } = props;
  return (
    <View className={`m-demo-block ${isFull ? 'm-demo-block-full' : ''}`}>
      {!isFull && (
        <View className={'m-demo-block-titles'}>
          <Text className="m-demo-block-title">{props.title}</Text>
        </View>
      )}
      <View
        className={classnames(
          `m-demo-block-item`,

          isFull && 'm-demo-block-item-full'
        )}
        style={{
          backgroundColor: props.background,
          padding,
        }}
      >
        {props.children}
      </View>
    </View>
  );
};
export default TmButton;
