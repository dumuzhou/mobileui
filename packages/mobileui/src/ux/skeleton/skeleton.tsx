import classnames from 'classnames';
import { FC } from 'react';
import { View } from '@tarojs/components';
//import { ThemeContext } from '../style';
import './index.less';

const classPrefix = `amu-skeleton`;

export type SkeletonTitleProps = {};

export const SkeletonTitle: FC<SkeletonTitleProps> = () => {
  //const theme = useContext(ThemeContext);
  return <View className={classnames(`${classPrefix}-title`)}></View>;
};
export type SkeletonParagraphProps = {
  lineCount?: number;
};

const defaultSkeletonParagraph: SkeletonParagraphProps = {
  lineCount: 3,
};

export const SkeletonParagraph: FC<SkeletonParagraphProps> = (p) => {
  const props = { ...defaultSkeletonParagraph, ...p };
  const { lineCount } = props;
  return (
    <View>
      {Array(lineCount)
        // @ts-ignore
        .fill()
        .map((_, index) => {
          return (
            <View
              className={classnames(`${classPrefix}-paragraph`)}
              key={index}
            ></View>
          );
        })}
    </View>
  );
};

export type SkeletonProps = {};
export const Skeleton = function (p: SkeletonProps) {
  return <View className={classnames(`${classPrefix}`)}></View>;
};
//export default SideBar;
