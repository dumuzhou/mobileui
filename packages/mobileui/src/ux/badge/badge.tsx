import classnames from 'classnames';
import React, { useContext } from 'react';
import { View, Text } from '@tarojs/components';
import { ThemeContext } from '../theme';
import './index.less';

const classPrefix = `amu-badge`;

export const dot = <React.Fragment />;

export type BadgeProps = {
  content?: string | typeof dot;
  children?: any;
};

const defaultProps: BadgeProps = {};

export const Badge = function (p: BadgeProps) {
  const props = { ...defaultProps, ...p };
  const isDot = props.content === dot;
  const theme = useContext(ThemeContext);

  return (
    <View className={classnames(`${classPrefix}`)}>
      <View
        className={classnames(
          `${classPrefix}-box`,

          isDot ? `${classPrefix}-box-dot` : null,
          !!props.children ? `${classPrefix}-box-ab` : null
        )}
      >
        <View
          className={classnames(
            `${classPrefix}-wrap`,

            isDot ? `${classPrefix}-wrap-dot` : null
          )}
          style={{
            backgroundColor: theme.badge,
          }}
        >
          {!isDot && !!props.content && (
            <Text
              className={`${classPrefix}-text`}
              style={{
                color: theme.white,
              }}
            >
              {props.content}
            </Text>
          )}
        </View>
      </View>
      {!!props.children && props.children}
    </View>
  );
};
