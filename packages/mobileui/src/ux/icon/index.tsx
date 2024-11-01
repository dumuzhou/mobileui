import classnames from 'classnames';
import { Image } from '@tarojs/components';
import { ThemeContext } from '../theme';
import Left333 from './images/left_333.png';
import './index.less';

const classPrefix = `mbu-icon`;
const icons = {
  back_333: Left333,
};

export type DividerProps = {
  name?: 'back';
  size?: number;
  color?: string;
};
const defaultProps: DividerProps = {
  name: 'back',
  size: 24,
  color: '#333',
};
const Icon = function (p: DividerProps) {
  const props = { ...defaultProps, ...p };
  const { name, color, size } = props;
  return (
    <Image
      className={classnames(`${classPrefix}`)}
      // @ts-ignore
      src={icons[`${name}_${color.replace('#', '')}`]}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};
export default Icon;
