import { View, Button } from '@tarojs/components';
import './index.less';
import { AppPage, DemoBlock, Slider } from '../../ux';

const Index = () => {
  return (
    <AppPage>
      <View className="m-demo">
        <DemoBlock title="示例">
          <Slider />
        </DemoBlock>
      </View>
    </AppPage>
  );
};
export default Index;
