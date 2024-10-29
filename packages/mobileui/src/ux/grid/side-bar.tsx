import classnames from 'classnames';
import { useContext, useMemo, ComponentProps, ReactElement } from 'react';
import React, { FC, ReactNode, useState, useEffect } from 'react';
import { Button as TaroButton, Form, View, Text } from '@tarojs/components';
import { useSize } from '../index';

import { traverseReactNode } from '../utils/traverse-react-node';
import { NativeProps, withNativeProps } from '../utils/native-props';
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import './index.less';

const classPrefix = `amu-grid`;

export type GridItemProps = {
  span?: number;
  children?: ReactNode;
};

/* istanbul ignore next */
export const GridItem: FC<GridItemProps> = (props) => {
  return props.children;
};

export type GridProps = {
  square?: boolean;
  columns?: number;
  gap?: number;
  textStyle?: React.CSSProperties;
} & NativeProps;

type CustomRequired<T, K extends keyof T> = {
  [P in K]-?: T[P];
} & Omit<T, K>;

type DemoPropsRequired = CustomRequired<GridProps, 'textStyle'>;

const defaultProps: GridProps = {
  square: true,
  columns: 0,
  gap: 0,
  style: {},
  textStyle: {},
};

export const Grid = function (p: GridProps) {
  let firstActiveKey: string | null = null;
  // @ts-ignore
  const props: DemoPropsRequired = { ...defaultProps, ...p };
  const {
    square,
    columns,
    gap,
    style,
    textStyle: textS,
    children,
    ...restProps
  } = props;
  const [boxEl, boxRnCallBack, boxSize] = useSize([]);
  const [width, setWidth] = useState(0);
  const wrapStyle = useMemo(() => {
    return {
      //...styles.wrap,
      ...style,
    };
  }, [style]);
  const textStyle = useMemo(() => {
    return {
      //...styles.text,
      ...textS,
    };
  }, [style]);

  const items: ReactElement<ComponentProps<typeof GridItem>>[] = [];

  traverseReactNode(props.children, (child: any, index: any) => {
    if (!React.isValidElement(child)) return;
    // @ts-ignore
    items.push(child);
  });
  useEffect(() => {
    // @ts-ignore
    if (boxSize && boxSize.width && columns) {
      // @ts-ignore
      setWidth((boxSize.width - gap * (columns - 1)) / columns);
    }
  }, [boxSize]);
  console.log('kkkk');
  console.log(items);

  return withNativeProps(
    props,

    <View
      // @ts-ignore
      id={boxEl}
      // @ts-ignore
      onLayout={boxRnCallBack}
      className={classnames(`${classPrefix}`)}
      style={{
        //...wrapStyle,
        // @ts-ignore
        opacity: boxSize.width ? 1 : 0,
      }}
      {...restProps}
    >
      <View
        className={classnames(`${classPrefix}-wrap`)}
        style={{
          marginLeft: gap ? -gap : 0,
        }}
      >
        {items.map((item, index) => {
          return (
            <View
              key={index}
              className={classnames(`${classPrefix}-item`)}
              style={{
                marginLeft: gap,
                marginBottom: gap,
                width: width
                  ? Math.floor(
                      item.props.span
                        ? // @ts-ignore
                          item.props.span * width + (item.props.span - 1) * gap
                        : width
                    )
                  : 'auto',

                height: width && square ? Math.floor(width) : 'auto',
              }}
            >
              {!!item && item}
            </View>
          );
        })}
      </View>
    </View>
  );
};
