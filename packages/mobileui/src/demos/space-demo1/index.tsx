import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.less';
import { AppPage } from '../../ux';

const Index = () => {
  return (
    <AppPage>
      <View className="m-demo">
        <Text>space demo</Text>
        <Text>space demo</Text>
        <Text>space demo</Text>
      </View>
    </AppPage>
  );
};
export default Index;
