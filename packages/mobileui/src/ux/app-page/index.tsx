import Taro from '@tarojs/taro';
import { View, ScrollView, Text } from '@tarojs/components';
import './index.less';

const Index = (props: any) => {
  return (
    <View className="m-app-page">
      <View
        className="m-app-page-header"
        onClick={() => {
          Taro.navigateBack();
        }}
      >
        <Text>返回</Text>
      </View>
      <ScrollView className="m-app-page-body">
        {!!props.children && props.children}
      </ScrollView>
    </View>
  );
};
export default Index;
