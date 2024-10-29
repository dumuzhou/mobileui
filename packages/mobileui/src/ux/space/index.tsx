import classnames from 'classnames';
import React, { FC, useContext } from 'react';
import { View } from '@tarojs/components';
import { ThemeContext } from '../theme';
import { ThemeProps } from '../theme/default';
import { NativeProps, withNativeProps } from '../utils/native-props';
import './index.less';

const classPrefix = `mbu-space`;

export type SpaceProps = {
  //  方向
  direction?: 'horizontal' | 'vertical';
  // 主轴
  justify?: 'start' | 'center' | 'end' | 'between' | 'evenly' | 'around';
  // 交叉轴
  align?: 'start' | 'center' | 'end' | 'stretch';
  // 是否换行
  wrap?: boolean;
  // 空隙
  gap?: number;
  children?: React.ReactNode;
} & NativeProps;

const defaultProps: SpaceProps = {
  direction: 'horizontal',
  justify: 'start',
  align: 'start',
  wrap: false,
};

const Space = (p: SpaceProps) => {
  const theme: ThemeProps = useContext(ThemeContext);
  const props = { ...defaultProps, ...{ gap: theme.space }, ...p };
  const { children, direction, justify, align, wrap, gap, ...restProps } =
    props;

  return withNativeProps(
    props,
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
        marginRight: -gap,
        marginBottom: -gap,
      }}
    >
      {React.Children.map(props.children, (child) => {
        return (
          !!child && (
            <View
              className={classnames(`${classPrefix}-item`, {
                [`${classPrefix}-item-wrap`]: wrap,
                [`${classPrefix}-item-vertical`]: direction === 'vertical',
              })}
              style={{
                marginRight: gap,
                marginBottom: gap,
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
