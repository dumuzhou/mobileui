import classnames from 'classnames';
import React, { FC, useContext } from 'react';
import { View } from '@tarojs/components';
//import { ButtonProps } from "@tarojs/components/types/Button";
import { ThemeContext } from '../theme';
import { ThemeProps } from '../theme/default';
//import { AmButtonProps, AmButtonState } from "../../../types/button";
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
  children?: any;
};
const defaultProps: SpaceProps = {
  direction: 'horizontal',
  justify: 'start',
  align: 'start',
  wrap: false,
};
const Space = function (p: SpaceProps) {
  const theme: ThemeProps = useContext(ThemeContext);
  console.log('主题');
  console.log(theme);
  const props = { ...defaultProps, ...{ gap: theme.space }, ...p };
  console.log('props');
  console.log(props);
  const { children, direction, justify, align, wrap, gap, ...restProps } =
    props;
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
