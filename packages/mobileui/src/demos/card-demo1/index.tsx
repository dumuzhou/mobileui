import { View, Button } from '@tarojs/components';
import './index.less';
import { AppPage, DemoBlock, Card } from '../../ux';

const Index = () => {
  return (
    <AppPage>
      <View className="m-demo">
        <DemoBlock title="示例" background="gray">
          <Card />
        </DemoBlock>
      </View>
    </AppPage>
  );
};
export default Index;
