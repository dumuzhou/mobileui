import { View, Button } from '@tarojs/components';
import './index.less';
import { AppPage, DemoBlock, IndexBar } from '../../ux';

const Index = () => {
  return (
    <AppPage>
      <View className="m-demo">
        <DemoBlock isFull padding="0" title="示例">
          <IndexBar />
        </DemoBlock>
      </View>
    </AppPage>
  );
};
export default Index;
