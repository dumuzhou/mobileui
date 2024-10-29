import './index.less';
import { Grid, GridItem } from './side-bar';
import { attachPropertiesToComponent } from '../utils/attach-properties-to-component';

export type { GridProps, GridItemProps } from './side-bar';

export default attachPropertiesToComponent(Grid, {
  Item: GridItem,
});
