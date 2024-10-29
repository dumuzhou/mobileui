import classnames from 'classnames';
//import PropTypes, { InferProps } from 'prop-types';
import React, {
  useState,
  useEffect,
  FC,
  ReactNode,
  ReactElement,
  ComponentProps,
} from 'react';
import { Form, View, Text } from '@tarojs/components';
import { ButtonProps as ButtonPropsNative } from '@tarojs/components/types/Button';
import Taro from '@tarojs/taro';
import {
  Swiper as SwiperTaro,
  SwiperItem as SwiperItemTaro,
} from '@tarojs/components';

import { traverseReactNode } from '../utils/traverse-react-node';
import { Divider, Space } from '../index';
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import './index.less';

const classPrefix = `amu-list-item`;

export type SwiperItemProps = {
  title?: ReactNode;
  children?: any;
  prefix?: ReactNode;
  extra?: ReactNode;
  onClick?: any;
};

/* istanbul ignore next */
export const SwiperItem: FC<SwiperItemProps> = (props: any) => {
  const { children, ...restProps } = props;
  return (
    <View {...restProps}>
      <View className={classnames(`${classPrefix}`)}>
        <View className={classnames(`${classPrefix}-wrap`)}>
          <Space gap={12} align="center">
            {!!props.prefix && props.prefix}
            {typeof props.children === 'string' && (
              <Text className={classnames(`${classPrefix}-text`)}>
                {props.children}
              </Text>
            )}
            {typeof props.children !== 'string' &&
              !!props.children &&
              props.children}
          </Space>
          {!!props.extra && props.extra}
        </View>
        <Divider noMargin />
      </View>
    </View>
  );
};
