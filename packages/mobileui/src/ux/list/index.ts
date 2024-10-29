import './index.less';
import { Swiper } from './swiper';
import { SwiperItem } from './list-item';
import { attachPropertiesToComponent } from '../utils/attach-properties-to-component';

export type { SwiperProps, SwiperItemProps } from './swiper';

export default attachPropertiesToComponent(Swiper, {
  Item: SwiperItem,
});
