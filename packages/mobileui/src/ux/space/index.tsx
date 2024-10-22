import classnames from 'classnames';
import React, { FC } from 'react';
import { Button as TaroButton, Form, View, Text } from '@tarojs/components';
//import { ButtonProps } from "@tarojs/components/types/Button";
import Taro from '@tarojs/taro';
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import './index.less';

const classPrefix = `amu-space`;
export type SpaceProps = {
  //  方向
  direction?: 'horizontal' | 'vertical';
  // 纵轴
  justify?: 'start' | 'center' | 'end' | 'between' | 'evenly' | 'around';
  // 竖轴
  align?: 'start' | 'center' | 'end' | 'stretch';
  // 是否换行
  wrap?: boolean;
  // 空隙
  gap?: number;
  // 是否块级
  block?: boolean;
  children?: any;
};
const defaultProps: SpaceProps = {
  direction: 'horizontal',
  justify: 'start',
  align: 'start',
  wrap: false,
  gap: 8,
  block: false,
};
const Space = function (p: SpaceProps) {
  const props = { ...defaultProps, ...p };
  const {
    children,
    direction,
    justify,
    align,
    wrap,
    gap,
    block,
    ...restProps
  } = props;
  const isX = direction === 'horizontal';
  return (
    <View
      className={classnames(
        `${classPrefix}`,
        align ? `${classPrefix}-align-${align}` : null,
        {
          [`${classPrefix}-vertical`]: direction === 'vertical',
          [`${classPrefix}-wrap`]: wrap,
        },
        justify ? `${classPrefix}-justify-${justify}` : null
      )}
      {...restProps}
      style={{
        marginBottom: gap ? -gap : 0,
      }}
    >
      {React.Children.map(props.children, (child) => {
        return (
          child !== null &&
          child !== undefined && (
            <View
              className={classnames(`${classPrefix}-item`, {
                [`${classPrefix}-item-wrap`]: wrap,
                [`${classPrefix}-item-vertical`]: direction === 'vertical',
              })}
              style={{
                marginRight: isX ? gap : 0,
                marginBottom: gap,

                ...(block
                  ? {
                      width: '100%',
                    }
                  : {}),
              }}
            >
              {child}
            </View>
          )
        );
      })}
    </View>
  );
};
export default Space;
