import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.less';
import { AppPage, DemoBlock } from '../../ux';

const Index = () => {
  return (
    <AppPage>
      <View className="m-demo">
        <DemoBlock title="栗子">
          <Text>space demo</Text>
          <Text>space demo</Text>
          <Text>space demo</Text>
        </DemoBlock>
      </View>
    </AppPage>
  );
};
export default Index;
