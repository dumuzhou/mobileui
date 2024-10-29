import { View, Button } from '@tarojs/components';
import './index.less';
import { AppPage, DemoBlock, CapsuleTabs } from '../../ux';

const Index = () => {
  return (
    <AppPage>
      <View className="m-demo">
        <DemoBlock title="示例">
          <CapsuleTabs />
        </DemoBlock>
      </View>
    </AppPage>
  );
};
export default Index;
