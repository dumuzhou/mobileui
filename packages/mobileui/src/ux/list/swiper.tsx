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
import { Divider } from '../index';
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import './index.less';

const classPrefix = `amu-list`;

export type SwiperItemProps = {
  title?: ReactNode;
  children?: any;
};

/* istanbul ignore next */
export const SwiperItem: FC<SwiperItemProps> = (props: any) => {
  const { children, ...restProps } = props;
  return (
    <SwiperItemTaro {...restProps}>{!!children && children}</SwiperItemTaro>
  );
};

export type SwiperProps = {
  activeKey?: string | null;
  onIndexChange?: Function;
  children?: any;

  defaultIndex?: number;
  mode?: 'default' | 'card';
  header?: string;
};
const defaultProps: SwiperProps = {
  activeKey: '',

  defaultIndex: 0,
  mode: 'default',
};
export const Swiper = function (p: SwiperProps) {
  const props = { ...defaultProps, ...p };
  const { mode, header } = props;
  const [defaultIndex, setDefaultIndex] = useState(props.defaultIndex);

  return (
    <View
      className={classnames(
        `${classPrefix}`,

        {
          [`${classPrefix}-card`]: props.mode === 'card',
        }
      )}
    >
      {!!header && (
        <View
          className={classnames(
            `${classPrefix}-header`,

            {
              [`${classPrefix}-header-card`]: props.mode === 'card',
            }
          )}
        >
          <Text className={classnames(`${classPrefix}-header-title`)}>
            {header}
          </Text>
        </View>
      )}
      <View
        className={classnames(
          `${classPrefix}-body`,

          {
            [`${classPrefix}-body-card`]: props.mode === 'card',
          }
        )}
      >
        {mode === 'default' && <Divider noMargin />}
        {!!props.children && props.children}
        {mode === 'default' && <Divider noMargin />}
      </View>
    </View>
  );
};
//export default SideBar;
